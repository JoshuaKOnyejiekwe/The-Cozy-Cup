// index.js — rewards tab switcher for the home page

import { renderNavbar } from "./navbar.js";

renderNavbar();

const tabs     = document.querySelectorAll(".reward-tab");
const contents = document.querySelectorAll(".reward-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    // Remove active from everything
    tabs.forEach(t     => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    // Set active on the clicked tab and its matching content
    tab.classList.add("active");
    document.getElementById(`reward-${tab.dataset.tab}`).classList.add("active");

  });
});