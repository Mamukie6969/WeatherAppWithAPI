async function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    const apiKey = '3a279c37b13341a292472944240209';
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${encodeURIComponent(city)}&days=7&aqi=no&alerts=no`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) throw new Error(data.error.message);

        const forecast = data.forecast.forecastday;
        let output = `<h2>📍 Weather in ${data.location.name}</h2>`;

        forecast.forEach(day => {
            output += `
    <div style="margin-bottom: 10px;">
        <h4>📅 ${day.date}</h4>
        <h5>🌤️ ${day.day.condition.text}</h5>
        <h5>🌡️ ${day.day.avgtemp_c}°C (Min: ${day.day.mintemp_c}°C, Max: ${day.day.maxtemp_c}°C)</h5>
    </div>
`;

        });

        document.getElementById('weatherResult').innerHTML = output;

    } catch (error) {
        document.getElementById('weatherResult').innerHTML = `❌ ${error.message}`;
    }
}
