"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Weather2({ apiKey }: { apiKey: string }) {
  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const url = "https://open-weather13.p.rapidapi.com/city/landon/EN";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        setWeatherData(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherData();
  }, [apiKey]);

  if (!weatherData) {
    return <p>Loading...</p>;
  }

  // Assuming weatherData has the necessary structure
  const weather = weatherData.main;
  const weatherDescription = weatherData.description;

  console.log(weatherData);

  return (
    <>
      <h2>{weather}</h2>
      <h2>{weatherDescription}</h2>
    </>
  );
}
