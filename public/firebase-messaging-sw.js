/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js'
);

const firebaseConfig = {
  apiKey: 'AIzaSyDUUGTtZDOsL4hJvP59jdhUDMleN_W1alE',
  authDomain: 'jornada-milhas-7f310.firebaseapp.com',
  projectId: 'jornada-milhas-7f310',
  storageBucket: 'jornada-milhas-7f310.firebasestorage.app',
  messagingSenderId: '721156681442',
  appId: '1:721156681442:web:0efa4c2e203efbcab638bb',
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Notificação em segundo plano', payload.notification);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
