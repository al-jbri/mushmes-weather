"use client";
import { useState, useEffect } from "react";
import CitySelector from "@/components/CitySelector";
import WeatherDashboard from "@/components/WeatherDashboard";

export default function Home() {
  const [geocode, setGeocode] = useState(null);

  useEffect(() => {
    try {
      const lastGeocode = localStorage.getItem("geocode");
      if (lastGeocode) {
        setGeocode(JSON.parse(lastGeocode));
      }
    } catch {
      setGeocode(null);
    }
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
