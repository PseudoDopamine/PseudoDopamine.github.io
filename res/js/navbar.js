/*
 * Represents the navigation bar state in a webpage.
 * When the viewport scrolls, or the nav-bar toggle is invoked, this script is responsible for changing different states of the nav-bar, such as non-transparent backgrounds.
 * By Ramone Graham
 */

// Access DOM Elements
var navBar = document.querySelector("nav.nav-bar"), navMenu = document.querySelector(".nav-bar .menu"), navMenuToggle = document.querySelector(".nav-bar .menu-toggle"), navMenuToggled = false;

window.addEventListener("scroll", () => navBar.classList.toggle("scrolled", window.scrollY > 0));

function toggleNavMenu() {
  navMenuToggled = !navMenuToggled;
  navMenu.style.height = navMenuToggled ? "calc(100vh - 75px)" : null;
  navMenuToggle.innerHTML = navMenuToggled ? "×" : "☰";
}
