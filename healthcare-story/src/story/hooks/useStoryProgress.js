import { useEffect, useState } from 'react';
import { StoryEngine } from '../StoryEngine.js';

/** Creates the single shared timeline. Does not re-render on progress changes. */
export function useStoryProgress({ rate, instant }) {
  const [engine] = useState(() => new StoryEngine({ rate, instant }));

  useEffect(() => {
    engine.setRate(rate);
    engine.setInstant(instant);
  }, [engine, rate, instant]);

  useEffect(() => () => engine.dispose(), [engine]);
  return engine;
}

/** Re-renders only when the chapter changes, not on every frame. */
export function useChapterIndex(engine, chapters, getIndex) {
  const [index, setIndex] = useState(() => getIndex(chapters, engine.progress));
  useEffect(
    () => engine.subscribe((p) => setIndex(getIndex(chapters, p))),
    [engine, chapters, getIndex],
  );
  return index;
}
