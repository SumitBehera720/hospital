/**
 * Maps normalized progress to `video.currentTime` without ever playing the video.
 *
 * - Seeks are snapped to real frame boundaries (when `fps` is known).
 * - Only one seek is in flight at a time. While it is pending, newer requests
 *   overwrite a single "latest wins" slot, so rapid input never builds a seek queue.
 * - A watchdog releases the lock if a browser never fires `seeked`.
 */
export class VideoController {
  constructor(video, { fps = 24, seekTimeoutMs = 300 } = {}) {
    this.video = video;
    this.fps = fps;
    this.seekTimeoutMs = seekTimeoutMs;
    this.progress = 0;
    this.ready = false;
    this.seeking = false;
    this.pending = null;
    this.timer = null;

    this.onSeeked = this.onSeeked.bind(this);
    this.onPlay = this.onPlay.bind(this);
    video.addEventListener('seeked', this.onSeeked);
    video.addEventListener('play', this.onPlay);
  }

  get epsilon() {
    return 0.5 / (this.fps || 24);
  }

  timeFor(progress) {
    const duration = this.video.duration;
    if (!Number.isFinite(duration) || duration <= 0) return 0;
    let t = Math.min(1, Math.max(0, progress)) * duration;
    if (this.fps) t = Math.round(t * this.fps) / this.fps;
    return Math.min(t, Math.max(0, duration - this.epsilon));
  }

  /** Call when metadata and the first frame are available. */
  markReady() {
    this.ready = true;
    this.video.pause();
    this.setProgress(this.progress);
  }

  setProgress(progress) {
    this.progress = progress;
    if (!this.ready) return;
    this.request(this.timeFor(progress));
  }

  request(time) {
    if (this.seeking) {
      this.pending = time;
      return;
    }
    if (Math.abs(time - this.video.currentTime) < this.epsilon) return;
    this.seek(time);
  }

  seek(time) {
    this.seeking = true;
    this.pending = null;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.seeking = false;
      this.flush();
    }, this.seekTimeoutMs);
    this.video.currentTime = time;
  }

  flush() {
    if (this.pending === null) return;
    const time = this.pending;
    this.pending = null;
    if (Math.abs(time - this.video.currentTime) >= this.epsilon) this.seek(time);
  }

  onSeeked() {
    clearTimeout(this.timer);
    this.seeking = false;
    this.flush();
  }

  // The story is scrubbed, never played.
  onPlay() {
    this.video.pause();
  }

  destroy() {
    clearTimeout(this.timer);
    this.video.removeEventListener('seeked', this.onSeeked);
    this.video.removeEventListener('play', this.onPlay);
  }
}
