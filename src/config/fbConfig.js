import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA4RSuJ7xj112nrES3v_Q0orU2pmaNXY7Q",
  authDomain: "projectstackapp.firebaseapp.com",
  databaseURL: "https://projectstackapp.firebaseio.com",
  projectId: "projectstackapp",
  storageBucket: "projectstackapp.appspot.com",
  messagingSenderId: "167168339455"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
