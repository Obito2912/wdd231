const animeURL = "https://api.jikan.moe/v4/anime";
const cardContainer = document.querySelector(".card__container");
const theDateToday = new Date();
const now = theDateToday.getTime();
const lastVisit = localStorage.getItem("lastVisit");
const sidebar = document.createElement("div");
sidebar.classList.add("message");

const main = document.querySelector(".main");

if (!lastVisit) {
  sidebar.textContent = "Welcome to our new project AnimePTM. Hope you enjoy it!";
} else {
    sidebar.textContent = "We missed you. Welcome back and enjoy!!!";
}

localStorage.setItem("lastVisit", now);

main.prepend(sidebar);

async function getAnimeData() {
  try {
    const response = await fetch(animeURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayData(data.data);

      cardContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("learn-more__button")) {
          const card = event.target.closest(".card"); // Find the closest card
          const dialog = card.querySelector("dialog"); // Find the dialog inside the card

          if (dialog) {
            dialog.showModal(); // Open the dialog
          }
        }
      });

      cardContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("close-dialog")) {
          event.target.closest("dialog").close();
        }
      });
    } else {
      throw Error(await response.text());
    }
  } catch (e) {
    console.log(e);
  }
}

function createInfoCard(data, index) {
  cardContainer.innerHTML += `
  <div class='card'>
        <img src='${data[index].images.webp.image_url}' alt='${data[index].title_english} image' width='200' height='300' loading='lazy'>
        <div>
            <h2>${data[index].title_english}</h2>
            <p class='synopsis'><strong>Synopsis:</strong> ${data[index].synopsis}</p>
            <button class='learn-more__button'>Learn More</button>
            <dialog>
              <h3>${data[index].title_english}</h3>
              <p>${data[index].synopsis}</p>
              <button class="close-dialog">Close</button>
            </dialog>
            </dialog>
        </div>
    </div>
    `;
}

function doNotShow(data, index) {
  const rating = data[index].rating;
  if (rating && rating.length >= 2) {
    const firstTwoLetters = rating.substring(0, 2); // I could also use slice
    if (firstTwoLetters === "R+" || firstTwoLetters === "Rx") {
      return true;
    }
  }
}

function displayData(data) {
  let startIndex = 0;

  for (let index = startIndex; index < data.length; index++) {
    if (
      data[index] &&
      data[index].trailer &&
      data[index].trailer.embed_url &&
      data[index].synopsis &&
      !doNotShow(data, index)
    ) {
      createInfoCard(data, index);
    }
  }
}

getAnimeData();
