import Movie from "./Movie";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWE5YzJjMmFiZTMxNjYwMDMwOGZhMDJlMDY0NzVmNyIsInN1YiI6IjY1YmE3OTk1ZjkwYjE5MDE3YzA3MzU3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aU-C_y7WR97CP6-2TWZegkGVbBvXW_qPpD0FuNDuWoc";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieList({ list }) {
  const [moviesGenres, setMoviesGenres]=useState([]);
  const [movies, setMovies]=useState([]);

  var settings = {
    dots: true,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  
  useEffect(function() {
    async function fetchMoviesGenreApi() {
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
      setMoviesGenres(data["genres"]);
      // console.log(data["genres"]);
    }

    fetchMoviesGenreApi();
  }, [])

  useEffect(function () {
    function fetchMoviesListApi() {
      if (moviesGenres.length > 0) {
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
          const movie = {
            genre: genre,
            movieList: data.results,
          };
          
          setMovies((prevMovies) => [...prevMovies, movie]);
        });
      }
    }

    fetchMoviesListApi();
  }, []);

  console.log(movies);

  return (
    <div className="mt-12">
      {movies.map((data, key) => (
        <div key={key} className="mt-16">
          <p className="mb-4">{data.genre.name}</p>
          <div className="slider-container">
            <Slider {...settings}>
              {data.movieList.map((movie, key2) => (
                <Movie
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
  );
}



// async function fetchMoviesListApi() {
//   const data = await fetchMoviesGenreApi();
//   if (data) {
//     data.genres.forEach((genre) => {
//       // console.log(item);
//       fetch(
//         `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre.id}`,
//         {
//           method: "GET",
//           headers: {
//             accept: "application/json",
//             Authorization: `Bearer ${API_KEY}`,
//           },
//         }
//       )
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//           return data;
//         });
//     });
//   } else {
//     console.log("No data available");
//   }
// }