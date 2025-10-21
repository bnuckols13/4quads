const CACHE_NAME = 'ema-tracker-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/firebase-config.js',
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js'
];

// Install service worker and cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

// Activate and clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch strategy: Network first, fallback to cache
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Clone the response before caching
        const responseToCache = response.clone();
        caches.open(CACHE_NAME)
          .then(cache => cache.put(event.request, responseToCache));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});

// Push notification handler
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};

  const options = {
    body: data.body || 'Time to check in! How are you feeling?',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    vibrate: [200, 100, 200],
    tag: 'ema-reminder',
    requireInteraction: true,
    actions: [
      {
        action: 'log-now',
        title: 'Log Entry',
        icon: '/icon-192.png'
      },
      {
        action: 'snooze',
        title: 'Remind Later',
        icon: '/icon-192.png'
      }
    ],
    data: {
      url: '/index.html'
    }
  };

  event.waitUntil(
    self.registration.showNotification(data.title || 'EMA Check-in Time! 📊', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'log-now') {
    event.waitUntil(
      clients.openWindow('/')
    );
  } else if (event.action === 'snooze') {
    // Schedule another notification in 30 minutes
    setTimeout(() => {
      self.registration.showNotification('EMA Check-in Reminder! 📊', {
        body: 'Ready to log your feelings now?',
        icon: '/icon-192.png',
        vibrate: [200, 100, 200],
        tag: 'ema-reminder'
      });
    }, 30 * 60 * 1000);
  } else {
    event.waitUntil(
      clients.openWindow(event.notification.data.url || '/')
    );
  }
});
