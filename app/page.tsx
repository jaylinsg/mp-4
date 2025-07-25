"use client";

import Link from "next/link";
import {useState} from "react";

export default function Home() {
    const [city, setCity] = useState("");
    return (
        <main className="flex flex-col items-center justify-center p-4 pt-28">
            <div className="w-full max-w-md shadow-lg bg-white p-4 rounded-xl border-2">
                <div className="text-center">
                    <h2 className="text-3xl font-bold p-2">Weather Forecast</h2>
                    <p className="text-neutral-500">
                        Enter a city name to get the weather forecast
                    </p>
                </div>
                <div>
                    <form action={`/${city}`} className="">
                        <div className="space-y-2">
                            <label htmlFor="city" className="font-semibold">
                                City Name
                            </label>
                            <div className="relative">
                                <input
                                    id="city"
                                    placeholder="e.g. London, New York, Tokyo"
                                    value={city}
                                    className="border-2 w-full p-2 rounded-lg"
                                    onChange={(e) => {
                                        setCity(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <Link
                            href={`/${city}`}
                            className="inline-block w-full text-white bg-red-500 hover:bg-red-400 transition-colors font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-2"
                        >
                            Get Weather
                        </Link>
                    </form>
                </div>
            </div>
        </main>
    );
}
