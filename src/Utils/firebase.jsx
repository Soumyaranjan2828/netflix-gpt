// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhvtM5AaQ2WmkOFcuz7EhLZUMIfOUnmzE",
  authDomain: "netflixgpt-3da2b.firebaseapp.com",
  projectId: "netflixgpt-3da2b",
  storageBucket: "netflixgpt-3da2b.firebasestorage.app",
  messagingSenderId: "753756862752",
  appId: "1:753756862752:web:03092a366ac282d7b97f45",
  measurementId: "G-S7HMXTZV5Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
