"use client";

import { useState } from "react";
import Image from "next/image";

export default function CarouselTwo() {
  const slides = [
    { image: "/3rdSection-Image2.png", alt: "Slide 1" },
    { image: "/Blog-Image-3.png", alt: "Slide 2" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right"); 
  const handleButtonClick = () => {
    setSlideDirection(currentIndex % 2 === 0 ? "right" : "left"); 
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="w-full relative bg-gray-200 flex items-center justify-center overflow-hidden">
      <div className="relative w-screen h-screen overflow-hidden">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          const isPrev =
            index === (currentIndex === 0 ? slides.length - 1 : currentIndex - 1);

          return (
            <div
              key={index}
              className={`absolute w-full h-full transition-transform duration-700 ease-in-out rounded-2xl shadow-lg ${
                isActive
                  ? "translate-x-0 z-10"
                  : isPrev
                  ? slideDirection === "right"
                    ? "-translate-x-full"
                    : "translate-x-full"
                  : slideDirection === "right"
                  ? "translate-x-full"
                  : "-translate-x-full"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover w-full h-full"
              />
            </div>
          );
        })}
      </div>

      <button
        onClick={handleButtonClick}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white rounded-full shadow-md transition-colors duration-300 z-10 w-[50px] h-[50px] text-2xl"
      >
        ❂
      </button>
    </div>
  );
}
