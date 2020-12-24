import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyADsDWJHT0p2l3HpzNvJnJOOfMiKTFKtCU",
    authDomain: "minitwitter-57c80.firebaseapp.com",
    databaseURL: "https://minitwitter-57c80.firebaseio.com",
    projectId: "minitwitter-57c80",
    storageBucket: "minitwitter-57c80.appspot.com",
    messagingSenderId: "402967365132",
    appId: "1:402967365132:web:5413da3a9102b77503d029",
    measurementId: "G-EHFC0FJEW6"
  };

const appFirebase = firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line import/no-anonymous-default-export
export default appFirebase