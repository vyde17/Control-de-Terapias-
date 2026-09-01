self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('terapias-v1').then(cache => {
      return cache.addAll(['/Control-de-Terapias-/index.html', '/Control-de-Terapias-/manifest.json']);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
