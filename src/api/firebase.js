import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBaGXSdblvemDImM8XbQYGpCISJRVr0TSY",
  authDomain: "lmigos.firebaseapp.com",
  databaseURL: "https://lmigos.firebaseio.com",
  projectId: "lmigos",
  storageBucket: "lmigos.appspot.com",
  messagingSenderId: "957603794853",
  appId: "1:957603794853:web:b0274d04f8b24ca4"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
