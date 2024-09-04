import MovieList from "../movie/MovieList";
import Search from "../search/Search";
import { useGenres } from "../../hooks/useGenres";
import { useMoviesByGenres } from "../../hooks/useMoviesByGenres";

export default function Dashboard({ isSearching }) {
  const { genres, loading: genresLoading, error: genresError } = useGenres();
  const {
    movies,
    loading: moviesLoading,
    error: moviesError,
  } = useMoviesByGenres(genres);

  if (genresLoading || moviesLoading) return <div>Loading...</div>;
  if (genresError) return <div>Error loading genres: {genresError}</div>;
  if (moviesError) return <div>Error loading movies: {moviesError}</div>;

  return (
    <>
      {isSearching ? (
        <Search movies={movies[0]?.movieList || []} />
      ) : (
        <>
          <h1 className="text-4xl font-black mt-10 mb-5">Movies</h1>
          <p className="w-2/5">
            Movies move us like nothing else can, whether they're scary, funny,
            dramatic, romantic or anywhere in-between. So many titles, so much
            to experience.
          </p>

          <MovieList movies={movies} />
        </>
      )}
    </>
  );
}
