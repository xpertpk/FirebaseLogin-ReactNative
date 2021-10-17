// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA62KkseQuVQX8BBA25E0AEb7xnP2T_rW0",
  authDomain: "fir-auth-64f86.firebaseapp.com",
  projectId: "fir-auth-64f86",
  storageBucket: "fir-auth-64f86.appspot.com",
  messagingSenderId: "122745765089",
  appId: "1:122745765089:web:d9a8aa9047857bfb970ba0"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth();

export { auth};