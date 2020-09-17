import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0rfI3m_Cqp4vDCqulCPwDZnEufyMecl8",
  authDomain: "clone-22537.firebaseapp.com",
  databaseURL: "https://clone-22537.firebaseio.com",
  projectId: "clone-22537",
  storageBucket: "clone-22537.appspot.com",
  messagingSenderId: "120349842321",
  appId: "1:120349842321:web:c4e85cc0b290eecd0a1830",
  measurementId: "G-RBTZ3JPDG7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
