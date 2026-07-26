import { getGeocodefromCity, getWeather } from "@/services/api";
import WeatherDashboard from "@/components/WeatherDashboard";

export default async function CityWatherPage({ params }) {
  const { city } = await params;
  const cityInfo = await getGeocodefromCity(city);
  const data = await getWeather(cityInfo.results[0]);
  return (
    <div>
      <WeatherDashboard data={data} />
    </div>
  );
}
