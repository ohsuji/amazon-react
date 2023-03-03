import firebase from './firebase';

/*
* @Firebase Config
*/ 

const firebaseConfig = {
  apiKey: "AIzaSyDdAHIIhdkBH4AQkQrgtrfTEOWsXVQFYFE",
  authDomain: "clone-f68a8.firebaseapp.com",
  projectId: "clone-f68a8",
  storageBucket: "clone-f68a8.appspot.com",
  messagingSenderId: "880042751540",
  appId: "1:880042751540:web:5d40be87c0661134d87c61",
  measurementId: "G-R42F5SWFV9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.fireStore();
const auth = firebase.auth();

export default { db, auth }

// $ npm install firebase