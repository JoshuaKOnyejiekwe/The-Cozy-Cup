// navbar.js — shared navbar injected into every page
 
export function renderNavbar() {
  const nav = document.createElement("nav");
  nav.className = "flexboxnavi";
 
  nav.innerHTML = `
    <div class="nav-left">
      <a href="index.html" class="flexboxnaviitems">Home</a>
      <a href="menu.html" class="flexboxnaviitems">Menu</a>
      <a href="#"         class="flexboxnaviitems">Rewards</a>
      <a href="#"         class="flexboxnaviitems">Gift Cards</a>
    </div>
 
    <div class="nav-right">
      <input type="text" placeholder="Search..." class="search-bar">
      <a href="#" class="flexboxnaviitems">Find a store</a>
      <a href="#" class="flexboxnaviitems">Sign in</a>
      <a href="#" class="flexboxnaviitems join">Join Now</a>
    </div>
  `;
 
  document.body.prepend(nav);
}