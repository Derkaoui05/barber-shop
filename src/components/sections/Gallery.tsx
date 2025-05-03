"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const galleryImages = [
  {
    src: "/gallery2.png",
    alt: "Barber cutting hair"
  },
  {
    src: "/gallery1.webp",
    alt: "Client getting hair wash"
  },
  {
    src: "/gallery3.webp",
    alt: "Barber styling hair"
  },
  {
    src: "/gallery4.jpg",
    alt: "Barber tools"
  },
  {
    src: "/gallery5.jpg",
    alt: "Barber mirror setup"
  },
  {
    src: "/gallery6.png",
    alt: "Barber working"
  }
];

export default function Gallery() {
  return (
    <section className="py-16 font-oswald">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-bold text-white mb-12">Be an Icon</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="relative aspect-square w-full overflow-hidden"
                style={{
                  clipPath: index === 0 
                    ? "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 15%)"
                    : index === galleryImages.length - 1
                    ? "polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%, 0% 0%)"
                    : "none"
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="text-base uppercase tracking-wider border-white/20 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/gallery">
                VIEW GALLERY <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
