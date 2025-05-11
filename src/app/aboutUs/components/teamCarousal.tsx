'use client';

import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const teamMembers = [
  { id: 1, name: 'John Doe', position: 'CEO', imgSrc: '/images/team1.jpg' },
  { id: 2, name: 'Jane Smith', position: 'CTO', imgSrc: '/images/team2.jpg' },
  { id: 3, name: 'Alice Johnson', position: 'Developer', imgSrc: '/images/team3.jpg' },
  { id: 4, name: 'Bob Brown', position: 'Designer', imgSrc: '/images/team4.jpg' },
  { id: 5, name: 'Charlie White', position: 'Marketing', imgSrc: '/images/team5.jpg' },
];

const TeamCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-16 text-white">
      <h2 className="text-center text-3xl text-black font-semibold mb-8">Our Team</h2>
      <Slider {...settings}>
        {teamMembers.map((member) => (
          <div key={member.id} className="px-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                src={member.imgSrc}
                alt={member.name}
                width={1000}
                height={1000}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.position}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamCarousel;
