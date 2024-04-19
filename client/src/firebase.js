// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "real-estate-db139.firebaseapp.com",
  projectId: "real-estate-db139",
  storageBucket: "real-estate-db139.appspot.com",
  messagingSenderId: "728371699041",
  appId: "1:728371699041:web:8effe40065116a52beb920"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);