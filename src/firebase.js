import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCaKVdRmEl7U3lp402OfuF65dFXKpZ2ykY",
  authDomain: "netflix-clone-622aa.firebaseapp.com",
  projectId: "netflix-clone-622aa",
  storageBucket: "netflix-clone-622aa.firebasestorage.app",
  messagingSenderId: "680056881647",
  appId: "1:680056881647:web:2d3d06918202da169bf61a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(""));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    toast(error.code.split("/")[1]);
  }
};
const logout = () => {
  signOut(auth);
};
export { auth, db, login, signup, logout };
