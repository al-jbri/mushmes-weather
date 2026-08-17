"use client";

import { getGeocodeFromCity } from "@/services/api.js";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function CitySelector() {
  const router = useRouter();
  const [searchResult, setSearchResult] = useState([]);
  const lastTimer = useRef(null);

  function handleSearch(e) {
    const value = e.target.value.trim();
    lastTimer.current && clearTimeout(lastTimer.current);

    if (value.length < 2) {
      setSearchResult([]);
      return;
    }

    lastTimer.current = setTimeout(async () => {
      const data = await getGeocodeFromCity(value);
      setSearchResult(data?.results || []);
      console.log(data.results);
    }, 500);
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="cityInput">City Name</label>
        <input
          type="text"
          name="cityInput"
          id="cityInput"
          placeholder="Search for a city... (e.g. Aden, Cairo, Riyadh)"
          onChange={handleSearch}
          className="w-xl"
        />

        <ul>
          {searchResult.map((c) => (
            <li
              key={c.id}
              className="cursor-pointer p-2 hover:bg-gray-100"
              onClick={() =>
                router.push(
                  `/city/${c.name}?lon=${c.longitude}&lat=${c.latitude}`,
                )
              }
            >
              <span>{`${c.name}, ${c.admin1 && c.admin1 !== c.name ? `${c.admin1}, ` : ""}${c.country}`}</span>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

/* <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600" />  */
