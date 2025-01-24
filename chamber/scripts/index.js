const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=41.04&lon=-111.94&units=imperial&appid=c917aec702bc6a2870617975229469d7';
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=41.04&lon=-111.94&units=imperial&appid=c917aec702bc6a2870617975229469d7';
const weatherIcon = document.querySelector('#weather-icon');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');
let weekDays = getDynamicWeekDays();

async function weatherData() {
    try {
        const response = await fetch(weatherURL);
        if (response.ok) {
            const data = await response.json();
            displayCurrentWeather(data);
            console.log(data);
        } else {
            throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function forecastData() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            displayWeatherForecast(weekDays, data);
            console.log(data);
        } else {
            throw Error (await response.text());
        }
    } catch(error) {
        console.log(error);
    }
}

function displayCurrentWeather(data) {
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.alt = `${data.weather[0].description} image`;
    temp.innerHTML += `${data.main.temp}&deg;F`;
    desc.innerHTML += `${data.weather[0].description}`;
}

function displayWeatherForecast(weekDay, data) {
    const weatherForecast = document.querySelector('.forecast div');
    const today = document.createElement('p');
    const tomorrow = document.createElement('p');
    const afterTomorrow = document.createElement('p');

    today.innerHTML = `<strong>${weekDay[0]}:</strong> ${data.list[0].main.temp}&deg;F`;
    tomorrow.innerHTML = `<strong>${weekDay[1]}:</strong> ${data.list[8].main.temp}&deg;F`;
    afterTomorrow.innerHTML = `<strong>${weekDay[2]}:</strong> ${data.list[16].main.temp}&deg;F`;

    weatherForecast.append(today);
    weatherForecast.append(tomorrow);
    weatherForecast.append(afterTomorrow);
}

function getDynamicWeekDays() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay();

    const dynamicDays = [...days.slice(today), ...days.slice(0, today)];
    return dynamicDays;
}

weatherData();
forecastData();