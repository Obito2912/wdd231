import { animeList } from "../data/images.mjs";

const main = document.querySelector('.gallery-main');

function createCard(image) {
    main.innerHTML = `
    <div>
        <img src='' width='' height='' loading='lazy'>
        <h2>${image}</h2>
    </div>
    `;
}