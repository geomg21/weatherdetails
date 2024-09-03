// script.js
const apiKey = '8ac5c4d57ba6a4b3dfcf622700447b1e';
const city = 'kakkanad';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('city').innerText = data.name;
        document.getElementById('temp').innerText = Math.round(data.main.temp);
        document.getElementById('feels_like').innerText = Math.round(data.main.feels_like);
        document.getElementById('country').innerText = data.sys.country;
        document.getElementById('humidity').innerText = data.main.humidity;
        document.getElementById('wind').innerText = data.wind.speed;
        document.getElementById('pressure').innerText = data.main.pressure;

        const date = new Date();
        document.getElementById('datetime').innerText = date.toLocaleString();
    })
    .catch(error => console.error('Error fetching weather data:', error));



