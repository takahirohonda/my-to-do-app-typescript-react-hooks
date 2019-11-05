
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('mtdApp').then(function(cache) {
      return cache.addAll([
        '/mtd/index.html',
        '/mtd/default.js',
        '/mtd/style/app.css'
      ]);
    })
  );
 });

 self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
 });