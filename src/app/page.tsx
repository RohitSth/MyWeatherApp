import GetWeatherUserLocation from "./components/GetWeatherUserLocation";
import Weather2 from "./components/Weather2";

export default function Home() {
  const weatherApiKey = process.env.WEATHER_API as string;
  const weatherApiKey2 = process.env.WEATHER_API_II as string;
  return (
    <div className="h-full flex gap-x-4 px-4 mx-auto max-w-7xl sm:px-6">
      <div className="w-80">
        <div>
          <GetWeatherUserLocation apiKey={weatherApiKey} />
        </div>
        <div>
          <Weather2 apiKey={weatherApiKey2} />
        </div>
      </div>
      <div className="flex-1 shadow shadow-white rounded">
        <div className="flex">Okaayy</div>
      </div>
    </div>
  );
}
