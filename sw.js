const CACHE_NAME = 'frederika-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/about.html',
  '/photos.html',
  '/reviews.html',
  '/style.css',
  '/icon1.png',
  '/icon2.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
});
