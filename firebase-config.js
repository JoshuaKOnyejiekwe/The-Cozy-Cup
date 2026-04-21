
// ===== Firebase Core =====
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  orderBy
} from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBy-eAC_E8vJL_ug04OkLWOZOgXC6rmQv8",
  authDomain: "thecozycup-f6615.firebaseapp.com",
  projectId: "thecozycup-f6615",
  storageBucket: "thecozycup-f6615.appspot.com",
  messagingSenderId: "90690927432",
  appId: "1:90690927432:web:85bf96dbcc00f80566117d"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();


// ==========================
// GET ALL MENU ITEMS
// ==========================
export async function getMenuItems() {
  const q = query(
    collection(db, "menu_items"),
    orderBy("category"),
    orderBy("name")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}


// ==========================
// GET SINGLE ITEM
// ==========================
export async function getMenuItem(id) {
  const ref = doc(db, "menu_items", id);
  const snap = await getDoc(ref);

  if (!snap.exists()) return null;

  return { id: snap.id, ...snap.data() };
}