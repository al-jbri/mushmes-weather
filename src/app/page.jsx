"use client";
import { useState, useEffect } from "react";
import CitySelector from "@/components/CitySelector";
import WeatherDashboard from "@/components/WeatherDashboard";

export default function Home() {
  let [geocode, setGeocode] = useState(() => {
    try {
      let lastGeocode = localStorage.getItem("geocode");

      if (lastGeocode) {
        return JSON.parse(lastGeocode);
      }
    } catch {
      return null;
    }
  });

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
