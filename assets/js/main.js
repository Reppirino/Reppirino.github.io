const navButton = document.querySelector(".navbar__nav-toggle");
const menu = document.querySelector(".navbar__mobile-nav");
const closeButton = document.querySelector(".navbar__nav-toggle__close");

// INITIAL STATE
let showMenu = false;

// EVENT LISTENER
navButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menu.classList.add("show");

    showMenu = true;
  } else {
    menu.classList.remove("show");
    showMenu = false;
  }
}

closeButton.addEventListener("click", hideMenu);

function hideMenu() {
  if (!showMenu) {
    menu.classList.add("show");

    showMenu = true;
  } else {
    menu.classList.remove("show");
    showMenu = false;
  }
}
