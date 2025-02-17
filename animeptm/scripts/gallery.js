import { animeList } from "../data/images.mjs";

const animeInfo = animeList;
const galleryContainer = document.querySelector(".gallery__container");
const path = "images/";

function displayCards(info) {
  info.forEach((element) => {
    const div = document.createElement("div");
    div.setAttribute("class", "images__container");
    const title = document.createElement("h2");
    title.textContent = element.title;
    const rating = document.createElement('p');
    rating.textContent = element.rating;
    const genreEl = document.createElement('p');

    element.genres.forEach(genre => {
      genreEl.textContent += `${genre}, `;
    });

    div.append(title);
    div.append(rating);
    div.append(genreEl);

    element.images.forEach((image) => {
      const imgEl = document.createElement("img");
      imgEl.src = `${path}${image}`;
      imgEl.alt = `${image} image`;
      imgEl.width = 100;
      imgEl.height = 100;
      imgEl.loading = "lazy";

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.unobserve(imgEl);
            imgEl.removeAttribute("loading");
          }
        });
      });

      observer.observe(imgEl);
      div.append(imgEl);
    });
    galleryContainer.append(div);
  });
}

displayCards(animeInfo);
