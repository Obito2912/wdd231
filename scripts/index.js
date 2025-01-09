const date = new Date();
const year = date.getFullYear();
const lastModified = document.lastModified;
const copyrightYear = document.querySelector('#year');
const lastUpdate = document.querySelector('#last-update');

copyrightYear.textContent = year;
lastUpdate.textContent = lastModified;