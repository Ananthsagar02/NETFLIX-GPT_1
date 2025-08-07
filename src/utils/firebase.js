// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-TABCz7-DM7ulEaIJq3PAWxJxleZB6lw",
  authDomain: "netflix-gpt-d187e.firebaseapp.com",
  projectId: "netflix-gpt-d187e",
  storageBucket: "netflix-gpt-d187e.firebasestorage.app",
  messagingSenderId: "1001661139348",
  appId: "1:1001661139348:web:d66363838fd915fc4be781",
  measurementId: "G-K11THMRZ6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();