// sw.js - Service Worker przejściowy: czyści cache starej wersji aplikacji.
// Stary cache-first SW (trigona-cache-v1) serwował nieaktualne assety — ta wersja
// usuwa wszystkie cache i przepuszcza ruch do sieci. Docelowy offline wróci z
// vite-plugin-pwa (precache z haszami w PR3).
self.addEventListener("install", event => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

// Network-only: bez cache — build Vite wersjonuje pliki haszami nazw
self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});
