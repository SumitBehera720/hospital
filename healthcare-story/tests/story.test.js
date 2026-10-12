import { describe, it, expect } from 'vitest';
import { StoryEngine } from '../src/story/StoryEngine.js';
import { VideoController } from '../src/story/VideoController.js';
import { getChapterIndex } from '../src/story/chapters.js';
import { STORY_CONFIG } from '../src/story/config.js';

const clock = { t: 0 };

/** Manual frame scheduler so engine tests are deterministic. */
function manualScheduler() {
  let queue = [];
  let id = 0;
  return {
    request: (cb) => { id += 1; queue.push([id, cb]); return id; },
    cancel: (target) => { queue = queue.filter(([i]) => i !== target); },
    step(ms) { const q = queue; queue = []; q.forEach(([, cb]) => cb((clock.t += ms))); },
    pending: () => queue.length,
  };
}

function fakeVideo({ duration = 10 } = {}) {
  const listeners = {};
  const video = {
    duration,
    _t: 0,
    sets: [],
    paused: true,
    get currentTime() { return this._t; },
    set currentTime(v) { this._t = v; this.sets.push(v); },
    pause() { this.paused = true; },
    addEventListener(n, f) { listeners[n] = f; },
    removeEventListener(n) { delete listeners[n]; },
    fire(n) { listeners[n]?.(); },
  };
  return video;
}

describe('getChapterIndex', () => {
  const ch = STORY_CONFIG.chapters;
  it('follows progress forwards and backwards', () => {
    expect(getChapterIndex(ch, 0)).toBe(0);
    expect(getChapterIndex(ch, 0.199)).toBe(0);
    expect(getChapterIndex(ch, 0.2)).toBe(1);
    expect(getChapterIndex(ch, 0.55)).toBe(2);
    expect(getChapterIndex(ch, 0.81)).toBe(4);
    expect(getChapterIndex(ch, 1)).toBe(4);
    expect(getChapterIndex(ch, 0.39)).toBe(1); // reversing
    expect(getChapterIndex(ch, -5)).toBe(0);
  });
});

describe('StoryEngine', () => {
  it('eases to the target, then stops scheduling frames (pauses)', () => {
    const s = manualScheduler();
    const engine = new StoryEngine({ rate: 12, scheduler: s });
    const seen = [];
    engine.subscribe((p) => seen.push(p));
    engine.setTarget(0.5);
    for (let i = 0; i < 200 && s.pending(); i += 1) s.step(16);
    expect(engine.progress).toBe(0.5);
    expect(s.pending()).toBe(0);
  });

  it('reverses exactly to an earlier position', () => {
    const s = manualScheduler();
    const engine = new StoryEngine({ rate: 12, scheduler: s });
    engine.setTarget(0.8);
    for (let i = 0; i < 300 && s.pending(); i += 1) s.step(16);
    engine.setTarget(0.25);
    for (let i = 0; i < 300 && s.pending(); i += 1) s.step(16);
    expect(engine.progress).toBe(0.25);
  });

  it('clamps and supports instant mode and jumpTo', () => {
    const s = manualScheduler();
    const engine = new StoryEngine({ instant: true, scheduler: s });
    engine.setTarget(7);
    s.step(16);
    expect(engine.progress).toBe(1);
    engine.jumpTo(-3);
    expect(engine.progress).toBe(0);
  });
});

describe('VideoController', () => {
  it('maps progress to frame-snapped currentTime and never plays', () => {
    const v = fakeVideo({ duration: 10 });
    const c = new VideoController(v, { fps: 24 });
    c.markReady();
    c.setProgress(0.5);
    expect(v.currentTime).toBeCloseTo(5, 1);
    v.fire('seeked');
    c.setProgress(0);
    expect(v.currentTime).toBe(0);
    v.fire('play');
    expect(v.paused).toBe(true);
  });

  it('coalesces rapid updates into one in-flight seek plus the latest request', () => {
    const v = fakeVideo({ duration: 10 });
    const c = new VideoController(v, { fps: 24 });
    c.markReady();
    c.setProgress(0.1);
    c.setProgress(0.2);
    c.setProgress(0.3);
    c.setProgress(0.4);
    expect(v.sets.length).toBe(1); // only the first seek was issued
    v.fire('seeked');
    expect(v.sets.length).toBe(2);
    expect(v.currentTime).toBeCloseTo(4, 1); // latest wins, intermediate values skipped
  });

  it('does not seek before ready and never seeks to the exact end', () => {
    const v = fakeVideo({ duration: 10 });
    const c = new VideoController(v, { fps: 24 });
    c.setProgress(0.5);
    expect(v.sets.length).toBe(0);
    c.markReady();
    v.fire('seeked');
    c.setProgress(1);
    expect(v.currentTime).toBeLessThan(10);
  });
});
