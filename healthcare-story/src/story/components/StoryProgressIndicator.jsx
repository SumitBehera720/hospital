import { useEffect, useRef } from 'react';
import { scrollToProgress } from '../scrollMetrics.js';

const STEPS = 1000;

/**
 * Chapter ticks + a native range input (keyboard and screen-reader friendly).
 * Its position is written straight to the DOM from the engine, so no React renders per frame.
 * Dragging it moves the page scroll, which keeps every input on the same timeline.
 */
export default function StoryProgressIndicator({ engine, chapters, chapterIndex, sectionRef }) {
  const rootRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(
    () =>
      engine.subscribe((p) => {
        rootRef.current?.style.setProperty('--p', String(p));
        if (inputRef.current) inputRef.current.value = String(Math.round(p * STEPS));
      }),
    [engine],
  );

  const goTo = (p, smooth) => {
    if (sectionRef.current) scrollToProgress(sectionRef.current, p, { smooth });
  };
  const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div className="story-progress" ref={rootRef}>
      <div className="story-progress__track" aria-hidden="true">
        <span className="story-progress__fill" />
      </div>

      <input
        ref={inputRef}
        className="story-progress__input"
        type="range"
        min={0}
        max={STEPS}
        step={1}
        defaultValue={0}
        aria-label="Story position"
        aria-valuetext={`${chapters[chapterIndex].title}, chapter ${chapterIndex + 1} of ${chapters.length}`}
        onInput={(e) => goTo(Number(e.currentTarget.value) / STEPS, false)}
      />

      {chapters.map((chapter, i) => (
        <button
          key={chapter.id}
          type="button"
          className="story-progress__tick"
          data-active={i === chapterIndex}
          style={{ left: `${chapter.start * 100}%` }}
          aria-label={`Go to ${chapter.title}`}
          aria-current={i === chapterIndex ? 'step' : undefined}
          onClick={() => goTo(chapter.start, smooth)}
        />
      ))}
    </div>
  );
}
