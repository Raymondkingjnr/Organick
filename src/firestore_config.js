import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmJinEGLcjyMdiM5hsnhYvfH3_8PMCgjA",
  authDomain: "organick-d0d93.firebaseapp.com",
  projectId: "organick-d0d93",
  storageBucket: "organick-d0d93.appspot.com",
  messagingSenderId: "1025027641600",
  appId: "1:1025027641600:web:bc1c644f1a6504f541a3e5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
