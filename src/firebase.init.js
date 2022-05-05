// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2AIZzbovye31lGKmna5nqukIy2od0qQs",
    authDomain: "warehouse-management-260f2.firebaseapp.com",
    projectId: "warehouse-management-260f2",
    storageBucket: "warehouse-management-260f2.appspot.com",
    messagingSenderId: "882281619365",
    appId: "1:882281619365:web:e0f9171aaa195e22ce524c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;