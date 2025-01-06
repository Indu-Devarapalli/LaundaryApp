import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmvv4Q17ol3SMXuA0h01x4dO_Cq8z0G1I",
  authDomain: "webapp-7f3a1.firebaseapp.com",
  projectId: "webapp-7f3a1",
  storageBucket: "webapp-7f3a1.firebasestorage.app",
  messagingSenderId: "868171057130",
  appId: "1:868171057130:web:dcf67e39c2a4451ea2d493"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
