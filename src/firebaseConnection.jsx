import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDApacC96uggnKWmU0DeGnZWfI2tB3r-lg",
  authDomain: "diego-b8146.firebaseapp.com",
  projectId: "diego-b8146",
  storageBucket: "diego-b8146.appspot.com",
  messagingSenderId: "28123209008",
  appId: "1:28123209008:web:dc4ce6cf9dd62c0c52bcf5"
};

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  export {db, auth};
