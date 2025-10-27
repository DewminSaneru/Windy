"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

interface CityWeather {
  id: number;
  name: string;
  weather?: { description: string }[];
  main?: { temp: number };
}

export default function Dashboard() {
  const [weatherData, setWeatherData] = useState<CityWeather[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch("/api/weather");
        const data = await res.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  if (loading)
    return (
      <main>
        <Navbar />
        <div className="text-center mt-10 text-gray-600">
          Loading weather data...
        </div>
      </main>
    );

  return (
    <main>
      <Navbar />
      <div className="container mx-auto mt-10 px-4">
        <h1 className="text-3xl font-semibold text-blue-600 text-center mb-8">
          Weather Dashboard 🌍
        </h1>

        {/* Weather Grid - 4 Columns × 2 Rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {weatherData.slice(0, 8).map((city) => (
            <div
              key={city.id}
              className="bg-white shadow-md rounded-xl p-5 flex flex-col items-center justify-center text-center h-48 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold text-gray-800">{city.name}</h2>
              <p className="text-gray-600 capitalize mt-2">
                {city.weather?.[0]?.description || "N/A"}
              </p>
              <p className="text-blue-600 font-semibold text-lg mt-3">
                🌡️ {city.main?.temp ?? "N/A"}°C
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
