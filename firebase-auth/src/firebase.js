import firebase from 'firebase/app';
import "firebase/auth";
import App from './App';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCAmSCFa5Uyvn68Oxeknfwe4TO6GzlGUyg",
    authDomain: "fir-auth-development-ad75a.firebaseapp.com",
    projectId: "fir-auth-development-ad75a",
    storageBucket: "fir-auth-development-ad75a.appspot.com",
    messagingSenderId: "611278262648",
    appId: "1:611278262648:web:374aab1e15d8e99ecc788d"
});

const auth = app.auth();

export {auth};
export default app;