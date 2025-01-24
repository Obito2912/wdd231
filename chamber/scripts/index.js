const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=41.04&lon=-111.94&units=imperial&appid=c917aec702bc6a2870617975229469d7';
const weather5DayURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=41.04&lon=-111.94&units=imperial&appid=c917aec702bc6a2870617975229469d7';
const weatherIcon = document.querySelector('#weather-icon');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');

async function weatherData() {
    try {
        const response = await fetch(weather5DayURL);
        if (response.ok) {
            const data = await response.json();
            // displayCurrentWeather(data);
            // displayWeatherForecast(data);
            console.log(data);
        } else {
            throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayCurrentWeather(data) {
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.alt = `${data.weather[0].description} image`;
    temp.innerHTML += `${data.main.temp}&deg;F`;
    desc.innerHTML += `${data.weather[0].description}`;
}

function displayWeatherForecast(data) {
    const weatherForecast = document.querySelector('.weather-forecast');
    const today = document.createElement('p');
    const tomorrow = document.createElement('p');
    const afterTomorrow = document.createElement('p');

    today.textContent = `: `;
    tomorrow.textContent = `: `;
    afterTomorrow.textContent = `: `;

    weatherForecast.append(today);
    weatherForecast.append(tomorrow);
    weatherForecast.append(afterTomorrow);
}

weatherData();