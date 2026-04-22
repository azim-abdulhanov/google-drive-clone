import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'drive-5c14d.firebaseapp.com',
  projectId: 'drive-5c14d',
  storageBucket: 'drive-5c14d.firebasestorage.app',
  messagingSenderId: '959313146402',
  appId: '1:959313146402:web:07154cc0950befb555107b'
}

!getApps().length ? initializeApp(firebaseConfig) : getApp()

const db = getFirestore()

export { db }
