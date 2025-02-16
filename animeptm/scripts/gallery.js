import { animeList } from "../data/images.mjs";

const animeInfo = animeList;
const imagesContainer = document.querySelector(".images__container");
const imagesContainerDiv = document.querySelector('.images__container div');
const path = "images/";

function displayCards(info) {
  let objectIndex = 0;
  let imageIndex = 0;
  info.forEach((element) => {
    createCard(element);
    objectIndex++;
    element.images.forEach((image) => {
      imageIndex++;
      imagesContainerDiv.innerHTML += `
        <img src='${path}${image}' alt='${image} image' width='200' height='200' loading='lazy'>
        `;
    });
  });
}

function createCard(info) {
  imagesContainer.innerHTML += `
    <div class='card__content>
        <h2>${info.title}</h2>
    </div>
    `;
}

displayCards(animeInfo);
