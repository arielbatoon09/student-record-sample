import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9kVTrevJSjWvjDI4Q0sGxSN7HRioqHIY",
  authDomain: "newapp-f3ca0.firebaseapp.com",
  projectId: "newapp-f3ca0",
  storageBucket: "newapp-f3ca0.appspot.com",
  messagingSenderId: "727896457770",
  appId: "1:727896457770:web:bcae2d6487de5478e87953"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;