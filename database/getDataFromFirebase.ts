// @ts-nocheck
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyAJusJpfVnaUfs-jJn3ZZB-NVkaxi139fw',
  authDomain: 'pension-mooz-sunset-house.firebaseapp.com',
  projectId: 'pension-mooz-sunset-house',
  storageBucket: 'pension-mooz-sunset-house.appspot.com',
  messagingSenderId: '834159666780',
  appId: '1:834159666780:web:89e63cc2358398e8522899',
  measurementId: 'G-YLSSH10FK7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getDataFromFirebase = async (collectionName) => {
  const db = getFirestore(app);

  const dataCol = collection(db, collectionName);
  const dataSnapshot = await getDocs(dataCol);
  const dataList = dataSnapshot.docs.map((doc) => doc.data());

  return dataList;
};
