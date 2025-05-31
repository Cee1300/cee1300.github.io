import React from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp, getApps } from 'firebase/app';
import { getMessaging, onMessage } from 'firebase/messaging';

Amplify.configure(awsExports);

// Firebase config
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "farleyinsuranceapp.firebaseapp.com",
  projectId: "farleyinsuranceapp",
  storageBucket: "farleyinsuranceapp.appspot.com",
  messagingSenderId: "633819483738",
  appId: "1:633819483738:web:e17d76d4338976ee4d263"
};

// Prevent duplicate initialization
let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApps()[0];
}

const messaging = getMessaging(firebaseApp);

// Handle foreground push notifications
onMessage(messaging, (payload) => {
  console.log('Foreground message received:', payload);
  alert(`Notification: ${payload.notification?.title}`);
});

// Mount React app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/firebase-messaging-sw.js')
      .then(reg => console.log('Firebase messaging SW registered:', reg))
      .catch(err => console.error('SW registration failed:', err));
  });
}

reportWebVitals();