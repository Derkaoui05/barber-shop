"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const services = [
  {
    title: "Haircuts",
    image: "/service1.webp",
    description: "Professional haircuts for all styles and preferences",
  },
  {
    title: "Beard Services",
    image: "/service2.webp",
    description: "Expert beard shaping and maintenance",
  },
  {
    title: "Shaves & Grooming",
    image: "/service3.webp",
    description: "Traditional shaves and complete grooming services",
  },
  {
    title: "Facial & Skin",
    image: "/service4.webp",
    description: "Rejuvenating facial treatments and skincare",
  },
  {
    title: "Packages",
    image: "/service5.webp",
    description: "Comprehensive grooming packages for the complete experience",
  },
];

export default function Services() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-2">
            Meet our Tailored Services for You
          </h1>
          <p className="text-gray-600 text-center mb-12">
            From Haircuts to Skin Treatments, We've Got You.
          </p>

          <div className="relative">
            <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
              className="services-carousel"
              renderArrowPrev={(clickHandler, hasPrev) => (
                <button
                  onClick={clickHandler}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
              )}
              renderArrowNext={(clickHandler, hasNext) => (
                <button
                  onClick={clickHandler}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              )}
            >
              {services.map((service, index) => (
                <div key={index} className="relative h-[500px] group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 p-8 text-left bg-gradient-to-t from-black via-black/70 to-transparent w-full">
                    <h3 className="text-4xl font-bold mb-2 text-white">{service.title}</h3>
                    <p className="text-lg text-white/90">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </Carousel>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
              <div className="flex gap-2">
                {services.map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full bg-gray-300"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
