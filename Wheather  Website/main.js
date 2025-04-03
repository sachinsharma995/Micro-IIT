async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = `bd4ea33ecf905116d12af172e008dbae`; // Replace with your OpenWeatherMap API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('weatherResult').innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        } else {
            document.getElementById('weatherResult').innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById('weatherResult').innerHTML = `<p>Could not fetch weather data.</p>`;
    }
}
