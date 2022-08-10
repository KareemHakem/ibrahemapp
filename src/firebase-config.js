import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMV0mHP71cH7V-E-N55EpoULsBFzALVBY",
  authDomain: "react-crud-19f77.firebaseapp.com",
  projectId: "react-crud-19f77",
  storageBucket: "react-crud-19f77.appspot.com",
  messagingSenderId: "109119757565",
  appId: "1:109119757565:web:0ce55d95ebabb2e26b3294",
  measurementId: "G-YLKW2YHMCX",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
