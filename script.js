async function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    const apiKey = '3a279c37b13341a292472944240209';
    const url = `https://api.weatherapi.com/v1/CURrent.json?key=${apiKey}&q=${encodeURIComponent(city)}&aqi=no`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) throw new Error(data.error.message);

        const temp = data.current.temp_c;
        const desc = data.current.condition.text;

        document.getElementById('weatherResult').innerHTML =
            `🌡️ ${temp}°C<br>🌥️ ${desc}`;
    } catch (error) {
        document.getElementById('weatherResult').innerHTML =
            `❌ ${error.message}`;
    }
}
