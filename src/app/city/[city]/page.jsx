import WeatherDashboard from "@/components/WeatherDashboard";

export default async function CityWatherPage({ params }) {
  return (
    <div>
      <WeatherDashboard data={params} />
    </div>
  );
}
