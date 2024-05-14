"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Weather({
  apiKey,
  latitude,
  longitude,
}: {
  apiKey: string;
  latitude: number;
  longitude: number;
}) {
  const [weatherData, setWeatherData] = useState<any>(null);

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}`;
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

  const { name, weather, main, wind, visibility, dt } = weatherData;

  // const icon = "https://openweathermap.org/img/wn/10d@2x.png";
  const icon = weather[0].icon;

  return (
    <div>
      <h2>{name}</h2>
      <Image
        unoptimized
        src={`
            https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="icon"
        height={30}
        width={30}
      />
      <p>Weather: {weather[0].description}</p>
      <p>Temperature: {main.temp} °C</p>
      <p>Wind Speed: {wind.speed} m/s</p>
      <p>Visibility: {visibility} m</p>
      <p>Date: {new Date(dt * 1000).toLocaleDateString()}</p>
    </div>
  );
}
