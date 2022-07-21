import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUtG2-SEbqRv3PcXr8yH2TYKZeMH-QV-E",
  authDomain: "social-geek-f4856.firebaseapp.com",
  projectId: "social-geek-f4856",
  storageBucket: "social-geek-f4856.appspot.com",
  messagingSenderId: "97444402242",
  appId: "1:97444402242:web:5a4987ae1782ee69d309db",
  measurementId: "G-ZMHJ7L8RS6",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
console.log(db);
export default db;
