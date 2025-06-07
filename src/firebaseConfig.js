// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa7sYkm6GXZMVCJr0pDUjvv0Nt6IcfW3s",
  authDomain: "breadboard-4a4e6.firebaseapp.com",
  projectId: "breadboard-4a4e6",
  storageBucket: "breadboard-4a4e6.firebasestorage.app",
  messagingSenderId: "851505754217",
  appId: "1:851505754217:web:b6278c03ba03efedcc72f8",
  measurementId: "G-3G641G46R4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db };