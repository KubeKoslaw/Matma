// sw.js - Service Worker dla pełnego wsparcia Offline (PWA)

const CACHE_NAME = "trigona-cache-v1";

const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.svg",
  "./css/app.css",
  "./js/app.js",
  "./js/data/angles.js",
  "./js/data/formulas.js",
  "./js/data/tasks.js",
  "./js/modules/unitCircle.js",
  "./js/modules/tableViewer.js",
  "./js/modules/formulaVerifier.js",
  "./js/modules/taskViewer.js",
  "./js/modules/trainer.js",
  "./js/modules/calculators.js",
  "./vendor/katex/katex.min.css",
  "./vendor/katex/katex.min.js",
  "./vendor/katex/contrib/auto-render.min.js",
  "./vendor/lucide/lucide.min.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request).catch(() => {
        // Fallback jeśli brak sieci i brak w cache
        return cachedResponse;
      });
    })
  );
});
