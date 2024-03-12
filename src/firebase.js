/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWckl8a7cW6Wgr2aQ55KPYOnHQFZNT2Jk",
  authDomain: "backreact-e9cc3.firebaseapp.com",
  projectId: "backreact-e9cc3",
  storageBucket: "backreact-e9cc3.appspot.com",
  messagingSenderId: "547920008966",
  appId: "1:547920008966:web:f217fc6e1c3b33f027f087",
  measurementId: "G-P485DMXDWJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
