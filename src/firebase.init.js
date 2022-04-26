// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvXXtDiUtz2FrWYDtiCS5yCFdMBHv4mAc",
  authDomain: "ind-nutri-fair.firebaseapp.com",
  projectId: "ind-nutri-fair",
  storageBucket: "ind-nutri-fair.appspot.com",
  messagingSenderId: "755796970719",
  appId: "1:755796970719:web:2652c5efb8ce6270f1ad6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;