// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-def1f.firebaseapp.com",
  projectId: "mern-estate-def1f",
  storageBucket: "mern-estate-def1f.appspot.com",
  messagingSenderId: "595586834508",
  appId: "1:595586834508:web:68d90749fcb7627ecb94e9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);