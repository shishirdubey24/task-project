// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAouUquFi8RZs0dOMQq9l9bLd03opKDc1A",
  authDomain: "task-project-e0c35.firebaseapp.com",
  projectId: "task-project-e0c35",
  storageBucket: "task-project-e0c35.firebasestorage.app",
  messagingSenderId: "1003508106735",
  appId: "1:1003508106735:web:213e8f28706940d27e621a",
  measurementId: "G-Z8NSLTP4EF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
