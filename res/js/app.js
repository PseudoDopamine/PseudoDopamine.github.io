// DOM Elements
const navBar = document.querySelector("nav.bar");

// Event listeners
window.addEventListener("scroll", () => { navBar.classList.toggle("scrolled", window.scrollY > 0); });
