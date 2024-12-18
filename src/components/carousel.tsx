"use client";

import { useState } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/Blog-Image-1.png",
    title: "AI-powered Systems",
    description: "The future of AI in powering sales...",
  },
  {
    image: "/Blog-Image-2.png",
    title: "Digital Marketing Agency",
    description: "Introducing AI SDRs for advanced marketing...",
  },
  {
    image: "/Blog-Image-3.png",
    title: "Google Reviews",
    description: "Understanding the impact of reviews...",
  },
];

export default function Carousel() {

  return (
    <div className="relative w-full flex justify-center items-center overflow-hidden">
      <div
        className="flex transition-all duration-500 gap-5"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-4 w-[850px] h-[500px] relative"
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg group hover:bg-green-200 transition-all duration-500">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover transition-all duration-500 group-hover:opacity-50"
              />
              <div className="absolute bottom-5 inset-x-0 bg-opacity-50 flex flex-col justify-center items-center text-white duration-300 group-hover:opacity-100 transition-transform transform group-hover:translate-y-[-40px] translate-y-10">
                <h2 className="text-2xl font-bold">{slide.title}</h2>
                <p className="mt-2 text-center mb-3">{slide.description}</p>
                <p className="opacity-0 group-hover:opacity-100 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus sint deleniti minus illo cupiditate dolore mollitia.
                </p>
              </div>
            </div>
            {index === 1 && <>
              <button
                className="bg-black w-[40px] h-[40px] absolute top-1/2 -left-11 transform -translate-y-1/2 text-white p-3 rounded-full shadow-lg z-10 flex justify-center items-center"
              >
                ←
              </button>
              <button
                className="bg-black w-[40px] h-[40px] absolute top-1/2 -right-11 transform -translate-y-1/2 text-white p-3 rounded-full shadow-lg z-10 flex justify-center items-center"
              >
                →
              </button>
            </>}
          </div>
        ))}
      </div>
    </div>
  );
}
