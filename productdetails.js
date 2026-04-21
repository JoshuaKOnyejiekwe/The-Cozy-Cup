// productdetails.js — fetches a single menu item and renders the product page

import { db           } from "./firebase-config.js";
import { renderNavbar } from "./navbar.js";
import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

renderNavbar();

const page = document.getElementById("product-page");


// ─── Read ID from URL ──────────────────────────────────────────────────────────
// Replaces: $id = isset($_GET['id']) ? intval($_GET['id']) : 0;

const params = new URLSearchParams(window.location.search);
const id     = params.get("id");


// ─── Fetch & Render ────────────────────────────────────────────────────────────

async function loadProduct() {
  if (!id) {
    showError("No product ID provided.");
    return;
  }

  try {
    const item = await fetchProduct(id);

    if (!item) {
      showError("Product not found.");
      return;
    }

    renderProduct(item);

  } catch (error) {
    console.error("Error loading product:", error);
    showError("Failed to load product. Please try again.");
  }
}


// ─── Firebase Query ────────────────────────────────────────────────────────────
// Replaces: SELECT * FROM menu_item WHERE id=$id

async function fetchProduct(id) {
  const docRef  = doc(db, "menu_items", id);
  const docSnap = await getDoc(docRef);

  return docSnap.exists() ? docSnap.data() : null;
}


// ─── Build Page ────────────────────────────────────────────────────────────────

function renderProduct(item) {
  // Update browser tab title — same as PHP: <title><?php echo $item['name']; ?></title>
  document.title = item.name;

  page.innerHTML = `
    <div class="image-card">
      <img src="${item.image}" alt="${item.name}" class="product-img">
    </div>

    <div class="product-info">
      <h1>${item.name}</h1>

      <div class="product-desc-box">
        <h4>Description</h4>
        <p>${item.description}</p>
      </div>

      <h2 class="price">$${parseFloat(item.price).toFixed(2)}</h2>
    </div>
  `;
}


// ─── Error State ───────────────────────────────────────────────────────────────

function showError(message) {
  page.innerHTML = `<p>${message}</p>`;
}


// ─── Init ──────────────────────────────────────────────────────────────────────

loadProduct();