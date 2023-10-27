import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyCZZnFMXVNyl7juMnm6lREVYxwCH9pdvuA",
  authDomain: "e-ride-df8ba.firebaseapp.com",
  projectId: "e-ride-df8ba",
  storageBucket: "e-ride-df8ba.appspot.com",
  messagingSenderId: "33281807180",
  appId: "1:33281807180:web:776466fa66732efb4bf5e9"
};



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


