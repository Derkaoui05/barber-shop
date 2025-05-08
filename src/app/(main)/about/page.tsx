"use client";
import Image from "next/image";
import React, { useState } from "react";
import { getBarber } from "@/config/barber";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AboutPage() {
  const [displayedImage, setDisplayedImage] = useState(getBarber[0].image);

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
              <h2 className="text-6xl md:text-7xl tracking-wide leading-relaxed font-bold">
                Built By Amazing Barbers.
              </h2>
            </div>
            {/* Co-owner section */}
            <div className="space-y-8 mt-20 w-full">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-full md:w-1/2 aspect-square">
                  <Image
                    src={displayedImage}
                    alt="Barbershop team"
                    fill
                    priority
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <Accordion type="single" collapsible>
                    {getBarber.map((barber) => (
                      <AccordionItem
                        key={barber.id}
                        value={barber.id.toString()}
                        onClick={() => setDisplayedImage(barber.image)}
                      >
                        <AccordionTrigger className="text-3xl font-bold text-left drop-shadow-lg drop-shadow-primary/60 hover:text-primary transition-colors">
                          {barber.name}
                        </AccordionTrigger>
                        <AccordionContent className="pl-7">
                          <ul className="space-y-1 ">
                            {barber.speciality.map((item, i) => (
                              <li key={i} className="text-lg">
                                - {item}
                              </li>
                            ))}
                          </ul>
                          <p className="mt-2 text-muted-foreground text-lg">
                            {barber.description}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
