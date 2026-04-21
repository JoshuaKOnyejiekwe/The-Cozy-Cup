import { getMenuItems } from "./firebase-config.js";
import { renderNavbar } from "./navbar.js";

renderNavbar();

const container = document.getElementById("menu-container");

// ─────────────────────────────
// LOAD MENU FROM FIREBASE
// ─────────────────────────────
async function loadMenu() {
  try {
    const items = await getMenuItems();
    renderMenu(items);
  } catch (error) {
    console.error("Error loading menu:", error);
    container.innerHTML = "<p>Failed to load menu. Please try again.</p>";
  }
}

// ─────────────────────────────
// RENDER MENU (YOUR ORIGINAL LOGIC, CLEANED)
// ─────────────────────────────
function renderMenu(items) {
  if (!items || items.length === 0) {
    container.innerHTML = "<p>No menu items found.</p>";
    return;
  }

  let html = "";
  let currentCategory = "";

  items.forEach(item => {

    // NEW CATEGORY HEADER
    if (item.category !== currentCategory) {
      if (currentCategory !== "") html += `</div>`;

      currentCategory = item.category;
      html += `<h2 class="menu-category">${item.category}</h2>`;
      html += `<div class="menu-items">`;
    }

    // ITEM CARD
    html += `
      <a href="productdetails.html?id=${item.id}" class="menu-link">
        <div class="menu-item-card">
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
        </div>
      </a>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

// ─────────────────────────────
// INIT
// ─────────────────────────────
loadMenu();