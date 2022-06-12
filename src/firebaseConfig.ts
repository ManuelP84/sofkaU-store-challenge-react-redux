// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU-4RiBQVVA5hpHZ1XQwZsQAPKcJxW0JY",
  authDomain: "store-management-challenge.firebaseapp.com",
  projectId: "store-management-challenge",
  storageBucket: "store-management-challenge.appspot.com",
  messagingSenderId: "782226774398",
  appId: "1:782226774398:web:a08594fea2d83756b8fb2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()