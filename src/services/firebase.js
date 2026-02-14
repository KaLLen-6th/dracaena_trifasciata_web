import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCBZb8SOhecBYE-4ZdE3fKp8c6JvcGJrG4",
    authDomain: "proyeksk2025.firebaseapp.com",
    databaseURL: "https://proyeksk2025-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "proyeksk2025",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, onValue };