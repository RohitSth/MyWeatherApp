"use client";

import { useState } from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";

interface UserLocationProps {
  onLocationObtained: (latitude: number, longitude: number) => void;
}

export default function UserLocation({
  onLocationObtained,
}: UserLocationProps) {
  const [permissionDenied, setPermissionDenied] = useState<boolean>(false);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          onLocationObtained(
            position.coords.latitude,
            position.coords.longitude
          );
        },
        (error) => showError(error)
      );
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
    <div>
      <button
        onClick={getUserLocation}
        className="w-fit p-2"
        disabled={permissionDenied}
      >
        <FaLocationCrosshairs
          className={
            permissionDenied ? "text-gray-500" : "text-black dark:text-white"
          }
        />
      </button>
    </div>
  );
}
