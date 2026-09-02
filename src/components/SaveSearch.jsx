"use client";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function SaveSearch({ city, lat, lon }) {
  useEffect(() => {
    try {
      let items = JSON.parse(localStorage.getItem("recent-searches")) || [];

      while (items.length > 3) {
        items.pop();
      }
      items.filter((e) => {
        e.lon !== lon && e.lat !== e.lat;
      });

      items = [...items, { city, lat, lon }];
      localStorage.setItem("recent-searches", JSON.stringify(items));
    } catch {
      toast.error("Failed to save the search in local storage:");
    }
  }, []);
}
