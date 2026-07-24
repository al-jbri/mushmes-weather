"use client";

import { getGeocodefromCity } from "@/services/api.js";
import toast from "react-hot-toast";

export default function CitySelector({ setGeocode }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const cityName = e.target.elements.cityInput.value;

    // check input
    if (!cityName.trim()) {
      toast.error("Please enter a city name");
      return;
    }

    // fetch and check data
    const data = await getGeocodefromCity(cityName);
    !data && toast.error("Failure to contact the server");
    !data.results && toast.error("City not found, try another name!");

    // save data
    const geocodeData = {
      name: data.results[0].name,
      country: data.results[0].country,
      latitude: data.results[0].latitude,
      longitude: data.results[0].longitude,
    };

    window.localStorage.setItem("geocode", JSON.stringify(geocodeData));
    setGeocode(localStorage.getItem("geocode"));
    toast.success("The city was successfully set.");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="cityInput">City Name</label>
      <input
        type="text"
        name="cityInput"
        id="cityInput"
        placeholder="search for city name..."
      />
    </form>
  );
}
