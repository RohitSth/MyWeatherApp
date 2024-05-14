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
  const temperatureCelsius = Math.round(main.temp - 273.15);
  const windSpeedMph = Math.round(wind.speed * 2.23694);
  const visibilityKm = Math.round(visibility / 1000);

  // Function to convert wind direction degrees to cardinal directions
  const getWindDirection = (degrees: number) => {
    const directions = [
      "North",
      "North-Northeast",
      "Northeast",
      "East-Northeast",
      "East",
      "East-Southeast",
      "Southeast",
      "South-Southeast",
      "South",
      "South-Southwest",
      "Southwest",
      "West-Southwest",
      "West",
      "West-Northwest",
      "Northwest",
      "North-Northwest",
    ];
    const index = Math.round(degrees / 22.5) % 16;
    return directions[index];
  };

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
      <p>Temperature: {temperatureCelsius} °C</p>
      <p>Wind Speed: {windSpeedMph} mph</p>
      <p>Wind Direction: From {getWindDirection(wind.deg)}</p>
      <p>Visibility: {visibilityKm} km</p>
      <p>Date: {new Date(dt * 1000).toLocaleDateString()}</p>
      <p>Humidity: {main.humidity}%</p>
    </div>
  );
}
