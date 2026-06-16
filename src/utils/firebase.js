// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_SqLlqfpGd2XpFPi0EMSYvOli-gFGV_0",
  authDomain: "netflix-naveen-482bf.firebaseapp.com",
  projectId: "netflix-naveen-482bf",
  storageBucket: "netflix-naveen-482bf.firebasestorage.app",
  messagingSenderId: "1021418150130",
  appId: "1:1021418150130:web:62433ab092ef6a800fd86b",
  measurementId: "G-VH3RK7HNHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);