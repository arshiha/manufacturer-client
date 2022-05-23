// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKSTDdaXK29f0oAb68tWxxPP0GkifQQtE",
  authDomain: "bicycle-parts-manufacturer.firebaseapp.com",
  projectId: "bicycle-parts-manufacturer",
  storageBucket: "bicycle-parts-manufacturer.appspot.com",
  messagingSenderId: "153289828742",
  appId: "1:153289828742:web:89e5ddcf6973e3ae992407",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
