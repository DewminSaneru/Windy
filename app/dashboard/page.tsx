"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

interface CityWeather {
  id: number;
  name: string;
  weather?: { description: string; icon: string }[];
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
      <main className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50">
        <Navbar />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
            <p className="text-gray-600 text-lg">Loading weather data...</p>
          </div>
        </div>
      </main>
    );

  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-100">
      <Navbar />

      <div className="container mx-auto mt-10 px-4 pb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-10 tracking-tight">
          🌦️ Live Weather Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {weatherData.slice(0, 8).map((city) => (
            <div
              key={city.id}
              className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-5 flex flex-col items-center justify-center text-center h-56 border border-gray-100 hover:shadow-2xl hover:scale-[1.03] transition-all duration-200"
            >
              <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                {city.name}
              </h2>

              <img
                src={`https://openweathermap.org/img/wn/${city.weather?.[0]?.icon}@2x.png`}
                alt="weather icon"
                className="w-20 h-20 mt-1"
              />

              <p className="text-gray-600 capitalize -mt-2">
                {city.weather?.[0]?.description || "N/A"}
              </p>

              <p className="text-blue-700 font-extrabold text-2xl mt-1">
                {city.main?.temp ?? "N/A"}°C
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
