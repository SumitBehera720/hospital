#!/usr/bin/env bash
# Encodes your final edit into scrub-friendly H.264 files + a poster.
#
#   bash scripts/encode-story-video.sh path/to/final-edit.mov
#
# Scrubbing (especially backwards) is smooth only when every seek lands near a keyframe.
# GOP = frames between keyframes. 1 = all-intra (perfect scrubbing, largest file).
# 8 is a good default at 24 fps; try 4 for maximum smoothness or 12 for smaller files.
set -euo pipefail
IN="${1:?Usage: encode-story-video.sh <input-video>}"
cd "$(dirname "$0")/.."
OUT=public/story
GOP="${GOP:-8}"
CRF="${CRF:-22}"
FPS="${FPS:-24}"
mkdir -p "$OUT"

encode () { # width crf gop outfile
  ffmpeg -y -i "$IN" -an -vf "scale=$1:-2:flags=lanczos,fps=${FPS}" \
    -c:v libx264 -profile:v high -preset slow -crf "$2" \
    -g "$3" -keyint_min "$3" -sc_threshold 0 \
    -pix_fmt yuv420p -movflags +faststart "$4"
}

encode 1920 "$CRF" "$GOP" "$OUT/story.mp4"
encode 960  "$((CRF+3))" "$((GOP/2 > 1 ? GOP/2 : 1))" "$OUT/story-mobile.mp4"
ffmpeg -y -i "$IN" -frames:v 1 -vf "scale=1920:-2" -q:v 3 "$OUT/poster.jpg"

cat <<MSG

Done. Next:
  1. In src/story/config.js set  video.mobileSrc: '/story/story-mobile.mp4'
  2. Set  video.isPlaceholder: false  and  video.fps: ${FPS}
  3. Adjust chapters[].start to your cut points.
MSG
