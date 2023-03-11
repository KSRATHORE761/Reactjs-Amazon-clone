// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB_pDDsx6pfizl_Hx3U06kcSYqD1iyryLY",
    authDomain: "clone-37fef.firebaseapp.com",
    projectId: "clone-37fef",
    storageBucket: "clone-37fef.appspot.com",
    messagingSenderId: "371631627919",
    appId: "1:371631627919:web:c06c48c5529c62012f5afa",
    measurementId: "G-4W3V8LH82Y"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};