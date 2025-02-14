const animeURL = "https://api.jikan.moe/v4/anime";
const cardContainer = document.querySelector('.card__container');

async function getAnimeData() {
  try {
    const response = await fetch(animeURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      createInfoCard(data.data);
      displayData(data);
    } else {
      throw Error(await response.text());
    }
  } catch (e) {
    console.log(e);
  }
}

function createInfoCard(data) {
    cardContainer.innerHTML += `
    <div class='card'>
        <iframe
            src='${data[0].trailer.embed_url}'
            allowfullscreen
            allow="accelerometer; 
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
            web-share"
            referrerpolicy="strict-origin-when-cross-origin">
        </iframe>
        <p class='synopsis'>Synopsis: ${data[0].synopsis}</p>
        <button>Learn More</button>
    </div>
    `;
}

function displayData(data) {

}

getAnimeData();