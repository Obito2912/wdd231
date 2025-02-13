const menuIconContainer = document.querySelector('.menu-icon__container');
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-menu');

menuIconContainer.addEventListener('click', () => {
    navMenu.classList.toggle('toggle-open-menu');
    animateMenuIcon();
});

function animateMenuIcon() {
    if (!menuIcon.classList.contains('rotate')) {
        menuIcon.classList.remove('rotate-back');
        menuIcon.classList.add('rotate');
    } else {
        menuIcon.classList.remove('rotate');
        menuIcon.classList.add('rotate-back');
    }
}