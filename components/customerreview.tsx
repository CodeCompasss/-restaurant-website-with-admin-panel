"use client";
import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Review = {
  name: string;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Shadil AM",
    text: "The fried chicken tasted absolutely amazing! It was crispy on the outside. Definitely one of the best I’ve had!",
  },
  {
    name: "Adwaith",
    text: "Loved the fried chicken! Perfectly seasoned and cooked to perfection. Every bite was full of flavor!",
  },
  {
    name: "Aqil",
    text: "One of the best fried chickens I’ve had! The flavors were spot on, and the crispy texture made it even better.",
  },
];

const ReviewItem = ({ review }: { review: Review }) => {
  return (
    <div className="border-2 p-8 rounded-md relative flex flex-col items-center min-h-[200px] gap-4 ">
      <p className="lg:mb-20 md:mb-16 mb-8 text-md text-gray-700 leading-relaxed">
        {review.text}
      </p>
      <b className="text-gray-900 ">{review.name}</b>
    </div>
  );
};

const Reviews = () => {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full relative h-auto text-center text-base text-dimgray font-inter my-20">
      <b className="leading-tight inline-block font-david-libre md:text-[40px] text-[28px]">
        Our Happy Customers
      </b>
      <Slider
        {...settings}
        ref={(slider) => setSliderRef(slider)}
        className="mt-12 mx-auto md:w-[60%] w-[75%]"
      >
        {reviews.map((review, index) => (
          <ReviewItem key={index} review={review} />
        ))}
      </Slider>

      <div className="absolute w-full top-[65%] flex justify-between items-center px-4 md:px-60">
        <button
          onClick={() => sliderRef?.slickPrev()}
          className=" bg-white/80 p-2 rounded-full shadow-lg z-30 hover:bg-white transition-colors"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => sliderRef?.slickNext()}
          className="bg-white/80 p-2 rounded-full shadow-lg z-30 hover:bg-white transition-colors"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Reviews;
