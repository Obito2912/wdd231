import { items } from "../data/items.mjs";

const main = document.querySelector(".discover__main");

function createCard(data) {
    const card = document.createElement('div');
    card.setAttribute('class', 'discover__card');
    card.innerHTML = `
    <div>
        <img src=${data.image} alt=${data.title} width=300 alt=200 loading='lazy'>
    </div>
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