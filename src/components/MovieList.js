import Movie from "./Movie";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
