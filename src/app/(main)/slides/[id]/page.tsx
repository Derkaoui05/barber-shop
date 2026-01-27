"use client"
import { useState } from "react";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1920&h=1080&fit=crop",
    text: ["BETWEEN SHADOW", "AND LIGHT"],
  },
  {
    img: "https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&h=1080&fit=crop",
    text: ["SILENCE SPEAKS", "THROUGH FORM"],
  },
  {
    img: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1920&h=1080&fit=crop",
    text: ["ESSENCE BEYOND", "PERCEPTION"],
  },
  {
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop",
    text: ["TRUTH IN", "EMPTINESS"],
  },
  {
    img: "https://images.unsplash.com/photo-1518976024611-28bf4b48222e?w=1920&h=1080&fit=crop",
    text: ["SURRENDER TO", "THE VOID"],
  },
];

export default function Component() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${slide.img})` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            {slide.text.map((t, j) => (
              <span
                key={j}
                className="text-white text-5xl md:text-7xl font-light tracking-widest mb-2"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}

      {/* Navigation - Left */}
      <button
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 text-white text-4xl md:text-6xl font-light hover:scale-110 transition-transform duration-200"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        ←
      </button>

      {/* Navigation - Right */}
      <button
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 text-white text-4xl md:text-6xl font-light hover:scale-110 transition-transform duration-200"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        →
      </button>

      {/* Counter */}
      <div className="absolute bottom-8 right-8 z-30 text-white text-xl md:text-2xl font-light tracking-wider">
        0{current + 1} / 0{slides.length}
      </div>
    </div>
  );
}