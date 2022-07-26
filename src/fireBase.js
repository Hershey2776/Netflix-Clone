import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDl3_MDcLjxHPgqMgp8z5cVneHnan9JiJc",

  authDomain: "net-clone-975ab.firebaseapp.com",

  projectId: "net-clone-975ab",

  storageBucket: "net-clone-975ab.appspot.com",

  messagingSenderId: "995312243755",

  appId: "1:995312243755:web:b552ebbf90b3288608066e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth };
export default db;
