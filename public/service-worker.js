importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAS-JL_7yAfKTwd4tPIWQLTMQ0LS1Us4v8",
  authDomain: "farleyinsuranceapp.firebaseapp.com",
  projectId: "farleyinsuranceapp",
  storageBucket: "farleyinsuranceapp.appspot.com",
  messagingSenderId: "633819483738",
  appId: "1:633819483738:web:e17d76d4338976ee4d263"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message: ', payload);
  const { title } = payload.notification;
  self.registration.showNotification(title, {
    body: 'You have a new message.',
    icon: '/logo192.png'
  });
});