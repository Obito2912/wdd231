const menuIconContainer = document.querySelector('.menu-icon__container');
const navMenu = document.querySelector('.nav-menu');

menuIconContainer.addEventListener('click', () => navMenu.classList.toggle('toggle-open-menu'));