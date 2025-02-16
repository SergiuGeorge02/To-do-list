// Import the Firebase SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Authentication
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3jA4KpxfVPM77S9Ng5v1UMIbA5RlXJZQ",
  authDomain: "cloud-todo-3abcd.firebaseapp.com",
  projectId: "cloud-todo-3abcd",
  storageBucket: "cloud-todo-3abcd.firebasestorage.app",
  messagingSenderId: "968078192257",
  appId: "1:968078192257:web:6725cbb24f4f4b1ceaa780",
  measurementId: "G-QB5JVWQ4N4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app); // Firebase Authentication
const db = getFirestore(app); // Firestore Database

// Export the Firebase services for use in your app
export { auth, db };
