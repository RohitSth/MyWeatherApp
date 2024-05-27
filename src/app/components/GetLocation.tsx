"use client";

import { useState } from "react";

import { FaLocationCrosshairs } from "react-icons/fa6";

export default function GetLocation({ children }: { children: any }) {
  const apiKey = process.env.WEATHER_API as string;

  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  const [permissionDenied, setPermissionDenied] = useState<boolean>(false);

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

  const showError = (error: any) => {
    if (error.code === error.PERMISSION_DENIED) {
      setPermissionDenied(true);
    } else {
      switch (error.code) {
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
    }
  };

  return (
    <div className="flex flex-col gap-y-2">
      {permissionDenied ? (
        <button onClick={getUserLocation} className="w-fit p-2" disabled>
          <FaLocationCrosshairs className="text-gray-500" />
        </button>
      ) : (
        <button onClick={getUserLocation} className="w-fit p-2">
          <FaLocationCrosshairs className="text-black dark:text-white" />
        </button>
      )}
      {latitude !== null && longitude !== null && !permissionDenied ? (
        <>{children}</>
      ) : (
        <div>
          <p className="text-black dark:text-white">Demo Data when access</p>
        </div>
      )}
    </div>
  );
}
