// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKKqEuxAe0bwaO5XWnPzZUSaDd0A9ieNw",
  authDomain: "recipe-realm-client.firebaseapp.com",
  projectId: "recipe-realm-client",
  storageBucket: "recipe-realm-client.appspot.com",
  messagingSenderId: "650977459033",
  appId: "1:650977459033:web:2217174a41f7bc8b672a48",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
