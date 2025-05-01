import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function About() {
  return (
    <section className="font-oswald w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          {/* Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Molding Style. Shaping Character.
            </h2>
            <p className="text-lg text-muted-foreground">
              Since 2010, The SharpLook has been the go-to destination for
              timeless grooming. Rooted in tradition and driven by innovation,
              our expert barbers bring precision and passion to every service.
              Discover our story, our craft, and the values that shape who we
              are.
            </p>
            <Button
              className="px-8 py-5 text-white transition-colors text-xl rounded-md bg-transparent hover:bg-primary border border-primary duration-500 cursor-pointer"
            >
              About us
            </Button>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative aspect-[4/3] w-full max-w-md mx-auto">
              <div className="absolute inset-0" style={{
                clipPath: "polygon(15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%, 0% 15%)"
              }}>
                <Image
                  src="/about1.avif"
                  alt="About SharpLook Barber"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
