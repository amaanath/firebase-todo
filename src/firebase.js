import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDa7FSQTPWLKThK6DX93Jz2_1zDXIKdd-I",
    authDomain: "to-do-firebase-66dff.firebaseapp.com",
    projectId: "to-do-firebase-66dff",
    storageBucket: "to-do-firebase-66dff.appspot.com",
    messagingSenderId: "136878879477",
    appId: "1:136878879477:web:b2d4cca edf4c936855cbbc"
});  

const db = firebaseApp.firestore();

export default db;