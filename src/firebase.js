// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5vFHorZG8c1WdwCrqh2-BxJt5TAPTw3I",
  authDomain: "realtor-project-3b905.firebaseapp.com",
  projectId: "realtor-project-3b905",
  storageBucket: "realtor-project-3b905.appspot.com",
  messagingSenderId: "1094436301998",
  appId: "1:1094436301998:web:d682c2aa6bcc3d92f7113f"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db = getFirestore()