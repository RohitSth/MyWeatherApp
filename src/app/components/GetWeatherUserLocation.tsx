"use client";

import Weather from "./Weather";
import AirPollution from "./AirPollution";
import UserLocation from "./UserLocation";
import { useState } from "react";

interface GetWeatherUserLocationProps {
  apiKey: string;
}

export default function GetWeatherUserLocation({
  apiKey,
}: GetWeatherUserLocationProps) {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  const handleLocationObtained = (lat: number, lon: number) => {
    setLatitude(lat);
    setLongitude(lon);
  };

  return (
    <div className="flex flex-col gap-y-2">
      <UserLocation onLocationObtained={handleLocationObtained} />
      {latitude !== null && longitude !== null ? (
        <>
          <Weather latitude={latitude} longitude={longitude} apiKey={apiKey} />
          <AirPollution
            latitude={latitude}
            longitude={longitude}
            apiKey={apiKey}
          />
        </>
      ) : (
        <div>
          <p className="text-black dark:text-white">Demo Data when access</p>
        </div>
      )}
    </div>
  );
}
