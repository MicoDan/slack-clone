import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD9TuO2wrtz8BkX6w3znMT80Zdx1sDFEng",
  authDomain: "slack-clone-c5ccb.firebaseapp.com",
  projectId: "slack-clone-c5ccb",
  storageBucket: "slack-clone-c5ccb.appspot.com",
  messagingSenderId: "143384218491",
  appId: "1:143384218491:web:344cd82e74e14188b24bde"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, db, provider };
