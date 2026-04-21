// menu.js — fetches menu items from Firestore and builds the menu page

import { db           } from "./firebase-config.js";
import { renderNavbar } from "./navbar.js";
import {
  collection,
  query,
  orderBy,
  getDocs
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

renderNavbar();

const container = document.getElementById("menu-container");


// ─── Fetch & Render ────────────────────────────────────────────────────────────

async function loadMenu() {
  try {
    const items = await fetchMenuItems();
    renderMenu(items);
  } catch (error) {
    console.error("Error loading menu:", error);
    container.innerHTML = "<p>Failed to load menu. Please try again.</p>";
  }
}


// ─── Firebase Query ────────────────────────────────────────────────────────────
// Replaces: SELECT * FROM menu_item ORDER BY category, name

async function fetchMenuItems() {
  const q        = query(collection(db, "menu_items"), orderBy("category"), orderBy("name"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}


// ─── Build HTML ────────────────────────────────────────────────────────────────

function renderMenu(items) {
  if (items.length === 0) {
    container.innerHTML = "<p>No menu items found.</p>";
    return;
  }

  let html            = "";
  let currentCategory = "";

  items.forEach(item => {

    // New category heading — same logic as PHP while loop
    if (item.category !== currentCategory) {
      if (currentCategory !== "") html += `</div>`; // close previous group
      currentCategory = item.category;
      html += `<h2 class="menu-category">${item.category}</h2>`;
      html += `<div class="menu-items">`;
    }

    html += buildCard(item);
  });

  html += `</div>`; // close last category group
  container.innerHTML = html;
}


// ─── Single Card ───────────────────────────────────────────────────────────────

function buildCard(item) {
  return `
    <a href="productdetails.html?id=${item.id}" class="menu-link">
      <div class="menu-item-card">
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      </div>
    </a>
  `;
}


// ─── Init ──────────────────────────────────────────────────────────────────────

loadMenu();