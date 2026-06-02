# Jalü — Caroline Rainbow

A meditation visualizer. **Sing, hum, or chant** — or play a MIDI controller —
and the sound draws an evolving rainbow-body: a luminous figure (Caroline, in
four slowly breathing poses) at the center, geometry emanating and spiralling
outward, quantized jewel-colors per note, light shaped by how hard and how high
you play, OM/AH/HUNG seed syllables and connecting strings, a rainbow arch on a
3+ note chord, and a soft sphere of light that swells while a tone is held.

*Jalü* (Tibetan, "rainbow body") is the realization this piece points at:
form resolving into clear light.

## Use it on a phone (no install, no keyboard)

Open the hosted link, tap **Begin with your voice**, allow the microphone, and
sing or chant. Your voice's pitch becomes color and position; its loudness
becomes brightness and size. Stop, and the field settles. (On iPhone use Safari
or Chrome — Web MIDI isn't available on iOS, so voice is the way in.)

## Use it with MIDI (laptop)

Open in **Chrome**, click **Allow** for MIDI, plug in a controller (Akai / OP-1 /
any USB-MIDI keyboard) and play. Works alongside Ableton or Logic — they make the
sound, this draws the picture, both reading the same controller. Voice and MIDI
coexist; if no controller is present, voice is the default input.

No device handy? Play with keyboard keys `A`–`L`. With no input at all, the field
gently plays itself.

## Controls (bottom panel)

- **Input** — MIDI device ("All inputs" listens to everything).
- **Color** — Note colors / Rainbow / Vajra / Elements / Aurora (all quantized so
  notes read as separate jewels).
- **Glow** — bloom strength.
- **Persist** — how long each shape lives before fading.
- **Drift / Swirl** — how shapes float and spiral outward.
- **Strings** — brightness of the lines connecting notes.
- **Syllables** — how often seed syllables appear.
- **● Rec** — record canvas + voice to a downloadable clip.
- **Clear** — wipe (also the `C` key).

Keys: `H` pin panel · `F` fullscreen · `C` clear · drag to orbit · scroll/pinch
to zoom. On a phone, one finger orbits and pinch zooms; the ◇ handle brings the
panel back.

## How sound maps to the image

- **Pitch** → color (snapped to the palette's anchor colors) + position (a
  chromatic-clock ring; higher octaves sit higher).
- **Loudness / velocity** → size and brightness.
- **Sustain** → a growing sphere of light from the figure.
- **Time** → shapes spin, drift, swirl, and slowly fade, so a session evolves.

## Run locally

1. Double-click **`start.command`** (serves over `http://localhost` and opens
   Chrome — Web MIDI and the mic both require a secure context, so opening the
   file directly won't work).
2. Allow MIDI and/or the microphone when asked.

## Deploy

Static single-file app — no build step. `netlify.toml` is included; connect the
repo in Netlify and it publishes the root directory on every push to `main`.
Also works as-is on GitHub Pages.
