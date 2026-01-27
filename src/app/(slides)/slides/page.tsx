"use client"

import React, { useState } from "react";

const slides = [
  {
    img: "/vintage1.webp",
    text: ["BETWEEN SHADOW", "AND LIGHT"],
  },
  {
    img: "/vintage2.webp",
    text: ["SILENCE SPEAKS", "THROUGH FORM"],
  },
  {
    img: "/vintage3.webp",
    text: ["ESSENCE BEYOND", "PERCEPTION"],
  },
  {
    img: "/vintage4.webp",
    text: ["TRUTH IN", "EMPTINESS"],
  },
];

export default function Component() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${slide.img})` }}
        >
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
          
          {/* Text overlay - Bottom left */}
          <div className="absolute bottom-24 left-12 z-20 flex flex-col">
            {slide.text.map((t, j) => (
              <span
                key={j}
                className="text-white text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight uppercase"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}

      {/* Navigation - Left Arrow Button */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-16 h-16 bg-black/10 backdrop-blur-xl transition-all duration-200 flex items-center justify-center group"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <span className="text-white text-2xl group-hover:scale-110 transition-transform">←</span>
      </button>

      {/* Navigation - Right Arrow Button */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-16 h-16 bg-black/10 backdrop-blur-xl  transition-all duration-200 flex items-center justify-center group"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <span className="text-white text-2xl group-hover:scale-110 transition-transform">→</span>
      </button>

      {/* Counter - Bottom center */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30  text-white text-sm font-medium tracking-widest">
        {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </div>
  );
}