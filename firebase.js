// ===== Firebase SDK Setup =====
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  orderBy
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy-eAC_E8vJL_ug04OkLWOZOgXC6rmQv8",
  authDomain: "thecozycup-f6615.firebaseapp.com",
  projectId: "thecozycup-f6615",
  storageBucket: "thecozycup-f6615.firebasestorage.app",
  messagingSenderId: "90690927432",
  appId: "1:90690927432:web:85bf96dbcc00f80566117d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// ─────────────────────────────────────────────
// AUTH FUNCTIONS
// ─────────────────────────────────────────────

// Google Sign-In
export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Google Sign-In Error:", error.message);
    throw error;
  }
}

// Email/Password Sign-Up
export async function registerWithEmail(email, password) {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    console.error("Registration Error:", error.message);
    throw error;
  }
}

// Email/Password Sign-In
export async function loginWithEmail(email, password) {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    console.error("Login Error:", error.message);
    throw error;
  }
}

// Sign Out
export async function logoutUser() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Sign-Out Error:", error.message);
    throw error;
  }
}

// Auth State Listener — callback receives user or null
export function onAuthChange(callback) {
  return onAuthStateChanged(auth, callback);
}

// ─────────────────────────────────────────────
// FIRESTORE (DATABASE) FUNCTIONS
// ─────────────────────────────────────────────

// Get ALL menu items, sorted by category then name
// Returns array of { id, name, description, price, image, category }
export async function getMenuItems() {
  const q = query(
    collection(db, "menu_items"),
    orderBy("category"),
    orderBy("name")
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
}

// Get ONE menu item by its Firestore document ID
export async function getMenuItem(id) {
  const docRef = doc(db, "menu_items", id);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() };
}

export { auth, db };
