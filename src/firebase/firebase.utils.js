import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDXnfScDD0IknClHsCN8HFExKPuoXewEEE",
    authDomain: "crwn-db-6d7e6.firebaseapp.com",
    projectId: "crwn-db-6d7e6",
    storageBucket: "crwn-db-6d7e6.appspot.com",
    messagingSenderId: "720004728098",
    appId: "1:720004728098:web:1f025d6c15c91d295bd17b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;