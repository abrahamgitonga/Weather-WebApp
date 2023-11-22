// Replace 'YOUR_API_KEY' with the API key you obtained from OpenWeatherMap
const apiKey = '203e26bce90304695cc882c5f3b47405';
const weatherInfo = document.getElementById('weather-info');

function getWeather() {
    const cityInput = document.getElementById('city');
    const city = cityInput.value;

    // Check if the city input is not empty
    if (city.trim() === '') {
        alert('Please enter a city');
        return;
    }

    // Make API request to OpenWeatherMap
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            // Handle the response data
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            // Display the weather information
            weatherInfo.innerHTML = `<p>Temperature: ${temperature}°C</p><p>Description: ${description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}
