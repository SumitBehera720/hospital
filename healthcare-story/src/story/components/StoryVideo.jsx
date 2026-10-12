import { useEffect, useRef, useState } from 'react';
import { VideoController } from '../VideoController.js';
import { useMediaQuery } from '../hooks/useMediaQuery.js';

/**
 * Full-bleed, muted, never-playing video whose currentTime follows the shared engine.
 * Renders no React updates while scrubbing; only status changes (loading/ready/error) re-render.
 */
export default function StoryVideo({ engine, video, shouldLoad }) {
  const ref = useRef(null);
  const [status, setStatus] = useState('loading');
  const isSmall = useMediaQuery('(max-width: 768px)');
  const src = isSmall && video.mobileSrc ? video.mobileSrc : video.src;

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const controller = new VideoController(el, { fps: video.fps });
    const unsubscribe = engine.subscribe((p) => controller.setProgress(p));

    const tryReady = () => {
      if (Number.isFinite(el.duration) && el.duration > 0 && el.readyState >= 2) {
        controller.markReady();
        setStatus('ready');
      }
    };
    const onError = () => setStatus('error');

    el.addEventListener('loadedmetadata', tryReady);
    el.addEventListener('loadeddata', tryReady);
    el.addEventListener('canplay', tryReady);
    el.addEventListener('error', onError);
    tryReady();

    return () => {
      unsubscribe();
      controller.destroy();
      el.removeEventListener('loadedmetadata', tryReady);
      el.removeEventListener('loadeddata', tryReady);
      el.removeEventListener('canplay', tryReady);
      el.removeEventListener('error', onError);
    };
  }, [engine, video.fps]);

  // A new source (e.g. rotating a phone across the breakpoint) starts a fresh load.
  useEffect(() => {
    setStatus('loading');
  }, [src]);

  return (
    <div
      className="story-video"
      style={video.poster ? { backgroundImage: `url(${video.poster})` } : undefined}
    >
      <video
        ref={ref}
        className="story-video__el"
        data-ready={status === 'ready'}
        src={shouldLoad ? src : undefined}
        poster={video.poster || undefined}
        preload={shouldLoad ? 'auto' : 'none'}
        muted
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        tabIndex={-1}
        aria-hidden="true"
      />

      {status === 'loading' && shouldLoad && (
        <div className="story-status" role="status">
          <span className="story-status__bar" aria-hidden="true" />
          Loading the story
        </div>
      )}

      {status === 'error' && (
        <div className="story-status story-status--error" role="alert">
          <strong>The story video could not be loaded.</strong>
          <span>
            Expected an MP4 at <code>{src}</code>. Add the file to <code>public/story/</code> (see
            README), then reload. You can still scroll on to the rest of the page.
          </span>
        </div>
      )}
    </div>
  );
}
