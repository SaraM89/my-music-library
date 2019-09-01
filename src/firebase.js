import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpHhNmJ0W1bWNZOfo880gUzBQV_y9_BUE",
  authDomain: "brief4-7550e.firebaseapp.com",
  databaseURL: "https://brief4-7550e.firebaseio.com",
  projectId: "brief4-7550e",
  storageBucket: "",
  messagingSenderId: "242048597826",
  appId: "1:242048597826:web:8d56f3e9323b5231"
};

firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  login_hint: "user@example.com"
});

export const firestore = firebase.firestore();
export default firebase;
