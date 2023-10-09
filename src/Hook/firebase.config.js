// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvj4NdPq9m8iDI_BOlo_4Ud7Z4-E3aQ4w",
  authDomain: "tech-and-gaming-event-fcd3d.firebaseapp.com",
  projectId: "tech-and-gaming-event-fcd3d",
  storageBucket: "tech-and-gaming-event-fcd3d.appspot.com",
  messagingSenderId: "380145134361",
  appId: "1:380145134361:web:e7ac364ec514e58fb5f388"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;