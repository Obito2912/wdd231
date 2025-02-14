const navLinks = document.querySelectorAll('.nav-menu__link');
const currentPage = window.location.pathname.split('/').pop();
const currentPageName = currentPage.split('.');
const menuIconContainer = document.querySelector('.menu-icon__container');
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-menu');

menuIconContainer.addEventListener('click', () => {
    animateMenuIcon();
    if (!navMenu.classList.contains('show')) {
        navMenu.classList.add('show');
        navMenu.style.visibility = 'visible';
        navMenu.style.opacity = '1';
    } else {
        navMenu.classList.remove('show');
        setTimeout(() => {
            navMenu.style.visibility = 'hidden';
            navMenu.style.opacity = '0';
        }, 500);
    }
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

navLinks.forEach(link => {
  if(link.getAttribute('href') === currentPage || link.getAttribute('href') === `${currentPage}#` || link.getAttribute('href') === currentPageName[0]) {
    link.classList.add('js-active');
  }
});