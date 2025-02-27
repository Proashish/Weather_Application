const form = document.querySelector('form');
const input = document.querySelector('#location');
const weatherDiv = document.querySelector('#weather');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = input.value;
    getWeather(location);
})

async function getWeather(location) {
    const apiKey = 'YOUR KEY'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const { name, main: { temp }, weather: [{ description}] } = data;

        weatherDiv.innerHTML = `<p>Location: ${name}</p><p>Temperature: ${temp} &deg;C</p><p>Conditions: ${description}</p>`;
    } catch (error) {
        console.error(error);
        weatherDiv.innerHTML = '<p>Unable to retrieve weather data</p>'
    }
}