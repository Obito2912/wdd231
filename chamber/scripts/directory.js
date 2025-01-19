const navEl = document.querySelector('.navBar');
const menuBtn = document.querySelector('.header__menu_icon');
const year = document.querySelector('#current-year');
const lastModified = document.querySelector('#last-modified');
const mainSectionContainer = document.querySelector('.main__section_container');
const chambersLink = 'https://obito2912.github.io/wdd231/chamber/data/members.json';
const gridBtn = document.querySelector('.grid__btn');
const listBtn = document.querySelector('list__btn');
const date = new Date;

year.textContent += date.getFullYear();
lastModified.textContent = document.lastModified;

async function getChambersData() {
    const response = await fetch(chambersLink);
    const data = await response.json();
    displayChamberCards(data);
}

function displayChamberCards(data) {

    data.forEach(object => {
        const section = document.createElement('section');
        section.setAttribute('class', 'chamber__card');
        section.innerHTML = 
        `
        <h3>${object.name}</h3>
        <div>
            <img src='${object.image}' alt='${object.name} image' width='80' height='80'>
            <div class='chamber__card_text'>
                <p><span>Address: </span>${object.address}</p>
                <p><span>Phone Number: </span>${object.phoneNumber}</p>
                <p><span>URL: </span>${object.url}</p>
                <p><span>Membership: </span>${object.membership}</p>
            </div>
        </div>
        `;
        mainSectionContainer.append(section);
    });
}

menuBtn.addEventListener('click', () => {
    navEl.classList.toggle('js-open-navBar');
});

getChambersData();