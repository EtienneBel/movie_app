import { useEffect, useState } from "react";

const API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWE5YzJjMmFiZTMxNjYwMDMwOGZhMDJlMDY0NzVmNyIsInN1YiI6IjY1YmE3OTk1ZjkwYjE5MDE3YzA3MzU3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aU-C_y7WR97CP6-2TWZegkGVbBvXW_qPpD0FuNDuWoc";
const API_URL = "https://api.themoviedb.org/3";

// Custom hook for fetching movies by genres
export function useMoviesByGenres(genres: any) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchMoviesByGenres() {
            try {
                const moviesData = await Promise.all(
                    genres.map(async (genre: any) => {
                        const response = await fetch(
                            `${API_URL}/discover/movie?with_genres=${genre.id}`,
                            {
                                method: "GET",
                                headers: {
                                    accept: "application/json",
                                    Authorization: `Bearer ${API_KEY}`,
                                },
                            }
                        );

                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }

                        const data = await response.json();
                        return {
                            genre,
                            movieList: data.results,
                        };
                    })
                );

                setMovies(moviesData);
                setLoading(false);
            } catch (e) {
                setError(e.message);
                setLoading(false);
            }
        }

        if (genres.length > 0) {
            fetchMoviesByGenres();
        }
    }, [genres]);

    return { movies, loading, error };
}
