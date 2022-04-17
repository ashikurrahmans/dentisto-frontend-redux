// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhUe2MeAeFPxOqLeIOYbNSPTfkPeYVA3k",
  authDomain: "portfolio-cbfb9.firebaseapp.com",
  projectId: "portfolio-cbfb9",
  storageBucket: "portfolio-cbfb9.appspot.com",
  messagingSenderId: "606172562470",
  appId: "1:606172562470:web:c8ce0589a02e1e672852e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
