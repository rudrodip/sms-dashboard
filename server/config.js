const dotenv = require('dotenv');
dotenv.config();

var firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

module.exports = {
  port: process.env.PORT,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  credentials: firebaseConfig,
  jwtSecret: process.env.JWT_SECRET,
  smsApiKey: process.env.BULKSMS_API_KEY,
  sendInBlueApiKey: process.env.SENDINBLUE_API_KEY,
};