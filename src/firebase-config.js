import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM9JQUXDag7lR4k3M060uRmgOp1HXU0Co",
  authDomain: "blog-base-1a098.firebaseapp.com",
  projectId: "blog-base-1a098",
  storageBucket: "blog-base-1a098.appspot.com",
  messagingSenderId: "188990116840",
  appId: "1:188990116840:web:e7767a4c34694e26d88a5d",
  measurementId: "G-QMFWJJK5ZK",
  databaseURL :"https://console.firebase.google.com/u/0/project/blog-base-1a098/database/blog-base-1a098-default-rtdb/data/~2F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
