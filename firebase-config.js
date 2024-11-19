// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTWloeMMhzhOwSlRJkzex0QuCh9ZcMeWU",
  authDomain: "blog-project-42dbf.firebaseapp.com",
  projectId: "blog-project-42dbf",
  storageBucket: "blog-project-42dbf.appspot.com",
  messagingSenderId: "565572718052",
  appId: "1:565572718052:web:1f2eb250df781d3aeecbf1",
  measurementId: "G-JLLZTDLXG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();