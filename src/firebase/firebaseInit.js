import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDANZd1Qaad5xfbSad71-UR7NlU_II1MLM",
  authDomain: "theuptownblooms.firebaseapp.com",
  projectId: "theuptownblooms",
  storageBucket: "theuptownblooms.appspot.com",
  messagingSenderId: "657715425876",
  appId: "1:657715425876:web:b89537d57838edce8db3c1",
  measurementId: "G-VFE0BLN836"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore()