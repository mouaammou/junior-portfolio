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

   const nextSlide = () => {
      setDirection(1);
      setCurrentIndex((prevIndex) =>
         prevIndex === project.screenshots.length - 1 ? 0 : prevIndex + 1
      );
   };

   const prevSlide = () => {
      setDirection(-1);
      setCurrentIndex((prevIndex) =>
         prevIndex === 0 ? project.screenshots.length - 1 : prevIndex - 1
      );
   };

   const slideVariants = {
      enter: (direction: number) => ({
         x: direction > 0 ? 1000 : -1000,
         opacity: 0
      }),
      center: {
         zIndex: 1,
         x: 0,
         opacity: 1
      },
      exit: (direction: number) => ({
         zIndex: 0,
         x: direction < 0 ? 1000 : -1000,
         opacity: 0
      })
   };

   return (
      <section className="relative">
         <div className="overflow-hidden rounded-lg max-w-320 max-h-200 w-full h-full relative">
            <AnimatePresence initial={false} custom={direction} mode="wait">
               <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                     x: { type: "spring", stiffness: 400, damping: 35 },
                     opacity: { duration: 0.09 }
                  }}
                  className="w-full h-full"
               >
                  <Image
                     src={project.screenshots[currentIndex].src}
                     alt={project.screenshots[currentIndex].alt}
                     width={1200}
                     height={800}
                     className="max-w-320 max-h-200 w-full h-full object-cover border border-gray-500"
                     priority
                  />
               </motion.div>
            </AnimatePresence>
         </div>

         {/* Navigation buttons */}
         {project.screenshots.length > 1 &&
            <>
               <motion.button
                  onClick={prevSlide}
                  className="absolute -left-3 max-md:left-0 cursor-pointer top-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 p-3 text-black rounded-full hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300"
                  aria-label="Previous image"
                  whileHover={{ scale: 1.1, rotate: -10 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.15 }}
               >
                  <FaArrowLeft className="h-5 w-5" />
               </motion.button>
               <motion.button
                  onClick={nextSlide}
                  className="absolute max-md:right-0 -right-5 cursor-pointer top-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-500 to-yellow-400 p-3 text-black rounded-full hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300"
                  aria-label="Next image"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.15 }}
               >
                  <FaArrowRight className="h-5 w-5" />
               </motion.button>

               {/* Indicators */}
               <div className="flex justify-center mt-4 gap-2">
                  {project.screenshots.map((_, index) => (
                     <motion.button
                        key={index}
                        onClick={() => {
                           setDirection(index > currentIndex ? 1 : -1);
                           setCurrentIndex(index);
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${
                           index === currentIndex ? "bg-yellow-300" : "bg-gray-400 hover:bg-gray-500"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                        animate={{ 
                           width: index === currentIndex ? 32 : 8 
                        }}
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                     />
                  ))}
               </div>
            </>
         }
      </section>
   )
}