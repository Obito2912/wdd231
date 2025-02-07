const main = document.querySelector(".discover__main");
const items = "data/items.json";

async function GetItems() {
  try {
    const response = await fetch(items);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayCards(data);
    } else {
      throw Error(response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

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

GetItems();
