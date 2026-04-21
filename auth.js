// ===== auth.js — UI logic for Sign In / Join Now modal =====
import {
  signInWithGoogle,
  registerWithEmail,
  loginWithEmail,
  logoutUser,
  onAuthChange
} from "./firebase.js";

// ── DOM refs ──────────────────────────────────────────────
const modal          = document.getElementById("auth-modal");
const modalTitle     = document.getElementById("modal-title");
const emailInput     = document.getElementById("auth-email");
const passwordInput  = document.getElementById("auth-password");
const submitBtn      = document.getElementById("auth-submit");
const googleBtn      = document.getElementById("auth-google");
const toggleLink     = document.getElementById("auth-toggle");
const closeBtn       = document.getElementById("auth-close");
const errorMsg       = document.getElementById("auth-error");

const signInNavBtn   = document.getElementById("nav-signin");
const joinNavBtn     = document.getElementById("nav-join");
const joinHeroBtn    = document.getElementById("hero-join");
const userDisplay    = document.getElementById("nav-user");
const signOutBtn     = document.getElementById("nav-signout");

// ── State ─────────────────────────────────────────────────
let isLoginMode = true; // true = Sign In, false = Join/Register

// ── Helpers ───────────────────────────────────────────────
function openModal(loginMode = true) {
  isLoginMode = loginMode;
  updateModalUI();
  modal.classList.remove("hidden");
  errorMsg.textContent = "";
  emailInput.value = "";
  passwordInput.value = "";
}

function closeModal() {
  modal.classList.add("hidden");
}

function updateModalUI() {
  if (isLoginMode) {
    modalTitle.textContent  = "Sign In";
    submitBtn.textContent   = "Sign In";
    toggleLink.innerHTML    = "Don't have an account? <span>Join Now</span>";
  } else {
    modalTitle.textContent  = "Create Account";
    submitBtn.textContent   = "Join Now";
    toggleLink.innerHTML    = "Already have an account? <span>Sign In</span>";
  }
}

function showError(msg) {
  errorMsg.textContent = msg;
}

// ── Auth state → update nav ───────────────────────────────
onAuthChange((user) => {
  if (user) {
    // Signed in
    const name = user.displayName || user.email;
    userDisplay.textContent  = `Hi, ${name}`;
    userDisplay.classList.remove("hidden");
    signOutBtn.classList.remove("hidden");
    signInNavBtn.classList.add("hidden");
    joinNavBtn.classList.add("hidden");
  } else {
    // Signed out
    userDisplay.classList.add("hidden");
    signOutBtn.classList.add("hidden");
    signInNavBtn.classList.remove("hidden");
    joinNavBtn.classList.remove("hidden");
  }
});

// ── Event listeners ───────────────────────────────────────
signInNavBtn?.addEventListener("click", (e) => { e.preventDefault(); openModal(true); });
joinNavBtn?.addEventListener("click",   (e) => { e.preventDefault(); openModal(false); });
joinHeroBtn?.addEventListener("click",  (e) => { e.preventDefault(); openModal(false); });
closeBtn?.addEventListener("click", closeModal);

// Close modal when clicking outside the card
modal?.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// Toggle between Sign In / Join
toggleLink?.addEventListener("click", () => {
  isLoginMode = !isLoginMode;
  updateModalUI();
  errorMsg.textContent = "";
});

// Email/Password submit
submitBtn?.addEventListener("click", async () => {
  const email    = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    showError("Please enter your email and password.");
    return;
  }

  try {
    if (isLoginMode) {
      await loginWithEmail(email, password);
    } else {
      await registerWithEmail(email, password);
    }
    closeModal();
  } catch (err) {
    // Make Firebase error messages friendlier
    const friendly = {
      "auth/user-not-found":       "No account found with that email.",
      "auth/wrong-password":       "Incorrect password. Try again.",
      "auth/email-already-in-use": "That email is already registered.",
      "auth/weak-password":        "Password must be at least 6 characters.",
      "auth/invalid-email":        "Please enter a valid email address.",
      "auth/invalid-credential":   "Invalid email or password.",
    };
    showError(friendly[err.code] || err.message);
  }
});

// Google Sign-In
googleBtn?.addEventListener("click", async () => {
  try {
    await signInWithGoogle();
    closeModal();
  } catch (err) {
    showError("Google sign-in failed. Please try again.");
  }
});

// Sign Out
signOutBtn?.addEventListener("click", async (e) => {
  e.preventDefault();
  await logoutUser();
});
