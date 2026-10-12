/** Geometry of the pinned story section, in page coordinates. */
export function getScrollMetrics(section) {
  const rect = section.getBoundingClientRect();
  const top = window.scrollY + rect.top;
  const range = Math.max(0, rect.height - window.innerHeight);
  return { top, range, rect };
}

export function progressFromScroll(section) {
  const { range, rect } = getScrollMetrics(section);
  if (range <= 0) return 0;
  return Math.min(1, Math.max(0, -rect.top / range));
}

export function scrollToProgress(section, progress, { smooth = false } = {}) {
  const { top, range } = getScrollMetrics(section);
  const p = Math.min(1, Math.max(0, progress));
  window.scrollTo({ top: top + p * range, behavior: smooth ? 'smooth' : 'instant' });
}

/** True while the sticky stage is fully pinned to the viewport. */
export function isStagePinned(section) {
  const rect = section.getBoundingClientRect();
  return rect.top <= 2 && rect.bottom >= window.innerHeight - 2;
}
