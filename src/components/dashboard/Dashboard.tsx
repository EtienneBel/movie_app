import { useEffect, useState } from "react";
import MovieList from "../movie/MovieList";
import Search from "../search/Search";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWE5YzJjMmFiZTMxNjYwMDMwOGZhMDJlMDY0NzVmNyIsInN1YiI6IjY1YmE3OTk1ZjkwYjE5MDE3YzA3MzU3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aU-C_y7WR97CP6-2TWZegkGVbBvXW_qPpD0FuNDuWoc";

export default function Dashboard({ isSearching }) {
  const [moviesGenres, setMoviesGenres] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchGenres() {
      const response = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?language=en",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );

      const data = await response.json();
      setMoviesGenres(data.genres);
    }

    fetchGenres();
  }, []);

  useEffect(() => {
    async function fetchMoviesByGenres() {
      const moviesData = await Promise.all(
        moviesGenres.map(async (genre) => {
          const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}`,
            {
              method: "GET",
              headers: {
                accept: "application/json",
                Authorization: `Bearer ${API_KEY}`,
              },
            }
          );

          const data = await response.json();
          return {
            genre,
            movieList: data.results,
          };
        })
      );

      setMovies(moviesData);
    }

    if (moviesGenres.length > 0) {
      fetchMoviesByGenres();
    }
  }, [moviesGenres]);

  return (
    <>
      {isSearching ? (
        <Search movies={movies[0].movieList} />
      ) : (
        <>
          <h1 className="text-4xl font-black mt-10 mb-5">Movies</h1>
          <p className="w-2/5">
            Movies move us like nothing else can, whether they’re scary, funny,
            dramatic, romantic or anywhere in-between. So many titles, so much
            to experience.
          </p>

          <MovieList movies={movies} />
        </>
      )}
    </>
  );
}
