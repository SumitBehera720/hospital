const clamp01 = (n) => Math.min(1, Math.max(0, n));

/** Index of the chapter that contains `progress`. Chapters must be sorted by `start`. */
export function getChapterIndex(chapters, progress) {
  const p = clamp01(progress);
  let index = 0;
  for (let i = 0; i < chapters.length; i += 1) {
    if (p >= chapters[i].start) index = i;
    else break;
  }
  return index;
}
