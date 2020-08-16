import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDndQV2D7kOevN26ie72vv8U8U6fmZbAwc',
  authDomain: 'firegram-5e831.firebaseapp.com',
  databaseURL: 'https://firegram-5e831.firebaseio.com',
  projectId: 'firegram-5e831',
  storageBucket: 'firegram-5e831.appspot.com',
  messagingSenderId: '887745073',
  appId: '1:887745073:web:e4167dd5bf13abf6310310',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
