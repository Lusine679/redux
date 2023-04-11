import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA-nZDAIxMTykYlcBgEgERb4ZO2hPOfEms",
    authDomain: "test-503ec.firebaseapp.com",
    projectId: "test-503ec",
    storageBucket: "test-503ec.appspot.com",
    messagingSenderId: "977291290006",
    appId: "1:977291290006:web:2079cc630e4b397644a9b7",
    measurementId: "G-FF5VDK7QFS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default getFirestore();