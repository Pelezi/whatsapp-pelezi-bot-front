'use client';

import { useEffect, useState } from 'react';

export function ApiConnectionTest() {
    const [status, setStatus] = useState<'checking' | 'success' | 'error'>('checking');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const testConnection = async () => {
            const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3005/api/v1';
            
            try {
                console.log('Testing API connection to:', apiUrl);
                
                // Test 1: Health check
                const healthResponse = await fetch(`${apiUrl}/health`);
                console.log('Health check response:', healthResponse.status);
                
                if (!healthResponse.ok) {
                    throw new Error(`Health check failed: ${healthResponse.status}`);
                }
                
                // Test 2: VAPID key
                const vapidResponse = await fetch(`${apiUrl}/notifications/vapid-public-key`);
                console.log('VAPID key response:', vapidResponse.status);
                
                if (!vapidResponse.ok) {
                    throw new Error(`VAPID key fetch failed: ${vapidResponse.status}`);
                }
                
                const vapidData = await vapidResponse.json();
                console.log('VAPID key received:', vapidData);
                
                setStatus('success');
                setMessage(`✅ API connected successfully! VAPID key: ${vapidData.publicKey?.substring(0, 20)}...`);
            } catch (error: any) {
                console.error('API connection test failed:', error);
                setStatus('error');
                setMessage(`❌ API connection failed: ${error.message}`);
            }
        };
        
        testConnection();
    }, []);

    return (
        <div className={`rounded-lg p-4 ${
            status === 'checking' ? 'bg-blue-50 dark:bg-blue-900/20' :
            status === 'success' ? 'bg-green-50 dark:bg-green-900/20' :
            'bg-red-50 dark:bg-red-900/20'
        }`}>
            <p className={`text-sm ${
                status === 'checking' ? 'text-blue-800 dark:text-blue-200' :
                status === 'success' ? 'text-green-800 dark:text-green-200' :
                'text-red-800 dark:text-red-200'
            }`}>
                {status === 'checking' ? '⏳ Testing API connection...' : message}
            </p>
        </div>
    );
}
