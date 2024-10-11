import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import x from '../assets/supernatural/tower.avif';
import nob from '../assets/supernatural/noblesse.avif'; // Adjust the path as necessary
import solo from '../assets/supernatural/levetating.avif'; // Adjust the path as necessary

const manhwas = [
  { title: "Tower of God", image: x },
  { title: "Noblesse", image: nob },
  { title: "Solo Leveling", image: solo },
  // Add more manhwas here
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="py-12 bg-gray-200">
      <h2 className="text-3xl font-bold text-center mb-8">Supernatural Manhwas</h2>
      <div className="container mx-auto">
        <Slider {...settings}>
          {manhwas.map((manhwa, index) => (
            <div key={index} className="p-4">
              <img src={manhwa.image} alt={manhwa.title} className="w-full h-auto rounded-lg" />
              <h3 className="text-center text-lg font-semibold mt-4">{manhwa.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
