// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// SDK

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAatMMDt-8keCliz5K-rZTHyB8g1avYKwc',
    authDomain: 'e-learning-d06c8.firebaseapp.com',
    projectId: 'e-learning-d06c8',
    storageBucket: 'e-learning-d06c8.appspot.com',
    messagingSenderId: '667046658831',
    appId: '1:667046658831:web:b5793346fad01ae7e9347a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
