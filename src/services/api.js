async function getCity(city, signal) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&format=json`;
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error("Fetch failed");
  return await res.json();
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
