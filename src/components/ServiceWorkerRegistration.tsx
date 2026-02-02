'use client';

import { useEffect } from 'react';
import notificationService from '@/services/notificationService';

export function ServiceWorkerRegistration() {
    useEffect(() => {
        // Register service worker when component mounts
        if ('serviceWorker' in navigator) {
            notificationService.registerServiceWorker()
                .then((registration) => {
                    if (registration) {
                        console.log('Service Worker registered successfully');
                    }
                })
                .catch((error) => {
                    console.error('Service Worker registration failed:', error);
                });
        }
    }, []);

    return null; // This component doesn't render anything
}
