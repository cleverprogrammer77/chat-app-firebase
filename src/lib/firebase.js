import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-40a7c.firebaseapp.com",
  projectId: "react-chat-40a7c",
  storageBucket: "react-chat-40a7c.appspot.com",
  messagingSenderId: "609141470063",
  appId: "1:609141470063:web:2b659feebb9564b46d2e9a",
  measurementId: "G-DY17VSWGV4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
