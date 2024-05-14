"use client";

import Weather from "./Weather";
import { useState } from "react";

export default function GetWeatherUserLocation({ apiKey }: { apiKey: string }) {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  // Ask for permission to get user location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      }, showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const showPosition = (position: any) => {
    alert(position.coords.latitude + ", " + position.coords.longitude); // Concatenate latitude and longitude into a single string
  };

  const showError = (error: any) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  };

  return (
    <div className="flex flex-col gap-y-2">
      <button
        onClick={getUserLocation}
        className="rounded-md bg-white p-2 text-black"
      >
        Allow Location Access
      </button>
      {latitude !== null && longitude !== null && (
        <Weather latitude={latitude} longitude={longitude} apiKey={apiKey} />
      )}
    </div>
  );
}
