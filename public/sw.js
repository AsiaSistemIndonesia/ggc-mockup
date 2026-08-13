const CACHE_NAME = 'ggc-stockfile-shell-v2';

const APP_SHELL_URLS = [
  '/',
  '/login',
  '/dashboard',
  '/inbound',
  '/stock',
  '/outbound',
  '/procure',
  '/retail',
  '/barge',
  '/cartrack',
  '/cctv',
  '/analisa',
  '/reports',
  '/admin',
  '/manifest.json',
  '/icon.svg',
  '/icon-light-32x32.png'
];

// 1. Install Event - Pre-cache App Shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Pre-caching App Shell');
      return cache.addAll(APP_SHELL_URLS).catch((err) => {
        console.warn('[SW] Pre-cache partial failure:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// 2. Activate Event - Clean old caches & claim clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Fetch Event - Serve from Cache when Offline
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Ignore chrome-extension or non-http(s) requests
  if (!url.protocol.startsWith('http')) return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // If network response is valid, clone and cache it dynamically
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(async () => {
        // Network failed (Internet OFF / Offline) -> Serve from Cache
        console.log('[SW] Network request failed. Serving from cache:', event.request.url);
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) {
          return cachedResponse;
        }

        // Fallback for navigation requests (HTML pages)
        if (event.request.mode === 'navigate') {
          const pageFallback = await caches.match('/dashboard') || await caches.match('/login') || await caches.match('/');
          if (pageFallback) return pageFallback;
        }

        return new Response('Offline - GGC Stockfile content cached', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: new Headers({ 'Content-Type': 'text/plain' })
        });
      })
  );
});
