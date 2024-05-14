import Image from "next/image";
import Weather from "./components/Weather";

export default function Home() {
  const weatherApiKey = process.env.WEATHER_API as string;
  return (
    <div>
      <Weather city="Kathmandu" apiKey={weatherApiKey} />
    </div>
  );
}
