const clamp01 = (n) => Math.min(1, Math.max(0, n));

const defaultScheduler = {
  request: (cb) => requestAnimationFrame(cb),
  cancel: (id) => cancelAnimationFrame(id),
};

/**
 * The one and only story timeline.
 *
 * - `target`  is where the visitor's input says we should be (0-1).
 * - `current` is the eased value that actually drives the video and the UI.
 *
 * Scroll, cursor, the slider and the chapter buttons all end up writing `target`
 * (cursor and slider do it by moving the page scroll position), so there are never
 * competing timelines. The loop only runs while `current` is catching up, so when the
 * visitor stops interacting the story stops on the exact same frame.
 */
export class StoryEngine {
  constructor({ rate = 10, instant = false, scheduler = defaultScheduler } = {}) {
    this.rate = rate;
    this.instant = instant;
    this.scheduler = scheduler;
    this.target = 0;
    this.current = 0;
    this.listeners = new Set();
    this.raf = null;
    this.last = null;
    this.tick = this.tick.bind(this);
  }

  get progress() {
    return this.current;
  }

  setInstant(value) {
    this.instant = Boolean(value);
    if (this.instant) this.setTarget(this.target);
  }

  setRate(rate) {
    this.rate = rate;
  }

  /** Move toward `progress` with easing. */
  setTarget(progress) {
    this.target = clamp01(progress);
    this.kick();
  }

  /** Move to `progress` immediately (initial load, restored scroll position). */
  jumpTo(progress) {
    this.target = clamp01(progress);
    this.current = this.target;
    this.emit();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    listener(this.current);
    return () => this.listeners.delete(listener);
  }

  /** Stop the animation loop. Safe to call repeatedly; the engine can restart later. */
  dispose() {
    if (this.raf !== null) this.scheduler.cancel(this.raf);
    this.raf = null;
    this.last = null;
  }

  kick() {
    if (this.raf !== null) return;
    this.last = null;
    this.raf = this.scheduler.request(this.tick);
  }

  emit() {
    this.listeners.forEach((listener) => listener(this.current));
  }

  tick(now) {
    this.raf = null;
    const dt = this.last === null ? 16 : Math.min(now - this.last, 64);
    this.last = now;

    if (this.instant) {
      this.current = this.target;
    } else {
      const k = 1 - Math.exp((-this.rate * dt) / 1000);
      this.current += (this.target - this.current) * k;
      if (Math.abs(this.target - this.current) < 0.00012) this.current = this.target;
    }

    this.emit();
    if (this.current !== this.target) this.raf = this.scheduler.request(this.tick);
    else this.last = null;
  }
}
