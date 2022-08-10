import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYwz7Dr-UP2ocj82-IFdEZig-PYzL8wqw",
  authDomain: "style-hut.firebaseapp.com",
  projectId: "style-hut",
  storageBucket: "style-hut.appspot.com",
  messagingSenderId: "183039151308",
  appId: "1:183039151308:web:0ec7f8977ecb43e59b0669"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);