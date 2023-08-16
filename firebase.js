import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyDpyKi4yQdFMbwoXs4NnvRhRjX46rkDUzU",
  authDomain: "insta-app-38cde.firebaseapp.com",
  projectId: "insta-app-38cde",
  storageBucket: "insta-app-38cde.appspot.com",
  messagingSenderId: "939784209675",
  appId: "1:939784209675:web:7c0a1657e55666f2fd0e0e"
};

const app = initializeApp(firebaseConfig);
// export const db = firebase.firestore()
export const auth = getAuth(app)
export const database = getFirestore(app)
