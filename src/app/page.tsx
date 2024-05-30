import { divider } from "@nextui-org/react";
import GetWeatherUserLocation from "./components/GetWeatherUserLocation";

export default function Home() {
  const weatherApiKey = process.env.WEATHER_API as string;

  return (
    <div className="h-full flex gap-x-4 px-4 mx-auto max-w-7xl sm:px-6">
      <div className="w-80">
        <div>
          <GetWeatherUserLocation apiKey={weatherApiKey} />
        </div>
      </div>
      <div className="flex-1 shadow shadow-white rounded">
        <div className="flex">Okaayy</div>
        <a
          target="_blank"
          href="https://r3-f-next-js-starter-package.vercel.app/api/public/users"
        >
          TestAPI
        </a>
      </div>
    </div>
  );
}
