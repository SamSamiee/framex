// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
	apiKey: "AIzaSyCUj250LL1QB4bz6ekVRkxW7Ge5YPEMkdk",
	authDomain: "framex-d94d7.firebaseapp.com",
	projectId: "framex-d94d7",
	storageBucket: "framex-d94d7.firebasestorage.app",
	messagingSenderId: "201391425304",
	appId: "1:201391425304:web:726d5d1d726243a87a806d",
	measurementId: "G-FV1C6765J6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()