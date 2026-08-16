async function getGeocodeFromCity(city) {
  try {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&format=json`;
    const res = await fetch(url);
    return await res.json();
  } catch {
    return null;
  }
}

async function getWeather({ latitude, longitude }) {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    const res = await fetch(url);
    return await res.json();
  } catch {
    return null;
  }
}

export { getGeocodeFromCity, getWeather };
