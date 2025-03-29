// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5mH3lJvqmvtUwFCN48xw-qMeA3JZ74qg",
  authDomain: "login-15b4d.firebaseapp.com",
  projectId: "login-15b4d",
  storageBucket: "login-15b4d.firebasestorage.app",
  messagingSenderId: "657083418024",
  appId: "1:657083418024:web:daeefdaeabf3b9367e499d",
  measurementId: "G-1TM8PVWQEC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);