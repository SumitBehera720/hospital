import { useEffect } from 'react';
import { getScrollMetrics, isStagePinned } from '../scrollMetrics.js';

/**
 * Mouse movement -> story progress.
 *
 * The mouse never owns a second timeline. It moves the page scroll position inside
 * the pinned section, and the scroll hook turns that into progress. Wheel, keyboard,
 * touch, scrollbar and mouse therefore always agree, and reversing is exact.
 *
 * Active only while the stage is pinned and the pointer is over it, so the rest of the
 * site behaves normally. The cursor can never push the page out of the section.
 */
export function useCursorTimeline({
  stageRef,
  sectionRef,
  enabled,
  mode = 'cumulative',
  sensitivity = 0.5,
  inset = 0.12,
}) {
  useEffect(() => {
    const stage = stageRef.current;
    const section = sectionRef.current;
    if (!enabled || !stage || !section) return undefined;

    let pendingDelta = 0;
    let absoluteFraction = null;
    let raf = null;

    const apply = () => {
      raf = null;
      const { top, range } = getScrollMetrics(section);
      if (range <= 0) return;

      let next;
      if (mode === 'absolute') {
        if (absoluteFraction === null) return;
        next = top + absoluteFraction * range;
      } else {
        next = window.scrollY + (pendingDelta / window.innerHeight) * sensitivity * range;
        pendingDelta = 0;
      }
      next = Math.min(top + range, Math.max(top, next));
      window.scrollTo({ top: next, behavior: 'instant' });
    };

    const onMove = (event) => {
      if (event.pointerType && event.pointerType !== 'mouse') return;
      const y = event.clientY;
      if (!isStagePinned(section)) return;

      if (mode === 'absolute') {
        const f = (y / window.innerHeight - inset) / (1 - 2 * inset);
        absoluteFraction = Math.min(1, Math.max(0, f));
      } else {
        pendingDelta += event.movementY || 0;
      }
      if (raf === null) raf = requestAnimationFrame(apply);
    };

    const onLeave = () => {
      pendingDelta = 0;
    };

    stage.addEventListener('pointermove', onMove, { passive: true });
    stage.addEventListener('pointerleave', onLeave);
    return () => {
      stage.removeEventListener('pointermove', onMove);
      stage.removeEventListener('pointerleave', onLeave);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [stageRef, sectionRef, enabled, mode, sensitivity, inset]);
}
