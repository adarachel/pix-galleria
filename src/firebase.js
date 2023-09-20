import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAtDJDUwOxw-DRpmra2fKHTL6FNvGuDiro",
    authDomain: "pix-galleria.firebaseapp.com",
    projectId: "pix-galleria",
    storageBucket: "pix-galleria.appspot.com",
    messagingSenderId: "148361353993",
    appId: "1:148361353993:web:16c2aedbd2206002b491d8"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth();

onAuthStateChanged(firebaseAuth, (user) => {
    if (user) {
        // User is signed in
        console.log("User is signed in");
    } else {
        // User is signed out
        console.log("User is signed out");
    }
});

export { firebaseApp, firebaseAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword };

export default firebaseApp;