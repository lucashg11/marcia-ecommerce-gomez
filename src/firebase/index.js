import * as firebase from "firebase/app"; import "firebase/firestore"; 
const firebaseConfig = { 
    apiKey: "AIzaSyBbXOs2jjsFSwKCbgamGYerjvS6cQQIPgU",
    authDomain: "marcia-e-commerce.firebaseapp.com",
    projectId: "marcia-e-commerce",
    storageBucket: "marcia-e-commerce.appspot.com",
    messagingSenderId: "35065613192",
    appId: "1:35065613192:web:0ca6759c99e2c39d44883d" 
}; 
const app = firebase.initializeApp(firebaseConfig); 
export const getFirebase = () => app; 
export const getFirestore = () => firebase.firestore(app); 