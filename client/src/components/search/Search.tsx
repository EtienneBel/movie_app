import { useEffect, useState } from "react";
import Movie from "../movie/MovieCard";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWE5YzJjMmFiZTMxNjYwMDMwOGZhMDJlMDY0NzVmNyIsInN1YiI6IjY1YmE3OTk1ZjkwYjE5MDE3YzA3MzU3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aU-C_y7WR97CP6-2TWZegkGVbBvXW_qPpD0FuNDuWoc";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function Search({ movies }) {
  // const [moviesGenres, setMoviesGenres] = useState([]);
  // const [movies, setMovies] = useState([]);
  console.log(movies[0].movieList);

  // useEffect(() => {
  //   async function fetchGenres() {
  //     const response = await fetch(
  //       "https://api.themoviedb.org/3/genre/movie/list?language=en",
  //       {
  //         method: "GET",
  //         headers: {
  //           accept: "application/json",
  //           Authorization: `Bearer ${API_KEY}`,
  //         },
  //       }
  //     );

  //     const data = await response.json();
  //     setMoviesGenres(data.genres);
  //   }

  //   fetchGenres();
  // }, []);

  // useEffect(() => {
  //   async function fetchMoviesByGenres() {
  //     const moviesData = await Promise.all(
  //       moviesGenres.map(async (genre) => {
  //         const response = await fetch(
  //           `https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}`,
  //           {
  //             method: "GET",
  //             headers: {
  //               accept: "application/json",
  //               Authorization: `Bearer ${API_KEY}`,
  //             },
  //           }
  //         );

  //         const data = await response.json();
  //         return {
  //           genre,
  //           movieList: data.results,
  //         };
  //       })
  //     );

  //     setMovies(moviesData);
  //   }

  //   if (moviesGenres.length > 0) {
  //     fetchMoviesByGenres();
  //   }
  // }, [moviesGenres]);

  return (
    <div>
      <input placeholder="Search" />
      <div className="mt-16 grid grid-cols-4 gap-x-4 gap-y-10">
        {movies.map((movie, key) => (
          <Movie
            key={key}
            src={IMAGE_BASE_URL + movie.backdrop_path}
            title={movie.title}
          />
        ))}
      </div>
    </div>
  );
}
