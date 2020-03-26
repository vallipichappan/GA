import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCVmK43h9xIcluWgHsTbnIHN620ZR7y3nU",
  authDomain: "week10-f6b51.firebaseapp.com",
  databaseURL: "https://week10-f6b51.firebaseio.com",
  projectId: "week10-f6b51",
  storageBucket: "week10-f6b51.appspot.com",
  messagingSenderId: "843311365924",
  appId: "1:843311365924:web:060eb88a9ea75fe82c7db1",
  measurementId: "G-PRS8LEN00B"
};
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;
