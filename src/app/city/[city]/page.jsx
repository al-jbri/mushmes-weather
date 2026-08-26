import WeatherDashboard from "@/components/WeatherDashboard";
import { getWeather } from "@/services/api";

export default async function CityWatherPage({ params, searchParams }) {
  let { city } = await params;
  let { lat, lon } = await searchParams;
  let weather = await getWeather({ lat, lon });
  return (
    <div>
      <WeatherDashboard data={weather} />
    </div>
  );
}
