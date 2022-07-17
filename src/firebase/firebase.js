import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAHm_OnUk6d-GFhjbt7NHb81Hn5pGQ-TD0",
    authDomain: "chat-react-7ce2a.firebaseapp.com",
    projectId: "chat-react-7ce2a",
    storageBucket: "chat-react-7ce2a.appspot.com",
    messagingSenderId: "543220925035",
    appId: "1:543220925035:web:b8c7212fa03e145667e72e",
    measurementId: "G-5C7LS285S3"
})
const db = firebaseConfig.firestore()
const auth = firebase.auth()
export  {db,auth}