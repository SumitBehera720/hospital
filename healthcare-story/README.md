# Cinematic healthcare story (scroll + mouse-scrubbed video)

A pinned, full-screen video section: **Hospital exterior -> Arrival -> Diagnosis -> Treatment -> Recovery**.
The video never autoplays. The visitor's mouse movement, wheel, touch, keyboard or slider position *is* the playhead.

> **Status of the footage:** `public/story/story.mp4` is a **labelled placeholder** (test pattern with frame numbers) so you can verify scrubbing. The photorealistic film is **not included** and was not generated here. Follow `docs/VIDEO_PRODUCTION.md`, then `npm run video:encode`.

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run lint
npm test
npm run build
```

## How it works
One normalized value (0-1) drives everything.

```
wheel / touch / keyboard / scrollbar ─┐
mouse movement ──► window.scrollTo ──┤► useScrollTimeline ─► StoryEngine ─► VideoController ─► video.currentTime
range slider / chapter ticks ─────────┘     (progress)         (eased)           (1 seek in flight)
                                                                    └─► chapter + progress UI
```

- **Scroll**: the section is `100svh + scrollLengthVh` tall with a `position: sticky` stage. Scroll position inside it -> progress. Outside the section nothing is intercepted, and the Skip story link and keyboard always work.
- **Mouse** (desktop, fine pointer, only while the stage is pinned and hovered): moving down advances, up reverses, stopping stops. It works by moving the page scroll position, so mouse, scroll and progress can never disagree or create a second timeline, and mouse movement can't push the page out of the section.
  - `mode: 'cumulative'` (default): relative travel; `sensitivity` = share of the story per viewport-height of cursor travel.
  - `mode: 'absolute'`: vertical cursor position maps to progress (with `inset` dead zones).
  - Disable with `cursor.enabled: false`.
- **Mobile / touch**: native touch scrolling drives the story; no hover needed. `video.mobileSrc` serves a lighter file under 768px.
- **Easing and pausing**: `StoryEngine` eases toward the input target and stops scheduling frames once it arrives, so the video rests on the exact frame. `prefers-reduced-motion` turns easing off and disables cursor control.
- **Seeking**: `VideoController` snaps to frame boundaries, keeps one seek in flight (latest request wins), has a watchdog for missing `seeked` events, and forces `pause()` if anything calls `play()`.
- **No per-frame React renders**: progress bar and slider are updated by writing to the DOM from the engine; only the chapter index lives in React state, and it changes only at chapter boundaries (in both directions).
- **Accessibility**: native `<input type="range">` for the playhead (arrow keys), chapter buttons with labels, `aria-live` chapter text, visible focus, hidden text summary of the film, Skip story link, 44px action targets.
- **Loading/errors**: video `src` is attached only when the section is within one viewport of the screen; poster and a loading state show first; a missing or invalid file shows an explanatory error and the page remains usable.

## Add to an existing project
1. Copy `src/story/` into your app (React 18+, plain JavaScript, no extra dependencies).
2. Copy `public/story/` (or point `video.src` / `video.poster` elsewhere).
3. Render `<HealthcareStorySection />` on your homepage and give the next element `id="after-story"` (or pass `afterId`).
4. Pass overrides if needed: `<HealthcareStorySection config={{ scrollLengthVh: 800, cursor: { enabled: true, mode: 'absolute', inset: 0.1 } }} />` (a shallow merge, so pass a full `cursor` object).

The demo `App.jsx`, header and `after` section are only a host page.

## Known limitations
- Real footage is missing (see above). Smoothness depends on its encoding; start with `GOP=8`.
- Not yet verified in a live browser by the author's tooling (no browser was available); logic is unit tested. Please test on Chrome, Safari (including iOS) and Firefox. iOS Safari can be slow to decode large files while scrubbing, so use the mobile file.
- Cumulative cursor mode is relative, so you may need to lift and re-sweep the mouse over a long film. Absolute mode avoids that but jumps if the pointer enters mid-screen (it is eased).
