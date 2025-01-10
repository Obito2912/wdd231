const date = new Date();
const year = date.getFullYear();
const lastModified = document.lastModified;
const copyrightYear = document.querySelector('#current-year');
const lastUpdate = document.querySelector('#lastModified');
const profilePic = document.querySelector('.js-profile-pic');
const navBar = document.querySelector('.nav');

copyrightYear.innerHTML = `©${year}<br>`;
lastUpdate.textContent = `Last update: ${lastModified}`;

profilePic.addEventListener('click', () => {
    profilePic.classList.toggle('rotate');
    navBar.classList.toggle('js-open-navBar');
});