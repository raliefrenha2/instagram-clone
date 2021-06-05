import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here import the seed file

// import { seedDatabase } from '../seed';

const config = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: ''
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where i want to call the seed file (only ONCE)
// seedDatabase(firebase);
// console.log('firebas', firebase);

export { firebase, FieldValue };
