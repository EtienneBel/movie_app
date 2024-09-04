import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Movie from "./MovieCard";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function MovieList({ movies }: any) {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="categories_list">
      <div className="mt-12">
        {movies.map((data: any, key: any) => (
          <div key={key} className="mt-16">
            <p className="mb-4 mx-2">{data.genre.name}</p>
            <div className="slider-container">
              <Slider {...settings}>
                {data.movieList.map((movie: any, key2: any) => (
                  <Movie
                    id={movie.id}
                    key={key2}
                    src={IMAGE_BASE_URL + movie.backdrop_path}
                    title={movie.title}
                  />
                ))}
              </Slider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
