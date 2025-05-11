"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const handicraftImages = Array.from({ length: 26 }, (_, i) => ({
  id: i + 1,
  imgSrc: `/${i + 1}.jpeg`,
  title: "Handicrafts",
}));

const HandicraftsGalleryCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="py-16">
      <h2 className="text-center text-3xl font-bold text-green-800 mb-8">
        Handicrafts Gallery
      </h2>
      <Slider {...settings}>
        {handicraftImages.map((item) => (
          <div key={item.id} className="px-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <Image
                src={item.imgSrc}
                alt={item.title}
                width={1000}
                height={1000}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HandicraftsGalleryCarousel;
