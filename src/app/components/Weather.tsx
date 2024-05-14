"use client";

import { useEffect, useState } from "react";

export default function Weather({
  city,
  apiKey,
}: {
  city: string;
  apiKey: string;
}) {
  const [weatherData, setWeatherData] = useState<any>(null);

  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=27.700769&lon=85.300140";
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
  }, [apiKey, apiUrl, city]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { name, weather, main, wind, visibility, dt } = weatherData;

  return (
    <div>
      <h2>{name}</h2>
      <p>Weather: {weather[0].description}</p>
      <p>Temperature: {main.temp} °C</p>
      <p>Wind Speed: {wind.speed} m/s</p>
      <p>Visibility: {visibility} m</p>
      <p>Date: {new Date(dt * 1000).toLocaleDateString()}</p>
    </div>
  );
}
