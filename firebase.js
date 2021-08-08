import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA1wiEzKyjndcZ7iLTfIBiUzg-nTfTbAwQ",
    authDomain: "nextjs-chatapp-341a8.firebaseapp.com",
    projectId: "nextjs-chatapp-341a8",
    storageBucket: "nextjs-chatapp-341a8.appspot.com",
    messagingSenderId: "381243000741",
    appId: "1:381243000741:web:10ceb0eb607b49ebf84a4c"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };