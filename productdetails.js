// productdetails.js

import { getMenuItem } from "./firebase-config.js";
import { renderNavbar } from "./navbar.js";

renderNavbar();

const page = document.getElementById("product-page");

// Get ID from URL
const id = new URLSearchParams(window.location.search).get("id");

async function loadProduct() {
  if (!id) {
    showError("No product ID provided.");
    return;
  }

  try {
    const item = await getMenuItem(id);

    if (!item) {
      showError("Product not found.");
      return;
    }

    renderProduct(item);

  } catch (error) {
    console.error("Error loading product:", error);
    showError("Failed to load product.");
  }
}

function renderProduct(item) {
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

function showError(msg) {
  page.innerHTML = `<p>${msg}</p>`;
}

loadProduct();