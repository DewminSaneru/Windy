import { NextResponse } from "next/server";

let cache: any = null;
let cacheTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function GET() {
  const now = Date.now();

  // Return cached data if still valid
  if (cache && now - cacheTime < CACHE_DURATION) {
    console.log("Serving from cache...");
    return NextResponse.json(cache);
  }

  console.log("Fetching fresh data...");

  try {
    // Read city list from cities.json (in public folder)
    const citiesRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/cities.json`);
    const citiesData = await citiesRes.json();
    const cityCodes = citiesData.List.map((city: any) => city.CityCode);

    // Fetch weather data from OpenWeatherMap
    const apiKey = process.env.OPENWEATHER_API_KEY; // server-side key (not exposed)
    const responses = await Promise.all(
      cityCodes.map(async (id: string) => {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric`
        );
        return res.json();
      })
    );

    // Filter only valid responses
    const validCities = responses.filter((city) => city && city.cod === 200);

    // Store in cache
    cache = validCities;
    cacheTime = now;

    return NextResponse.json(validCities);
  } catch (error) {
    console.error("Weather API error:", error);
    return NextResponse.json({ error: "Failed to fetch weather data" }, { status: 500 });
  }
}
