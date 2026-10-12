import { useEffect } from 'react';
import { progressFromScroll } from '../scrollMetrics.js';

/**
 * Page scroll position inside the pinned section -> story progress.
 * Passive listener, one update per animation frame. Nothing outside the section is touched.
 */
export function useScrollTimeline(sectionRef, engine) {
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    let raf = null;
    const update = () => {
      raf = null;
      engine.setTarget(progressFromScroll(section));
    };
    const schedule = () => {
      if (raf === null) raf = requestAnimationFrame(update);
    };

    // Start on the right frame if the page loads (or reloads) part-way through the story.
    engine.jumpTo(progressFromScroll(section));

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [sectionRef, engine]);
}
