importScripts('https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyBOJZp4UvClw1F0DQ6HBNIxs5VTcJLsjNg",
  authDomain: "ssc-war-room-a6c12.firebaseapp.com",
  projectId: "ssc-war-room-a6c12",
  storageBucket: "ssc-war-room-a6c12.firebasestorage.app",
  messagingSenderId: "745638807550",
  appId: "1:745638807550:web:d9d0279b79cac8c6dca2af",
  measurementId: "G-BEJ4LSJ3SP"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('Message received in background: ', payload);

  const notificationTitle = payload.notification.title || "SSC War Room";
  const notificationOptions = {
    body: payload.notification.body,
    // 🔥 FIX: Yahan maine aapke logo ka pura original address daal diya hai
    icon: 'https://sscwarroom.github.io/SSC-WR/SSCWARROOM.PNG',
    // 🔥 NAYA FEATURE: Jab user notification par click karega toh website khul jayegi
    data: {
      click_action: 'https://sscwarroom.github.io/SSC-WR/'
    }
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
