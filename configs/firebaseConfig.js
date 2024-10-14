import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "car-dakho.firebaseapp.com",
    projectId: "car-dakho",
    storageBucket: "car-dakho.appspot.com",
    messagingSenderId: "749141142524",
    appId: "1:749141142524:web:f849e802a21cc57544e079",
    measurementId: "G-7MK45N7SX6"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);