const cacheName = 'vtt-v18-cache';
const assets = ['./', './index.html', './manifest.json'];

// Installation du service worker
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Gestion des requêtes pour le mode hors-ligne
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
