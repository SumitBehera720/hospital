# Producing the film

The code cannot invent the footage. This is the brief for the one continuous film it expects.

## Shot list (one timeline, ~45-90 s)
1. **Hospital exterior** (0-20%). Wide, modern glass hospital, morning sun, slow push toward the entrance.
2. **Patient arrival** (20-40%). One adult patient walks in. Tracking shot. Doors open, patient enters, interior reveal.
3. **Diagnosis** (40-60%). Same patient, consultation room. Doctor listens, examines, reviews records, explains next steps.
4. **Treatment** (60-80%). Doctors and nurses, monitors, calm coordinated care. Non-graphic.
5. **Recovery** (80-100%). Same patient, healthier and calmer, warmer light, walking out into brightness.

## Keeping the patient consistent
- Generate or shoot from one fixed character reference (face, hair, clothing, build) and reuse it in every shot.
- Chain shots: use the last frame of shot N as the first frame of shot N+1 (image-to-video), keep light direction and colour grade consistent, and finish with one colour pass across the whole edit.
- Prefer camera moves that hide joins (doors opening, a pass behind a wall, a push through a window).
- Footage must be licensed for web use (own shoot, commissioned CG, or a generation tool whose terms allow it).

## Delivering it
1. Export one master (ProRes / high-bitrate H.264), 24 fps, 16:9, no audio.
2. `npm run video:encode -- master.mov`
3. In `src/story/config.js`: set `video.isPlaceholder: false`, `video.mobileSrc: '/story/story-mobile.mp4'`, confirm `video.fps`, and align `chapters[].start` with your cut points (use `start = cutTime / totalDuration`).

## Scrub smoothness
Browsers seek to the nearest keyframe and decode forward. Frequent keyframes make scrubbing, especially backwards, smooth.
- `GOP=8` (default) is a good balance at 24 fps. `GOP=4` is smoother, `GOP=1` is perfect but large.
- Roughly size = placeholder-style all-intra at 1080p is 10-20x larger than normal video. Check the size/smoothness trade-off on a mid-range laptop and a phone.
- If you outgrow video seeking, the next step is a frame sequence drawn on a canvas. The `StoryEngine` is independent of the renderer, so only `StoryVideo.jsx` would change.
