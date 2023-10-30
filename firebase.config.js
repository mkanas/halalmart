// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPJ-oPX78QV2twHE2X2M-Rt_Zv4nNX09k",
  authDomain: "halalmart-397f9.firebaseapp.com",
  projectId: "halalmart-397f9",
  storageBucket: "halalmart-397f9.appspot.com",
  messagingSenderId: "1088046423176",
  appId: "1:1088046423176:web:9fa836d8c6ba53fca1533d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
