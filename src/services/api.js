async function getCity(city, signal) {
  try {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&format=json`;
    const res = await fetch(url, { signal: signal });
    return res.ok ? await res.json() : null;
  } catch (err) {
    return err.name === "AbortError" ? "ABORTED" : null;
  }
}

async function getWeather({ latitude, longitude }) {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    const res = await fetch(url);
    return res.ok ? await res.json() : null;
  } catch {
    return null;
  }
}

export { getCity, getWeather };
