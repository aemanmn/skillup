// firebase.js
import firebase from 'firebase/app';

import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAgTnCyZ287pG3gRJ0JbyG2YLbN7vi7kr4",
    authDomain: "skillhub1-d27ea.firebaseapp.com",
    projectId: "skillhub1-d27ea",
    storageBucket: "skillhub1-d27ea.appspot.com",
    messagingSenderId: "316919189830",
    appId: "1:316919189830:web:46a45a7cdb63b04baad547"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();




 /*// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgTnCyZ287pG3gRJ0JbyG2YLbN7vi7kr4",
  authDomain: "skillhub1-d27ea.firebaseapp.com",
  projectId: "skillhub1-d27ea",
  storageBucket: "skillhub1-d27ea.appspot.com",
  messagingSenderId: "316919189830",
  appId: "1:316919189830:web:46a45a7cdb63b04baad547"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); */