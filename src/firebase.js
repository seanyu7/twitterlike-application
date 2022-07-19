import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHP7KuZIK8erf7cl5j9D63dfEk98A3ynE",
  authDomain: "twitterlike-application.firebaseapp.com",
  projectId: "twitterlike-application",
  storageBucket: "twitterlike-application.appspot.com",
  messagingSenderId: "446653385151",
  appId: "1:446653385151:web:84aa9134bda5b26007390a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
/* ここの文章ではファイアーストアをAPPにて使うという意味でgetfirestoreの括弧の中にappと書いてある */

export default db;
