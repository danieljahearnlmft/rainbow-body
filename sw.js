/* Caroline Rainbow — service worker
   Bump CACHE when you ship changes so clients pick them up. */
const CACHE = 'caroline-rainbow-v1';

// Core shell precached on install. The five vendor files below are the ones
// directly imported by index.html. Three.js addons import further helper
// modules at runtime (Pass, ShaderPass, CopyShader, etc.) — those are picked
// up automatically by the runtime cache on the first online visit, so a single
// online load makes the whole app available offline afterward.
const PRECACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/favicon.png',
  '/icon-192.png',
  '/icon-512.png',
  '/icon-512-maskable.png',
  '/apple-touch-icon.png',
  '/vendor/three.module.js',
  '/vendor/jsm/controls/OrbitControls.js',
  '/vendor/jsm/postprocessing/EffectComposer.js',
  '/vendor/jsm/postprocessing/Pass.js',
  '/vendor/jsm/postprocessing/RenderPass.js',
  '/vendor/jsm/postprocessing/MaskPass.js',
  '/vendor/jsm/postprocessing/ShaderPass.js',
  '/vendor/jsm/postprocessing/UnrealBloomPass.js',
  '/vendor/jsm/shaders/CopyShader.js',
  '/vendor/jsm/shaders/LuminosityHighPassShader.js',
  '/vendor/fonts/tibetan.woff2',
  '/share.png',
  '/assets/caroline_01_seated_meditation_white_fill_true_transparent.png',
  '/assets/syf.png',
  '/assets/seed_letters/symbol_01_white.png',
  '/assets/seed_letters/symbol_02_green.png',
  '/assets/seed_letters/symbol_03_red.png',
  '/assets/seed_letters/symbol_04_blue.png',
  '/assets/seed_letters/symbol_05_yellow.png',
  '/assets/symbols/sheet_symbol_1_1.png',
  '/assets/symbols/sheet_symbol_1_2.png',
  '/assets/symbols/sheet_symbol_2_1.png',
  '/assets/symbols/sheet_symbol_2_2.png',
  '/assets/symbols/sheet_symbol_3_1.png',
  '/assets/symbols/sheet_symbol_3_2.png',
  '/assets/symbols/sheet_symbol_4_1.png',
  '/assets/symbols/sheet_symbol_4_2.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // Cache each item individually so one failure can't break the whole install.
    await Promise.allSettled(
      PRECACHE.map((url) => cache.add(new Request(url, { cache: 'reload' })))
    );
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;

  // HTML navigations: network-first so a fresh deploy is seen, fall back to
  // cached shell when offline.
  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(req);
        const cache = await caches.open(CACHE);
        cache.put('/index.html', fresh.clone());
        return fresh;
      } catch {
        return (await caches.match(req)) || (await caches.match('/index.html'));
      }
    })());
    return;
  }

  // Same-origin assets: cache-first, then network (and cache what comes back).
  if (sameOrigin) {
    event.respondWith((async () => {
      const cached = await caches.match(req);
      if (cached) return cached;
      try {
        const fresh = await fetch(req);
        if (fresh && fresh.status === 200) {
          const cache = await caches.open(CACHE);
          cache.put(req, fresh.clone());
        }
        return fresh;
      } catch {
        return cached || Response.error();
      }
    })());
  }
  // Cross-origin requests fall through to the network untouched.
});
