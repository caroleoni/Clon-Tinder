import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDCgtRaqgruRGf46mxjPSp-OAa7MY2Mhl8",
    authDomain: "clon-tinder-82822.firebaseapp.com",
    projectId: "clon-tinder-82822",
    storageBucket: "clon-tinder-82822.appspot.com",
    messagingSenderId: "1048673445071",
    appId: "1:1048673445071:web:563e5db2d6fff08a9c83ba"
  };

  //faibers -> firebase || databeis -> database
  const firebaseApp = initializeApp(firebaseConfig);
  const database = getFirestore(firebaseApp);

  export default database;
