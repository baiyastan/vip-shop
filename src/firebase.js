// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn3_-ds5i7x6GP-9k2WhQ_51DOvEqEsMs",
  authDomain: "register-vip-ad292.firebaseapp.com",
  projectId: "register-vip-ad292",
  storageBucket: "register-vip-ad292.appspot.com",
  messagingSenderId: "897427461851",
  appId: "1:897427461851:web:898629db2bb38b98515efe",
  measurementId: "G-DWCN85EYLY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
