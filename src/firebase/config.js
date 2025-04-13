import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlZSFERp5qmzct1daU5iv7tEao9bU-Vgs",
  authDomain: "mtsblog-21631.firebaseapp.com",
  projectId: "mtsblog-21631",
  storageBucket: "mtsblog-21631.firebasestorage.app",
  messagingSenderId: "1054730271695",
  appId: "1:1054730271695:web:ea85b9f092ec58c14530ba",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
