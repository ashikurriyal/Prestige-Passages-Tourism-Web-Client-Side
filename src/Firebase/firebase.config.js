// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5xED6YyXncTJ3vGQEOQ68roV_bkB70MY",
  authDomain: "prestige-passages.firebaseapp.com",
  projectId: "prestige-passages",
  storageBucket: "prestige-passages.appspot.com",
  messagingSenderId: "62880790903",
  appId: "1:62880790903:web:2f0cc764e0c5a2ed8b8972"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;