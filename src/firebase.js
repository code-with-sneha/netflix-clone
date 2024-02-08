import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import{getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAakS8gEBnO-ZPHIrLfu1zi0qKf2dJMUQo",
    authDomain: "netflix-clone-50389.firebaseapp.com",
    projectId: "netflix-clone-50389",
    storageBucket: "netflix-clone-50389.appspot.com",
    messagingSenderId: "184854896852",
    appId: "1:184854896852:web:85ce17821d1dde832c5b41",
    measurementId: "G-Y4BWRBWN6P"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getFirestore();

  export {app,auth,db};
