import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBabGzlit2c5HjMBPwKAlHkPunTDIUB2a4",
  authDomain: "catesancarlos.firebaseapp.com",
  databaseURL: "https://catesancarlos.firebaseio.com",
  projectId: "catesancarlos",
  storageBucket: "catesancarlos.appspot.com",
  messagingSenderId: "346342867913",
  appId: "1:346342867913:web:b0da9fac0cd574cc781e18"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

export default db