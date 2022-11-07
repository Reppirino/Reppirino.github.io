// Select DOM Items
var menuToggle = document.querySelector('.menu-toggle');
var menu = document.querySelector('.menu');
var menuNav = document.querySelector('.menu-nav');
var navLinks = document.querySelectorAll('.nav-item');

// Initial State
let showMenu = false;

menuToggle.addEventListener('click', toggleMenu);

function toggleMenu () {
  if (!showMenu) {
    menuToggle.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    navLinks.forEach(item => item.classList.add('show'));
    // Reset
    showMenu = true;
  } else {
    menuToggle.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    navLinks.forEach(item => item.classList.remove('show'));
    // Reset
    showMenu = false;
  }
};

// Event Listener
menuNav.addEventListener('click', closeMenu);

function closeMenu () {
  menuToggle.classList.remove('close');
  menu.classList.remove('show');
  menuNav.classList.remove('show');
  navLinks.forEach(item => item.classList.remove('show'));
  // Reset
  showMenu = false;
};