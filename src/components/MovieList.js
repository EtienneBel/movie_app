import Movie from "./Movie";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWE5YzJjMmFiZTMxNjYwMDMwOGZhMDJlMDY0NzVmNyIsInN1YiI6IjY1YmE3OTk1ZjkwYjE5MDE3YzA3MzU3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aU-C_y7WR97CP6-2TWZegkGVbBvXW_qPpD0FuNDuWoc";

export default function MovieList({ list }) {
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

  const data = fetchMoviesListApi();
  // data.map((item) => console.log(item));
  // console.log(data);

  return (
    <div className="mt-12">
      {list.map((item, index) => (
        <div key={index} className="mt-16">
          <p className="mb-4">{item.category_title}</p>
          <div className="slider-container">
            <Slider {...settings}>
              {item.category_list.map((item_2, index_2) => (
                <Movie key={index_2} src={item_2.src} title={item_2.title} />
              ))}
            </Slider>
          </div>
        </div>
      ))}
    </div>
  );
}

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

  if (!response.ok) {
    console.error("Error:", response.statusText);
    return;
  }

  const data = await response.json();
  // console.log(data);
  return data;
}

async function fetchMoviesListApi() {
  const data = await fetchMoviesGenreApi();
  if (data) {
    data.genres.forEach((genre) => {
      // console.log(item);
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre.id}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          return data;
        });
    });
  } else {
    console.log("No data available");
  }
}