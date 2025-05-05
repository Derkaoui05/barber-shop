import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <section className="font-oswald w-full py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center justify-center gap-8 max-w-6xl mx-auto">
          <div className="flex-1 space-y-4 w-full">
            <div>
              <h2 className="text-6xl md:text-7xl tracking-wide leading-relaxed font-bold">
                An Award Winning Barbershop
              </h2>
              <div className="relative w-full aspect-[21/9]">
                <Image
                  src="/about2.webp"
                  alt="about image"
                  fill
                  priority
                  className="object-cover rounded-lg"
                />
              </div>
                <h2 className="text-6xl md:text-7xl tracking-wide leading-relaxed font-bold">
                  Built By Amazing Barbers.
                </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
