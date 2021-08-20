import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCULS7GqBHdDeDdHMTGk9WQF7zdeN0CYaU",
  authDomain: "barter-86037.firebaseapp.com",
  projectId: "barter-86037",
  storageBucket: "barter-86037.appspot.com",
  messagingSenderId: "16263595151",
  appId: "1:16263595151:web:0269319d9311a8a6ab5cfa"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
