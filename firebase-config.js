// Importa los módulos necesarios de Firebase Auth y AsyncStorage
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDVeUknRNfk1FwkGO1YVPkiTujAPoXzpxE",
  authDomain: "vitalexe-1b010.firebaseapp.com",
  projectId: "vitalexe-1b010",
  storageBucket: "vitalexe-1b010.appspot.com",
  messagingSenderId: "283985634560",
  appId: "1:283985634560:web:85c5a997f78d499dd27fe5"
};

// Inicializa la aplicación de Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firebase Auth con AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});