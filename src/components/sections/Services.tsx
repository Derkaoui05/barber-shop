"use client";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Haircuts",
    image: "/service1.webp",
  },
  {
    title: "Beard Services",
    image: "/service2.webp",
  },
  {
    title: "Shaves & Grooming",
    image: "/service3.webp",
  },
  {
    title: "Facial & Skin",
    image: "/service4.webp",
  },
  {
    title: "Packages",
    image: "/service5.webp",
  },
];

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const updateCurrentSlide = (index: number) => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };

  return (
    <section className="py-16 font-oswald text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-bold mb-4">
            Meet our Tailored<br />Services for You
          </h1>
          <p className="text-gray-400 text-xl mb-12">
            From Haircuts to Skin Treatments, We&apos;ve Got You.
          </p>

          <div className="relative">
            <Carousel
              selectedItem={currentSlide}
              onChange={updateCurrentSlide}
              showArrows={false}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
              className="services-carousel"
            >
              {services.map((service, index) => (
                <div key={index} className="relative h-[300px] md:h-[600px] group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 p-8 text-left bg-gradient-to-t from-black to-transparent w-full h-1/2">
                    <h3 className="text-5xl font-bold text-white absolute bottom-8 left-8">{service.title}</h3>
                  </div>
                </div>
              ))}
            </Carousel>
            
            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => {
                      const prevSlide = currentSlide === 0 ? services.length - 1 : currentSlide - 1;
                      updateCurrentSlide(prevSlide);
                    }}
                    className="cursor-pointer text-white p-3 "
                  >
                    <ArrowLeft className="w-6 h-6" />
                  </button>
                  <div className="flex items-center gap-2">
                    {services.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => updateCurrentSlide(index)}
                        className={`w-2 h-2 transition-colors ${
                          currentSlide === index ? "bg-white" : "bg-white/20"
                        }`}
                      />
                    ))}
                  </div>
                  <button 
                    onClick={() => {
                      const nextSlide = currentSlide === services.length - 1 ? 0 : currentSlide + 1;
                      updateCurrentSlide(nextSlide);
                    }}
                    className=" cursor-pointer text-white p-3 "
                  >
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="text-base uppercase tracking-wider border-white/20 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/services">Browse All Services →</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
