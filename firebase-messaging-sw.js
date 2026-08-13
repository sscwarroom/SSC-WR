// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js');

// Apni Firebase Config yahan paste karo (jo aapki HTML me hai)
const firebaseConfig = {
  apiKey: "AIzaSyBOJZp4UvClw1F0DQ6HBNIxs5VTcJLsjNg",
  authDomain: "ssc-war-room-a6c12.firebaseapp.com",
  projectId: "ssc-war-room-a6c12",
  storageBucket: "ssc-war-room-a6c12.firebasestorage.app",
  messagingSenderId: "745638807550",
  appId: "1:745638807550:web:d9d0279b79cac8c6dca2af",
  measurementId: "G-BEJ4LSJ3SP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging
const messaging = firebase.messaging();

// Jab app background me hogi tab ye function message catch karega
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('Message received in background: ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'SSCWARROOM.PNG' // Aapka logo
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
