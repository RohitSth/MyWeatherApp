import GetWeatherUserLocation from "./components/GetWeatherUserLocation";

export default function Home() {
  const weatherApiKey = process.env.WEATHER_API as string;
  return (
    <div>
      <GetWeatherUserLocation apiKey={weatherApiKey} />
    </div>
  );
}
