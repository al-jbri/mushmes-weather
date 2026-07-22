"use client";
import { useState, useEffect } from "react";
import CitySelector from "@/components/CitySelector";
import WeatherDashboard from "@/components/WeatherDashboard";

export default function Home() {
  let [geocode, setGeocode] = useState(null);

  useEffect(() => {
    let lastGeocode = localStorage.getItem("geocode");
    lastGeocode && setGeocode(JSON.parse(lastGeocode));
  }, []);

  return (
    <div>
      {geocode ? (
        <WeatherDashboard geocode={geocode} />
      ) : (
        <CitySelector setGeocode={setGeocode} />
      )}
    </div>
  );
}
