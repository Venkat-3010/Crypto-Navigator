
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDX8nNcFQpjgg3KeQaPSRU8H3A69DOyHbE",
  authDomain: "crypto-navigator-cd8dd.firebaseapp.com",
  projectId: "crypto-navigator-cd8dd",
  storageBucket: "crypto-navigator-cd8dd.appspot.com",
  messagingSenderId: "209501739343",
  appId: "1:209501739343:web:2de66be03443f54442cd3a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;