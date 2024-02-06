
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCy0jeDHVMD8fqJAOUvdNZhujy1SVOcO_M",
  authDomain: "coffee-making-server-clint.firebaseapp.com",
  projectId: "coffee-making-server-clint",
  storageBucket: "coffee-making-server-clint.appspot.com",
  messagingSenderId: "190358504121",
  appId: "1:190358504121:web:414d9d164eeb3dd66d1168"
};

const app = initializeApp(firebaseConfig);
export default app;