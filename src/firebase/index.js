import { initializeApp }from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
const firebaseConfig = { 
    apiKey: "AIzaSyBbXOs2jjsFSwKCbgamGYerjvS6cQQIPgU",
    authDomain: "marcia-e-commerce.firebaseapp.com",
    projectId: "marcia-e-commerce",
    storageBucket: "marcia-e-commerce.appspot.com",
    messagingSenderId: "35065613192",
    appId: "1:35065613192:web:0ca6759c99e2c39d44883d" 
}; 
const app = initializeApp(firebaseConfig); 
export const getFirebase = () => app; 
export { getFirestore };