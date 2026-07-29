"use client";

import { getGeocodefromCity } from "@/services/api.js";
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
      const data = await getGeocodefromCity(value);
      setSearchResult(data?.results || []);
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
          placeholder="search for city name..."
          onChange={handleSearch}
        />

        <ul>
          {searchResult.map((c) => (
            <li
              key={c.id}
              onClick={() => router.push(`/city/${c.name}`)}
              className="cursor-pointer p-2 hover:bg-gray-100"
            >
              <span>{`${c.name}/${c.admin1 && `${c.admin1}`}/${c.country}`}</span>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}
