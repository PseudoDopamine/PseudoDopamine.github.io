// DOM Elements
const navBar = document.querySelector("nav.bar");

// Events
window.addEventListener("scroll", () => { navBar.classList.toggle("scrolled", window.scrollY > 0); });
