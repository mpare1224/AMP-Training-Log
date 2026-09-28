const CACHE = 'amp-phase1-v1.2.2';
const ASSETS = [
  './',
  './index.html',
  './styles.css?v=1.2.1',
  './app.js?v=1.2.1',
  './manifest.json?v=1.2.1',
  './icon.svg'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith((async () => {
    try {
      const fresh = await fetch(event.request, { cache: 'no-store' });
      if (fresh && fresh.ok) {
        const cache = await caches.open(CACHE);
        cache.put(event.request, fresh.clone());
      }
      return fresh;
    } catch (err) {
      const cached = await caches.match(event.request);
      if (cached) return cached;
      if (event.request.mode === 'navigate') return caches.match('./index.html');
      throw err;
    }
  })());
});
