// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyBVmrlf-J2IyDyGSesnG9wqfMBjUOeF3Cg',
  authDomain: 'facebook-clone-43901.firebaseapp.com',
  projectId: 'facebook-clone-43901',
  storageBucket: 'facebook-clone-43901.appspot.com',
  messagingSenderId: '994009057192',
  appId: '1:994009057192:web:6b0d262601e350f40a3f9d',
  measurementId: 'G-4JKNZ1S7W8',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth, provider};
export default db;
