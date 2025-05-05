import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <section className="font-oswald w-full py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center justify-center gap-10 max-w-6xl mx-auto">
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
            </div>
            {/* Co-owner section */}
            <div className="space-y-8 w-full">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-full md:w-1/2 aspect-[3/2]">
                  <Image
                    src="/about3.webp"
                    alt="Co-owner image"
                    fill
                    priority
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <h2 className="text-4xl md:text-5xl tracking-wide leading-tight font-bold">
                    Built By Amazing Barbers.
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold">John</h3>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Classic Scissor Haircuts</li>
                        <li>Beard Specialist</li>
                      </ul>
                      <p className="mt-2 text-muted-foreground">
                        Co-owner of The Razor Brothers, brings over 30 years of
                        expertise to the shop. Known for his precision and
                        creativity, John ensures every client leaves looking
                        their best.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-xl font-bold">Mark</h3>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">James</h3>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Nicole</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

