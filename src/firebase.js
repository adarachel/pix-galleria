import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { setPersistence, browserSessionPersistence } from 'firebase/auth';

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
        console.log("User is signed in");
    } else {
        console.log("User is signed out");
    }
});

setPersistence(firebaseAuth, browserSessionPersistence)
    .then(() => {
        console.log('Firebase authentication state persistence set');
    })
    .catch((error) => {
        console.error('Error setting Firebase authentication state persistence', error);
    });

export { firebaseApp, firebaseAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
export default firebaseApp;