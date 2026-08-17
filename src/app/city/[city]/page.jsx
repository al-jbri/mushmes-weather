import WeatherDashboard from "@/components/WeatherDashboard";

export default async function CityWatherPage({ params, searchParams }) {
  let { city } = await params;
  let { lat, lon } = await searchParams;
  return (
    <div>
      <WeatherDashboard city={city} lat={lat} lon={lon} />
    </div>
  );
}
