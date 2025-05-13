"use client";
import { ParallaxScrollSecond } from "@/components/ui/parallax-scroll";

export default function Gallery() {
  return (
    <div className="container relative bg-transparent py-12 md:py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Gallery</h1>
      <ParallaxScrollSecond 
        className="h-[80vh]" 
        images={images} 
      />
    </div>
  );
}

const images = [
  "/gallery/gallery1.webp",
  "/gallery/gallery2.jpg",
  "/gallery/gallery3.webp",
  "/gallery/gallery4.webp",
  "/gallery/gallery6.webp",
  "/gallery/gallery5.webp",
  "/gallery/gallery7.webp",
  "/gallery/gallery8.webp",
  "/gallery/gallery9.webp",
  "/gallery/gallery10.webp",
  "/gallery/gallery11.webp",
  "/gallery/gallery12.webp",
  "/gallery/gallery13.webp",
  "/gallery/gallery14.webp",
  "/gallery6.png",
];
