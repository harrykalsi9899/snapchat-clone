import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAzOl4nDYlwxDJ5V9Px2mkMMn0tmsz-Em4",
  authDomain: "snapchat-clone-cb522.firebaseapp.com",
  projectId: "snapchat-clone-cb522",
  storageBucket: "snapchat-clone-cb522.appspot.com",
  messagingSenderId: "48731257649",
  appId: "1:48731257649:web:89ce099bc2f0c27a0fce10",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = fireabse.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
