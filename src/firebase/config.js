import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCR_14YaQ0J0dNmAse_0LtqqDb-ptsi-HY",
  authDomain: "project-aula-f4bc5.firebaseapp.com",
  projectId: "project-aula-f4bc5",
  storageBucket: "project-aula-f4bc5.appspot.com",
  messagingSenderId: "329325780807",
  appId: "1:329325780807:web:0bf98edb16b0f924677662",
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
