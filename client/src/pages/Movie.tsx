import Navbar from "@/components/navbar/Navbar";
import { useMovie } from "@/hooks/useMovie";
import { useParams } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function Movie() {
  const { movieId } = useParams();
  const { movie, error, loading } = useMovie(movieId);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Navbar onSearch={undefined} />
      <div
        style={{
          backgroundImage: `url(${IMAGE_BASE_URL}${
            movie?.backdrop_path || ""
          })`,
        }}
        className="bg-center bg-cover h-screen bg-blend-overlay bg-gradient-to-b from-black/79 via-[rgb(5,4,4)]/68 to-black/72"
      >
        {movie ? movie.title : "Movie not found"}
      </div>
    </>
  );
}
