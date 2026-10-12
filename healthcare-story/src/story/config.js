/**
 * Single place to tune the experience.
 *
 * Chapter `start` values are fractions (0-1) of the video timeline. Adjust them to
 * match the cut points of your final edit. The chapter indicator is derived from the
 * same normalized progress that drives the video, never from a separate timer.
 */
export const STORY_CONFIG = {
  video: {
    // Desktop source. Replace this file with your final cinematic MP4 (see README).
    src: '/story/story.mp4',
    // Optional lower-resolution file for phones (<= 768px wide). null = reuse `src`.
    mobileSrc: null,
    // Optional loading image. Leave unset until a still from the actual film is supplied.
    poster: null,
    // Frame rate of the encoded video. Used to snap seeks to real frame boundaries.
    fps: 24,
    // Set to false once the supplied video is the real production footage.
    isPlaceholder: true,
  },

  // Extra scroll distance, in viewport heights, that represents the full story.
  // Larger = slower, finer scrubbing.
  scrollLengthVh: 600,

  // How quickly the displayed frame catches up with the input (per second).
  // Higher = snappier, lower = silkier. Ignored when reduced motion is requested.
  smoothing: 10,

  cursor: {
    enabled: true,
    // 'cumulative': moving the cursor down/up advances/reverses by relative distance.
    // 'absolute'  : the cursor's vertical position maps directly to progress.
    mode: 'cumulative',
    // cumulative: fraction of the whole story per one viewport-height of cursor travel.
    sensitivity: 0.5,
    // absolute: dead zone at the top and bottom of the viewport (fraction of height).
    inset: 0.12,
  },

  chapters: [
    { id: 'exterior', title: 'The hospital', caption: 'Morning light on glass, and the main entrance ahead.', start: 0 },
    { id: 'arrival', title: 'Arrival', caption: 'A patient walks in. The doors open.', start: 0.2 },
    { id: 'diagnosis', title: 'Diagnosis', caption: 'A doctor listens, examines, and explains what comes next.', start: 0.4 },
    { id: 'treatment', title: 'Treatment', caption: 'A coordinated team provides care.', start: 0.6 },
    { id: 'recovery', title: 'Recovery', caption: 'Stronger, calmer, and walking out into the light.', start: 0.8 },
  ],
};
