// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCWm65JH-OIYCL8E9H1uitKFldu1pGtpuU",
  authDomain: "test-case-c9e67.firebaseapp.com",
  projectId: "test-case-c9e67",
  storageBucket: "test-case-c9e67.appspot.com",
  messagingSenderId: "828862368842",
  appId: "1:828862368842:web:c06eea5942f229b484eab3",
  measurementId: "G-DK1N425VNB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
