import { useEffect, useRef, useState } from 'react';
import { STORY_CONFIG } from '../config.js';
import { getChapterIndex } from '../chapters.js';
import { scrollToProgress } from '../scrollMetrics.js';
import { useStoryProgress, useChapterIndex } from '../hooks/useStoryProgress.js';
import { useScrollTimeline } from '../hooks/useScrollTimeline.js';
import { useNearViewport } from '../hooks/useNearViewport.js';
import { usePrefersReducedMotion } from '../hooks/useMediaQuery.js';
import StoryVideo from './StoryVideo.jsx';
import StoryChapterIndicator from './StoryChapterIndicator.jsx';
import './story.css';

/**
 * Drop-in section. Everything is driven by one StoryEngine:
 *   scroll / slider / chapter buttons  ->  engine  ->  video + chapter + progress UI
 *
 * @param {object} props.config      Overrides for STORY_CONFIG (shallow-merged).
 * @param {string} props.afterId     id of the element that follows the story ("Skip story" target).
 */
export default function HealthcareStorySection({ config: overrides, afterId = 'after-story' }) {
  const config = { ...STORY_CONFIG, ...overrides };
  const { video, chapters } = config;

  const sectionRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();

  const engine = useStoryProgress({ rate: config.smoothing, instant: reducedMotion });
  const chapterIndex = useChapterIndex(engine, chapters, getChapterIndex);
  const nearViewport = useNearViewport(sectionRef);
  const [started, setStarted] = useState(false);

  useScrollTimeline(sectionRef, engine);

  useEffect(() => engine.subscribe((p) => p > 0.02 && setStarted(true)), [engine]);

  return (
    <section
      ref={sectionRef}
      className="story"
      style={{ '--story-length': config.scrollLengthVh }}
      aria-label="Patient journey: from hospital arrival to recovery"
    >
      <div className="story-stage">
        <StoryVideo engine={engine} video={video} shouldLoad={nearViewport} />
        <div className="story-shade" aria-hidden="true" />

        <div className="story-ui">
          <StoryChapterIndicator chapters={chapters} index={chapterIndex} />

          <div className="story-ui__bottom">
            <p className="story-hint" data-hidden={started}>
              Scroll to explore the story
            </p>
            <div className="story-actions">
              <button
                type="button"
                className="story-button"
                onClick={() =>
                  sectionRef.current &&
                  scrollToProgress(sectionRef.current, 0, { smooth: !reducedMotion })
                }
              >
                Back to start
              </button>
              <a className="story-button story-button--primary" href={`#${afterId}`}>
                Skip story
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="visually-hidden">
        A short film in five chapters: the hospital exterior, a patient arriving, a consultation
        with a doctor, treatment by a care team, and the patient recovering and leaving. Use the
        mouse wheel, touch scrolling, or arrow keys to move through it.
      </p>
    </section>
  );
}
