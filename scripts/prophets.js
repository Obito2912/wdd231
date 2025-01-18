const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const p1 = document.createElement('p');
        p1.textContent = `Data of Birth: ${prophet.birthdate}`;
        const p2 = document.createElement('p');
        p2.textContent = `Place of Birth: ${prophet.birthplace}`;
        const portrait = document.createElement('img');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        
        card.appendChild(fullName);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(portrait);

        portrait.setAttribute('src', `${prophet.imageurl}`);
        portrait.setAttribute('alt', `${prophet.name} ${prophet.lastname} portrait.`);
        portrait.setAttribute('loading', `lazy`);
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        cards.appendChild(card);
    });
}

getProphetData();