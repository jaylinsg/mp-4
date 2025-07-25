import {WeatherDayProps} from "@/types";

export default function ForecastWeather({weather,}: {weather: WeatherDayProps;}) {
    return (
        <div className="bg-red-200 m-1 rounded-xl border-2 flex flex-col justify-between">
            <h4 className="text-2xl bg-neutral-100 px-4 pt-2 pb-1">
                {weather.datetime}
            </h4>
            <div className="px-4">
                <div className="p-2 text-center">
                    <p className="text-center font-medium text-xl">
                        {weather.tempmin}°F &ndash; {weather.tempmax}°F
                    </p>
                    <p className="text-center text-lg m-2">{weather.conditions}</p>
                </div>
            </div>
            <p className="text-sm px-4 pb-2">{weather.description}</p>
        </div>
    );
}
