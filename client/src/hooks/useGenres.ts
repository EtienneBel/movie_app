import { useEffect, useState } from "react";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWE5YzJjMmFiZTMxNjYwMDMwOGZhMDJlMDY0NzVmNyIsInN1YiI6IjY1YmE3OTk1ZjkwYjE5MDE3YzA3MzU3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aU-C_y7WR97CP6-2TWZegkGVbBvXW_qPpD0FuNDuWoc";
const API_URL = "https://api.themoviedb.org/3";

// Custom hook for fetching genres
export function useGenres() {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchGenres() {
      try {
        const response = await fetch(
          `${API_URL}/genre/movie/list?language=en`,
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
        setGenres(data.genres);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    }

    fetchGenres();
  }, []);

  return { genres, loading, error };
}
