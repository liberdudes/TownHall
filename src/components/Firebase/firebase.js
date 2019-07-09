import app from 'firebase/app';
// Firebase App (the core Firebase SDK) is always required and must be listed first
// import * as firebase from "firebase/app";
//
// // Add the Firebase products that you want to use
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

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);

        this.db = app.database();
    }
}

export default Firebase;