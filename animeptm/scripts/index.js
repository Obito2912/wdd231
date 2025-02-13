const animeURL = "https://api.jikan.moe/v4/anime";
const cardContainer = document.querySelector(".card__container");

async function getAnimeData() {
  try {
    const response = await fetch(animeURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayData(data.data);
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
            <button>Learn More</button>
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
  const maxCards = 15;
  let startIndex = 1;
  let cardsCreated = 0;

  do {
    for (let index = startIndex; index < data.length; index++) {
      if (
        data[index] &&
        data[index].trailer &&
        data[index].trailer.embed_url &&
        data[index].synopsis
      ) {
        if (!doNotShow(data, index)) {
          createInfoCard(data, index);
          cardsCreated++;
          if (cardsCreated >= maxCards) {
            break;
          }
        }
      }
    }
    startIndex++;
  } while (cardsCreated < maxCards && startIndex < data.length);
}

getAnimeData();

// <iframe
//     src='${data[index].trailer.embed_url}'
//     allowfullscreen
//     allow="accelerometer;
//         clipboard-write;
//         encrypted-media;
//         gyroscope;
//         picture-in-picture;
//         web-share"
//     referrerpolicy="strict-origin-when-cross-origin">
// </iframe>
