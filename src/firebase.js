// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GithubAuthProvider, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, doc, deleteDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwrHKbxx7YrMM-2fDpVLT-XBoUGcUExaM",
  authDomain: "guestbook-3cbad.firebaseapp.com",
  projectId: "guestbook-3cbad",
  storageBucket: "guestbook-3cbad.firebasestorage.app",
  messagingSenderId: "153443758824",
  appId: "1:153443758824:web:b6e6c4ebc2bf7f9ae94f5d",
  measurementId: "G-ZF8K1JP02N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GithubAuthProvider();

export { db, auth, provider, signInWithPopup, signOut, GithubAuthProvider, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, doc, deleteDoc };
