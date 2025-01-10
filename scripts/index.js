const date = new Date();
const year = date.getFullYear();
const lastModified = document.lastModified;
const copyrightYear = document.querySelector('#year');
const lastUpdate = document.querySelector('#last-update');
const profilePic = document.querySelector('.js-profile-pic');
const navBar = document.querySelector('.nav');

copyrightYear.textContent = year;
lastUpdate.textContent = lastModified;

profilePic.addEventListener('click', () => {
    profilePic.classList.toggle('rotate');
    navBar.classList.toggle('js-open-navBar');
});