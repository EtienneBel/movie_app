import { useEffect, useState } from "react";
import { Movie } from "@/model/Movie";

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWE5YzJjMmFiZTMxNjYwMDMwOGZhMDJlMDY0NzVmNyIsInN1YiI6IjY1YmE3OTk1ZjkwYjE5MDE3YzA3MzU3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aU-C_y7WR97CP6-2TWZegkGVbBvXW_qPpD0FuNDuWoc";
const API_URL = "https://api.themoviedb.org/3";

export function useMovie(movieId: string | undefined) {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        async function fetchAMovie() {
            if (!movieId) {
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`${API_URL}/movie/${movieId}`, {
                    method: "GET",
                    headers: {
                        accept: "application/json",
                        Authorization: `Bearer ${API_KEY}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP Error! status: ${response.status}`);
                }

                const data: Movie = await response.json();
                setMovie(data);
                console.log(data);
            } catch (e) {
                setError(e instanceof Error ? e.message : String(e));
            } finally {
                setLoading(false);
            }
        }

        fetchAMovie();
    }, [movieId]);

    return { movie, error, loading };
}