"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ParallaxScrollSecond = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateYFirst = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const translateXFirst = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotateXFirst = useTransform(scrollYProgress, [0, 1], [0, -15]);

  const translateYThird = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const translateXThird = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const rotateXThird = useTransform(scrollYProgress, [0, 1], [0, 15]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn(
        "h-[40rem] sm:h-[45rem] md:h-[50rem] items-start overflow-y-auto w-full",
        className
      )}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto gap-4 sm:gap-6 md:gap-10 py-20 sm:py-30 md:py-40 px-4 sm:px-6 md:px-10"
        ref={gridRef}
      >
        <div className="grid gap-4 sm:gap-6 md:gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{
                y: translateYFirst,
                x: translateXFirst,
                rotateZ: rotateXFirst,
              }}
              key={"grid-1" + idx}
            >
              <Image
                src={el}
                className="h-48 sm:h-64 md:h-80 w-full object-cover object-left-top rounded-lg gap-4 sm:gap-6 md:gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-4 sm:gap-6 md:gap-10">
          {secondPart.map((el, idx) => (
            <motion.div key={"grid-2" + idx}>
              <Image
                src={el}
                className="h-48 sm:h-64 md:h-80 w-full object-cover object-left-top rounded-lg gap-4 sm:gap-6 md:gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-4 sm:gap-6 md:gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{
                y: translateYThird,
                x: translateXThird,
                rotateZ: rotateXThird,
              }}
              key={"grid-3" + idx}
            >
              <Image
                src={el}
                className="h-48 sm:h-64 md:h-80 w-full object-cover object-left-top rounded-lg gap-4 sm:gap-6 md:gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
