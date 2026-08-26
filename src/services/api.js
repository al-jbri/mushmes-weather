async function getCity(city, signal) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&format=json`;
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error("Fetch failed");
  return await res.json();
}

async function getWeather({ lat, lon }) {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;
    const res = await fetch(url);
    return res.ok ? await res.json() : null;
  } catch {
    return null;
  }
}

export { getCity, getWeather };
