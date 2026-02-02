// Service Worker for Push Notifications
self.addEventListener('install', (event) => {
    console.log('Service Worker installing...');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activating...');
    event.waitUntil(clients.claim());
});

self.addEventListener('push', (event) => {
    let notificationData = {
        title: 'Nova Mensagem',
        body: 'Você recebeu uma nova mensagem',
        icon: '/icon-192x192.png',
        badge: '/badge-72x72.png',
        data: {
            url: '/chat',
        },
    };

    if (event.data) {
        try {
            const payload = event.data.json();
            notificationData = {
                ...notificationData,
                ...payload,
            };
        } catch (error) {
            console.error('[Service Worker] Error parsing notification payload:', error);
        }
    }

    event.waitUntil(
        self.registration.showNotification(notificationData.title, {
            body: notificationData.body,
            icon: notificationData.icon,
            badge: notificationData.badge,
            tag: notificationData.tag,
            data: notificationData.data,
            requireInteraction: false,
            vibrate: [200, 100, 200],
        })
    );
});

self.addEventListener('notificationclick', (event) => {
    console.log('Notification clicked:', event);

    event.notification.close();

    const urlToOpen = event.notification.data?.url || '/chat';

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            // Check if there's already a window open
            for (const client of clientList) {
                if (client.url.includes(urlToOpen) && 'focus' in client) {
                    return client.focus();
                }
            }
            
            // If no window is open, open a new one
            if (clients.openWindow) {
                return clients.openWindow(urlToOpen);
            }
        })
    );
});

self.addEventListener('pushsubscriptionchange', (event) => {
    console.log('Push subscription changed');
    
    event.waitUntil(
        self.registration.pushManager.subscribe(event.oldSubscription.options)
            .then((subscription) => {
                console.log('Re-subscribed:', subscription);
                // You could send this new subscription to your server here
            })
    );
});
