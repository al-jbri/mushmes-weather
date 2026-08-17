export default async function WeatherDashboard({ city, lat, lon }) {
  return (
    <div>
      <h1>{city}</h1>
      <h1>{lat}</h1>
      <h1>{lon}</h1>
    </div>
  );
}
