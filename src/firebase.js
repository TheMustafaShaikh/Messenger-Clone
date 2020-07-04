import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAwk8v-5PnUQMEkLbO686EdhIdEttiAdCU",
  authDomain: "messenger-clone-15bb3.firebaseapp.com",
  databaseURL: "https://messenger-clone-15bb3.firebaseio.com",
  projectId: "messenger-clone-15bb3",
  storageBucket: "messenger-clone-15bb3.appspot.com",
  messagingSenderId: "517589145943",
  appId: "1:517589145943:web:476c73e2ff51ca48cc4612",
  measurementId: "G-JN43YCVNBB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export { db };
