// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBx3pQWE75WEAGPSebwbfUC1Sa6AV8tSpY",
    authDomain: "genius-car-service-7534b.firebaseapp.com",
    projectId: "genius-car-service-7534b",
    storageBucket: "genius-car-service-7534b.appspot.com",
    messagingSenderId: "1070027640748",
    appId: "1:1070027640748:web:38e00319ea636b58d83409",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
