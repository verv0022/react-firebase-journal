import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC9ejpZlLRneFLphRn2Ndf0ozpaPsuiUKg",
  authDomain: "react-journal-63978.firebaseapp.com",
  databaseURL: "https://react-journal-63978.firebaseio.com",
  projectId: "react-journal-63978",
  storageBucket: "react-journal-63978.appspot.com",
  messagingSenderId: "706166685869",
  appId: "1:706166685869:web:d63769f63ae7d2a63dc624",
  measurementId: "G-PECSPY0YG1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;