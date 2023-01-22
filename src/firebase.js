// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
// import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw3UpA4zD35EtMG-ywAnAN6Xo86oYeK0M",
  authDomain: "resume-c79a2.firebaseapp.com",
  projectId: "resume-c79a2",
  storageBucket: "resume-c79a2.appspot.com",
  messagingSenderId: "762875040569",
  appId: "1:762875040569:web:e5cc6cb1318cf2f1194ee8",
  measurementId: "G-CXT40NBXHG",
  databaseURL: "https://resume-c79a2-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db =  app.firestore();
const auth = firebase.auth();

export {auth}
export default db;