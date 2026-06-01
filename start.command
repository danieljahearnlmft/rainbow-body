#!/bin/bash
# Double-click to launch. Serves on localhost (Web MIDI needs a secure context)
# and opens Chrome. Tries several servers so it works on most Macs.
cd "$(dirname "$0")"
PORT=8123
URL="http://localhost:$PORT/"
( sleep 1; open -a "Google Chrome" "$URL" 2>/dev/null || open "$URL" ) &
echo "Rainbow Bow running at $URL  —  close this window to stop."
if command -v python3 >/dev/null 2>&1; then exec python3 -m http.server $PORT
elif command -v python  >/dev/null 2>&1; then exec python  -m http.server $PORT
elif command -v npx     >/dev/null 2>&1; then exec npx --yes serve -l $PORT .
else
  echo "No python or node found. Install one, or open $URL after starting any static server here."
  read -r _
fi
