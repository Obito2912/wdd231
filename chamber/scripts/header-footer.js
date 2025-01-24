const navEl = document.querySelector(".navBar");
const menuBtn = document.querySelector(".header__menu_icon");
const year = document.querySelector("#current-year");
const lastModified = document.querySelector("#last-modified");
const date = new Date();
year.textContent += date.getFullYear();
lastModified.textContent = document.lastModified;

menuBtn.addEventListener("click", () => {
  navEl.classList.toggle("js-open-navBar");
});