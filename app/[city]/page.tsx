import CityWeather from "@/components/CityWeather";
import Loading from "@/components/Loading";
import {Suspense} from "react";

export default async function CityPage({params,}: {params: Promise<{city: string}>;}) {
    const city = decodeURIComponent((await params).city);

    return (
        <Suspense
            fallback={
                <main className="flex flex-col items-center justify-center pt-48">
                    <Loading/>
                </main>
            }
        >
            <CityWeather city={city}/>
        </Suspense>
    );
}
