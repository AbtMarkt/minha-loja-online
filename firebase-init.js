import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDWTvMQNPc27WJpQfKr1zwdvaw1LDMUxH0",
    authDomain: "abt-marketplace.firebaseapp.com",
    projectId: "abt-marketplace",
    storageBucket: "abt-marketplace.firebasestorage.app",
    messagingSenderId: "763460800092",
    appId: "1:763460800092:web:5ac1f341919c1fa02ea099"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);