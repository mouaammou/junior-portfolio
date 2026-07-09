'use client';

import { Project } from "@/data/projects";
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

export default function CarouselCard({ project }: { project: Project }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const nextSlide = () =>
    goTo(currentIndex === project.screenshots.length - 1 ? 0 : currentIndex + 1);
  const prevSlide = () =>
    goTo(currentIndex === 0 ? project.screenshots.length - 1 : currentIndex - 1);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 40 : -40, opacity: 0 }),
  };

  return (
    <div className="relative mx-auto w-full max-w-6xl">
      <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[#0f2236] shadow-2xl shadow-black/25">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={project.screenshots[currentIndex].src}
              alt={project.screenshots[currentIndex].alt}
              fill
              sizes="(min-width: 1280px) 72rem, (min-width: 768px) 90vw, 100vw"
              className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-[1.02] md:p-6"
              priority
            />
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg)]/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <span className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-[var(--signal)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-[var(--signal)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-[var(--signal)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-[var(--signal)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {project.screenshots.length > 1 && (
        <>
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[var(--line)] bg-[var(--bg)]/80 text-[var(--ink)] backdrop-blur transition-all duration-300 hover:scale-105 hover:border-[var(--signal)] hover:text-[var(--signal)] active:scale-95 md:h-12 md:w-12"
          >
            <FaArrowLeft className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next image"
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[var(--line)] bg-[var(--bg)]/80 text-[var(--ink)] backdrop-blur transition-all duration-300 hover:scale-105 hover:border-[var(--signal)] hover:text-[var(--signal)] active:scale-95 md:h-12 md:w-12"
          >
            <FaArrowRight className="h-3.5 w-3.5" />
          </button>

          <div className="mt-6 flex items-center justify-center gap-2">
            {project.screenshots.map((_, index) => (
              <button
                type="button"
                key={index}
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 md:h-2 ${
                  index === currentIndex
                    ? "w-8 bg-[var(--signal)] md:w-10"
                    : "w-1.5 bg-[var(--line)] hover:bg-[var(--muted)] md:w-2"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
