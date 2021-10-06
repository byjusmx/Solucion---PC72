import firebase from 'firebase'
require("@firebase/firestore")


// Inicializar Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDwTvs7rxKaGVKtT_dANHq3fpehOBheBkI",
  authDomain: "job-portal-27490.firebaseapp.com",
  projectId: "job-portal-27490",
  storageBucket: "job-portal-27490.appspot.com",
  messagingSenderId: "370794309267",
  appId: "1:370794309267:web:22fef414b75da1a8554f66"
};

// Inicializar Firebase
if(!firebase.apps.length)
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   
