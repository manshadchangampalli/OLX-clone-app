import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBd6nPBTKEmpd01g4xZDHJitGy5ZAm62E4",
    authDomain: "olx-clone-39c71.firebaseapp.com",
    projectId: "olx-clone-39c71",
    storageBucket: "olx-clone-39c71.appspot.com",
    messagingSenderId: "234043755669",
    appId: "1:234043755669:web:0a3033eb4670f961b49f9c",
    measurementId: "G-2WTT9DGJ6N"
  };

  export default  firebase.initializeApp(firebaseConfig)