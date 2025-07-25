const HARVARD_API_KEY = process.env.HARVARD_API_KEY as string;
import { Artwork } from "@/types";

export default async function getArtworks(query: string): Promise<Artwork[]> {
    try {
        const res = await fetch(
            `https://api.harvardartmuseums.org/object?apikey=${HARVARD_API_KEY}&keyword=${encodeURIComponent(query)}&size=10`
        );

        if (!res.ok) {
            throw new Error("Failed to fetch Harvard Art Museum data");
        }

        const data = await res.json();

        // Extract only what we need
        return data.records.map((record: any): Artwork => ({
            id: record.id,
            title: record.title || "Untitled",
            artist: record.people?.[0]?.name || "Unknown Artist",
            image: record.primaryimageurl || "/no-image.jpg", // fallback if no image
        }));
    } catch (error) {
        console.error(error);
        return [];
    }
}