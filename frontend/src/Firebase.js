// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeJpSthh0wM_b4_Ib_KXFrfeiBo__fdbc",
  authDomain: "classconnect-e2af8.firebaseapp.com",
  projectId: "classconnect-e2af8",
  storageBucket: "classconnect-e2af8.appspot.com",
  messagingSenderId: "713695109910",
  appId: "1:713695109910:web:5848d5f621cebd679b6637",
  measurementId: "G-8JFD255MRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}