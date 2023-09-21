'use strict'

const openMenu = document.querySelector('.menu-open');
const closeMenu = document.querySelector('.menu-close');
const menu = document.querySelector('.nav');

// Open menu
openMenu.addEventListener('click', function () {
    menu.classList.remove('hidden');
    openMenu.classList.add('hidden');
});

// Close menu
closeMenu.addEventListener('click', function () {
    menu.classList.add('hidden');
});