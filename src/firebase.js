import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyCCjgOXNGkyBHCryN5py5t8T6HcalX5Nnk",
  authDomain: "fir-auth-8335d.firebaseapp.com",
  projectId: "fir-auth-8335d",
  storageBucket: "fir-auth-8335d.appspot.com",
  messagingSenderId: "100614034998",
  appId: "1:100614034998:web:8113680c6ac6593101aa97",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
