import { items } from "../data/items.mjs";

const msToDays = 86400000;
const theDateToday = new Date();
const now = theDateToday.getTime();
const lastVisit = localStorage.getItem("lastVisit");
const sidebar = document.createElement("div");
sidebar.classList.add("message");

const main = document.querySelector(".discover__main");

if (!lastVisit) {
  sidebar.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const lastVisitTime = Number(lastVisit);
  let differenceInDays = (now - lastVisitTime) / msToDays;
  
  differenceInDays = differenceInDays.toFixed(0);
  
  if (differenceInDays < 1) {
    sidebar.textContent = "Back so soon! Awesome!";
  } else {
    sidebar.textContent = `You last visited ${differenceInDays} ${differenceInDays === "1" ? "day" : "days"} ago.`;
  }
}

localStorage.setItem("lastVisit", now);

main.prepend(sidebar);

function createCard(data) {
    const card = document.createElement('div');
    card.setAttribute('class', 'discover__card');
    card.innerHTML = `
    <img class='hover' src=${data.image} alt=${data.title} width=300 alt=200 loading='lazy'>
    <div>
    <h2>${data.title}</h2>
    <p>${data.description}</p>
    <p>${data.address}</p>
    <button>Learn More</button>
    </div>
    `;
    main.append(card);
}

function displayCards(data) {
    data.forEach(element => {
        createCard(element);
    });
}

displayCards(items);