// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU_UtRXQT6jvOzdGTujLAu9aVUWOlChhk",
  authDomain: "nextjs13-authentication.firebaseapp.com",
  projectId: "nextjs13-authentication",
  storageBucket: "nextjs13-authentication.appspot.com",
  messagingSenderId: "856319865035",
  appId: "1:856319865035:web:874f497aace82efb3ceb4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
