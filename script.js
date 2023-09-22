'use strict'

const openMenu = document.getElementById('menu-open');
const closeMenu = document.querySelector('.moblie-menu');
const menu = document.querySelector('.nav');

// Open menu
openMenu.addEventListener('click', function () {
    menu.classList.remove('hidden');
    openMenu.style.display = "none";
});

// Close menu
closeMenu.addEventListener('click', function () {
    menu.classList.add('hidden');
    openMenu.style.display = "block";
});