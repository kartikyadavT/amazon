// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBCWbaxaAeZbeGx6MZqQmVu9kVJXaKkOF4",
    authDomain: "fir-91b95.firebaseapp.com",
    projectId: "fir-91b95",
    storageBucket: "fir-91b95.appspot.com",
    messagingSenderId: "121401299938",
    appId: "1:121401299938:web:f2c16b71334f2921461fbb",
    measurementId: "G-6H7HQ56SBE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};