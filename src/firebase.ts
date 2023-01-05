import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAr3VlEDLAfRTOJzhQTiwKel9R5PEjO5EE',
  authDomain: 'mini-paint-1b6e8.firebaseapp.com',
  projectId: 'mini-paint-1b6e8',
  storageBucket: 'mini-paint-1b6e8.appspot.com',
  messagingSenderId: '964180664233',
  appId: '1:964180664233:web:837327f93c06fea5b7aeb8',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
