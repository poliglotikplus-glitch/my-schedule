import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyBCelAB6DNBZXw1XRS-gZJLJAPPx4Rhr6Q',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'polyglotik-calendar.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'polyglotik-calendar',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'polyglotik-calendar.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '87749768051',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:87749768051:web:f9c95bb2fc352ef575cb06',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
