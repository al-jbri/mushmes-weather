"use client";

import { getCity } from "@/services/api.js";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function CitySelector() {
  const router = useRouter();
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const lastTimer = useRef(null);
  const abortContoler = useRef(null);

  return (
    <search>
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
      </form>

      <ul>
        {
          // The Spinner if isLoading
          isLoading && (
            <li className="flex justify-center p-2">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600" />
            </li>
          )
        }

        {
          // City Not Found if results is []
          !isLoading && searchResult?.length === 0 && (
            <li className="p-2 text-gray-400">City Not found</li>
          )
        }

        {
          // Mapping the search results if everything done
          searchResult?.length > 0 &&
            searchResult.map((c) => createListOption(c))
        }
      </ul>
    </search>
  );

  function createListOption(c) {
    return (
      <li
        key={c.id}
        className="cursor-pointer p-2 hover:bg-gray-100"
        onClick={() =>
          router.push(`/city/${c.name}?lon=${c.longitude}&lat=${c.latitude}`)
        }
      >
        <span>{`${c.name}, ${c.admin1 && c.admin1 !== c.name ? `${c.admin1}, ` : ""}${c.country}`}</span>
      </li>
    );
  }

  function handleSearch(e) {
    const value = e.target.value.trim();
    lastTimer.current && clearTimeout(lastTimer.current);
    setSearchResult(null);
    setLoading(true);

    // abort conroller
    abortContoler.current?.abort();
    abortContoler.current = new AbortController();

    if (value.length <= 1) {
      setLoading(false);
      return;
    }

    lastTimer.current = setTimeout(async () => {
      try {
        const data = await getCity(value, abortContoler.current.signal);
        setSearchResult(data?.results || []);
      } catch (err) {
        if (err.name === "AbortError") {
          return;
        } else {
          toast.error(
            "Unable to find the city. Check your internet connection.",
          );
        }
      } finally {
        setLoading(false);
      }
    }, 500);
  }
}
