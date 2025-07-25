import { WeatherDayProps } from "@/types";

export default function CurrentWeather({
  weather,
}: {
  weather: WeatherDayProps;
}) {
  return (
    <div className="border-2 bg-red-200 mb-8 flex flex-col items-center justify-center rounded-2xl bg-primary/5">
      <h3 className="text-3xl text-left w-full px-6 pt-4 pb-2 bg-neutral-100">
        {weather.datetime}
      </h3>
      <h2 className="text-5xl font-bold pt-4">{weather.temp}°F</h2>{" "}
      <p className="text-center font-medium text-xl">
        {weather.tempmin}°F &ndash; {weather.tempmax}°F
      </p>
      <div className="grid grid-cols-3 gap-2 text-center w-72 m-2">
        <div>
          <p>Humidity</p>
          <p>{weather.humidity}%</p>
        </div>
        <div>
          <p>Wind</p>
          <p>{weather.windspeed} km/h</p>
        </div>
        <div>
          <p>Feels Like</p>
          <p>{weather.feelslike}°F</p>
        </div>
      </div>
      <p className="text-xl text-center">{weather.conditions}</p>
      <p className="mt-1 px-6 pb-4">{weather.description}</p>
    </div>
  );
}
