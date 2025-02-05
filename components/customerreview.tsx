"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Review = {
  name: string;
  text: string;
};



const reviews: Review[] = 
[
  {
    "name": "Shadil AM",
    "text": "The fried chicken tasted absolutely amazing! It was crispy on the outside  Definitely one of the best I’ve had!",
  },
  {
    "name": "Adwaith",
    "text": "Loved the fried chicken! Perfectly seasoned and cooked to perfection. Every bite was full of flavor!",
  },
  {
    "name": "Aqil",
    "text": "One of the best fried chickens I’ve had! The flavors were spot on, and the crispy texture made it even better.",
  }
];


const Reviews = () => {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null); // Set sliderRef type to Slider

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows
  };

  return (
    <div className="w-full relative h-auto text-center text-base text-dimgray font-inter my-20">
      <b className="leading-tight inline-block font-david-libre md:text-[40px] text-[28px]">
        Our Happy Customers
      </b>
      <Slider
        {...settings}
        ref={(slider) => setSliderRef(slider)} // Here the type is Slider
        className="mt-12 mx-auto md:w-[60%] w-[75%]"
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border-2 p-8 rounded-md relative flex flex-col items-center  h-[200px] gap-10 "
          >
            <p className="lg:mb-20 md:mb-16 mb-8 text-sm text-gray-700">{review.text}</p>
            <b className="text-gray-900 ">{review.name}</b>
            {/* <div className="text-sm text-gray-500">{review.title}</div> */}
          </div>
        ))}
      </Slider>
      {/* Custom Navigation Buttons */}
      <button
        onClick={() => sliderRef?.slickPrev()}
        className="absolute md:left-60 left-4 top-[65%] -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-30 hover:bg-white transition-colors"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => sliderRef?.slickNext()}
        className="absolute md:right-60 right-4 top-[65%] -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-30 hover:bg-white transition-colors"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Reviews;

