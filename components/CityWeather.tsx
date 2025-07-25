import getForecast from "@/lib/getForecast";
import CurrentWeather from "@/components/CurrentWeather";
import ForecastWeather from "@/components/ForecastWeather";

export default async function CityWeather({city}: { city: string }) {
    const data = await getForecast(city);

    console.log(data);

    if (!data) {
        return (
            <main className="flex flex-col items-center justify-center pt-48">
                <div className="min-w-64 max-w-64 shadow-lg bg-white p-8 rounded-xl">
                    {data === undefined ? (
                        <p className="text-center">
                            Oh no! We couldn&apos;t find any weather information for{" "}
                            <span className="underline">{city}</span>
                        </p>
                    ) : (
                        <p className="text-center">
                            Something went wrong while calling API for weather data. Please
                            try again later.
                        </p>
                    )}
                </div>
            </main>
        );
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <div className="w-full max-w-4xl shadow-lg bg-white p-4 rounded-xl">
                <header className="text-center">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-bold">Weather in {data.location}</h2>
                        <div className="w-9"/>
                        {/* Spacer for alignment */}
                    </div>
                    <p className="p-2">Current conditions and 7-day forecast</p>
                </header>
                <div>
                    <CurrentWeather weather={data.forecast[0]}/>
                    <h3 className="mb-4 text-xl font-semibold">7-Day Forecast</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                        {
                            data.forecast.slice(1).map((weatherDay) =>
                                (
                                    <ForecastWeather weather={weatherDay} key={weatherDay.datetime}/>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}
