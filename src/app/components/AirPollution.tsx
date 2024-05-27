"use client";

import { useEffect, useState } from "react";

export default function AirPollution({
  apiKey,
  latitude,
  longitude,
}: {
  apiKey: string;
  latitude: number;
  longitude: number;
}) {
  const [weatherData, setWeatherData] = useState<any>(null);
  {
  }
  const apiUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}`;
  useEffect(() => {
    async function checkWeather() {
      if (!apiKey) {
        console.error("API key not provided.");
        return;
      }

      const response = await fetch(apiUrl + `&appid=${apiKey}`);
      const data = await response.json();
      setWeatherData(data);
    }

    checkWeather();
  }, [apiKey, apiUrl, latitude, longitude]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { list } = weatherData;

  const aqi = Math.round(list[0].main.aqi);

  return (
    <div>
      <p>AQI: {aqi}</p>
    </div>
  );
}
