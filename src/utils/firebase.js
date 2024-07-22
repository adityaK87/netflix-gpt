// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyACfP51dwykN-CKimkwQuwH_2c-lhWepDM",
	authDomain: "netflixgpt-766b8.firebaseapp.com",
	projectId: "netflixgpt-766b8",
	storageBucket: "netflixgpt-766b8.appspot.com",
	messagingSenderId: "951136165441",
	appId: "1:951136165441:web:2e271fb997385d8854f0c0",
	measurementId: "G-01B3VB7GM8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
