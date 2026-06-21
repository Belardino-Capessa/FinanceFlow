self.addEventListener("install", () => {
  console.log("Service Worker instalado");
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  console.log("Service Worker ativado");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});