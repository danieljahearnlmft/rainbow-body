# Rainbow Body — MIDI Meditation Visualizer

Play a MIDI controller (Akai, OP-1, keyboard) and the notes draw an evolving
rainbow-body visual: a luminous seated figure at the center, geometry emanating
and spiralling outward, note-name colors, light shaped by how you press and which
octave, occasional OM/AH/HUNG seed syllables and connecting strings, and a
rainbow arch when you hold 3+ keys.

## Use it (hosted — any laptop, no install)

Open **https://danieljahearnlmft.github.io/rainbow-body/** in **Chrome**, click
**Allow** when it asks for MIDI, plug in your controller (Akai / OP-1) by USB,
and play. Works alongside Ableton or Logic — they make the sound, this draws the
picture, both reading the same controller at once.

## Run locally instead

## Quick start

1. Plug the **Akai** or **OP-1** into the Mac by USB.
2. Double-click **`start.command`**. Chrome opens to the visualizer.
3. The first time, Chrome asks to allow MIDI — click **Allow**.
4. Play. (No device handy? Test with keyboard keys `A`–`L`.)

To stop: close the little terminal window that opened.

## What the controls do (top-left panel)

- **MIDI input** — usually leave on "All inputs"; it listens to every device.
- **Persist** — how long each shape lives before fading. Low = ephemeral,
  high = the canvas fills up and accumulates.
- **Drift** — how fast shapes float through space as they evolve.
- **Trails** — brightness of the glowing line that connects notes in play order
  (the "drawing" gesture). 0 turns it off.
- **Clear canvas** — wipe everything (also the `C` key).

Keys: `H` hide panel · `F` fullscreen · `C` clear · drag to orbit · scroll to zoom.

## How notes map to the image

- **Pitch (which note)** → color (hue around the rainbow) + where it appears in
  space (a "chromatic clock" ring; higher octaves sit higher up).
- **Velocity (how hard)** → size and brightness.
- **Time** → shapes spin, drift, and slowly fade, so a performance evolves.

## Devices

- **Akai / OP-1 / any USB-MIDI keyboard** — plug in and play. No other software
  needed. Both are class-compliant, so the browser reads them directly.
- **Ableton Live 11 (optional)** — only needed if you want Live to make the
  *sound* while this draws the *picture*. Route Live's MIDI out to the macOS
  **IAC Driver** bus (Audio MIDI Setup → IAC Driver → "Device is online"), enable
  that port in Live's MIDI preferences, and select it here. For visuals alone,
  skip this entirely.

## Notes

- Use **Google Chrome** (Web MIDI isn't in Safari).
- Must be opened via `start.command` / `http://localhost`, not by opening the
  file directly — Web MIDI requires a secure context.
