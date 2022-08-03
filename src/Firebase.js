import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmC_QltlfslE89bxFLQ5fYvMT7nz-rY3E",
  authDomain: "ibrahim-auth.firebaseapp.com",
  projectId: "ibrahim-auth",
  storageBucket: "ibrahim-auth.appspot.com",
  messagingSenderId: "450534377904",
  appId: "1:450534377904:web:0969e45f4f1059c4212e75",
  measurementId: "G-90B9C3G0Z1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
