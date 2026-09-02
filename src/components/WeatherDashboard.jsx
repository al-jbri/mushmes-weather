const weatherCodeMap = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing rime fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",
  61: "Slight rain",
  63: "Moderate rain",
  65: "Heavy rain",
  71: "Slight snow",
  73: "Moderate snow",
  75: "Heavy snow",
  80: "Slight rain showers",
  81: "Moderate rain showers",
  82: "Violent rain showers",
  95: "Thunderstorm",
};

export default function WeatherView({ data }) {
  const current = data.current;
  const currentUnits = data.current_units;
  const daily = data.daily;
  const dailyUnits = data.daily_units;

  const weatherDescription = weatherCodeMap[current.weather_code] || "Unknown";

  return (
    <div>
      <section>
        <h1>Timezone: {data.timezone}</h1>
        <h1>
          {current.temperature_2m} {currentUnits.temperature_2m}
        </h1>
        <p>Condition: {weatherDescription}</p>
        <p>
          Feels Like: {current.apparent_temperature}{" "}
          {currentUnits.apparent_temperature}
        </p>
        <p>
          Humidity: {current.relative_humidity_2m}
          {currentUnits.relative_humidity_2m}
        </p>
        <p>
          Wind Speed: {current.wind_speed_10m} {currentUnits.wind_speed_10m}
        </p>
      </section>

      <hr />

      <section>
        <h2>7-Day Forecast</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Min Temp ({dailyUnits.temperature_2m_min})</th>
              <th>Max Temp ({dailyUnits.temperature_2m_max})</th>
            </tr>
          </thead>
          <tbody>
            {daily.time.map((date, index) => (
              <tr key={date}>
                <td>{date}</td>
                <td>{daily.temperature_2m_min[index]}</td>
                <td>{daily.temperature_2m_max[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
