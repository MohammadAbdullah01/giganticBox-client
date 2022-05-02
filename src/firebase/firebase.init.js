// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries




// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId,
// };

// const firebaseConfig = {
//     apiKey: "AIzaSyCiLi_4UI1SVTfOn29akMLrK0fHQeuUr0I",
//     authDomain: "giganticbox-42710.firebaseapp.com",
//     projectId: "giganticbox-42710",
//     storageBucket: "giganticbox-42710.appspot.com",
//     messagingSenderId: "1004305796822",
//     appId: "1:1004305796822:web:ad22869703946467cf4377"
// };
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;