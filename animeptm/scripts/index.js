const menuIconContainer = document.querySelector('.menu-icon__container');
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-menu');

menuIconContainer.addEventListener('click', () => {
    // navMenu.classList.toggle('toggle-open-menu');
    animateMenuIcon();
    animateMenu(navMenu);
});

function animateMenu(menu) {
    menu.classList.toggle('show');
    if (!menu.classList.contains('show')) {
        menu.classList.add('hide');
    } else {
        menu.classList.remove('hide');
    }
}

function animateMenuIcon() {
    if (!menuIcon.classList.contains('rotate')) {
        menuIcon.classList.remove('rotate-back');
        menuIcon.classList.add('rotate');
    } else {
        menuIcon.classList.remove('rotate');
        menuIcon.classList.add('rotate-back');
    }
}