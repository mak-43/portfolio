// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAOe3ElmoXplZiGsXyB98PaovKyKw8QJ8",
  authDomain: "portfolio-384f5.firebaseapp.com",
  projectId: "portfolio-384f5",
  storageBucket: "portfolio-384f5.appspot.com",
  messagingSenderId: "243907682155",
  appId: "1:243907682155:web:8f79789af9329775aab62e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

const auth=getAuth(app)
export default auth

