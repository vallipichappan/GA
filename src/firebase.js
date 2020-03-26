import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA40hoF7HM4Z4c3dBLpIb8A4PkWW-iHJnI",
  authDomain: "week8-30d81.firebaseapp.com",
  databaseURL: "https://week8-30d81.firebaseio.com",
  projectId: "week8-30d81",
  storageBucket: "week8-30d81.appspot.com",
  messagingSenderId: "1010742547413",
  appId: "1:1010742547413:web:e79225fc02faf00d09235c",
  measurementId: "G-6K182240E0"

  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;