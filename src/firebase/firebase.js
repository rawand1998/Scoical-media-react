import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCWnrtriKkHGMmuyngRhBkBB6PNHPsBRZw",
  authDomain: "social-media-ebfcb.firebaseapp.com",
  projectId: "social-media-ebfcb",
  storageBucket: "social-media-ebfcb.appspot.com",
  messagingSenderId: "195819659087",
  appId: "1:195819659087:web:6b3241a59c710f04c16f3a",
  measurementId: "G-GWNCVLKQEB"
})
const db = firebaseConfig.firestore()
const auth = firebase.auth()
export  {db,auth}