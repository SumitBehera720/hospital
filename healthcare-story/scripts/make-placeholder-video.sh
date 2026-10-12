#!/usr/bin/env bash
# Generates a clearly-labelled PLACEHOLDER clip so the scrubbing system can be tested
# before the real cinematic film exists. It is NOT the healthcare story.
# Every frame shows its frame number, so you can verify frame-accurate seeking.
set -euo pipefail
cd "$(dirname "$0")/.."
FONT="${FONT:-/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf}"
OUT=public/story
mkdir -p "$OUT"

ffmpeg -y -loglevel error \
  -f lavfi -i "testsrc2=size=854x480:rate=24:duration=15" \
  -vf "drawbox=x=0:y=0:w=iw:h=70:color=black@0.65:t=fill,\
drawtext=fontfile=${FONT}:text='PLACEHOLDER - replace public/story/story.mp4':x=24:y=22:fontsize=26:fontcolor=white,\
drawtext=fontfile=${FONT}:text='frame %{n}   t=%{pts\:hms}':x=(w-text_w)/2:y=h-60:fontsize=34:fontcolor=white:box=1:boxcolor=black@0.6:boxborderw=10" \
  -c:v libx264 -preset medium -crf 30 -g 1 -pix_fmt yuv420p -movflags +faststart -an "$OUT/story.mp4"

ffmpeg -y -loglevel error -i "$OUT/story.mp4" -frames:v 1 -q:v 4 "$OUT/poster.jpg"
echo "Wrote $OUT/story.mp4 and $OUT/poster.jpg (placeholder)"
