// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNKLMWAwIQQYrL-awu9oV4wAEXfZSDljQ",
  authDomain: "zastyzone.firebaseapp.com",
  projectId: "zastyzone",
  storageBucket: "zastyzone.appspot.com",
  messagingSenderId: "552971983303",
  appId: "1:552971983303:web:b1271d8349f12fb59521e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;