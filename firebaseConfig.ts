import "@react-native-firebase/auth";
import "@react-native-firebase/firestore";
import firebase from "@react-native-firebase/app";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import firestore from "@react-native-firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY as string,
  authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN as string,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID as string,
  storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET as string,
  messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID as string,
  appId: process.env.EXPO_PUBLIC_MESSAGING_APP_ID as string,
  measurementId: process.env.EXPO_PUBLIC_MEASUREMENT_ID as string,
  databaseURL: process.env.EXPO_PUBLIC_DATABASE_URL as string,
};

const config = {
  name: process.env.EXPO_PUBLIC_PROJECT_NAME as string,
};
firebase.initializeApp(firebaseConfig, config);

const app = initializeApp(firebaseConfig);

export const db = firestore();
export const storage = getStorage(app);
export const auth = firebase.auth();