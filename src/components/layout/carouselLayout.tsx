'use client';
import { Project } from "@/data/projects";
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";


export default function CarouselCard({ project }: { project: Project }) {

   const [currentIndex, setCurrentIndex] = useState(0);
   const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
         prevIndex === project.screenshots.length - 1 ? 0 : prevIndex + 1
      );
   };

   const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
         prevIndex === 0 ? project.screenshots.length - 1 : prevIndex - 1
      );
   };

   return (
      <section className="relative">
         <div className="overflow-hidden rounded-lg max-w-320 max-h-200 w-full h-full">
            <Image
               src={project.screenshots[currentIndex].src}
               alt={project.screenshots[currentIndex].alt}
               width={1200}
               height={800}
               className="max-w-320 max-h-200 w-full h-full object-cover border border-gray-500"
               priority
            />
         </div>

         {/* Navigation buttons */}
         {project.screenshots.length > 1 &&
            <>
               <button
                  onClick={prevSlide}
                  className="absolute -left-3 cursor-pointer top-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 p-3 text-black rounded-full hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-110"
                  aria-label="Previous image"
               >
                  <FaArrowLeft className="h-5 w-5" />
               </button>
               <button
                  onClick={nextSlide}
                  className="absolute -right-5 cursor-pointer top-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-500 to-yellow-400 p-3 text-black rounded-full hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-110"
                  aria-label="Next image"
               >
                  <FaArrowRight className="h-5 w-5" />
               </button>

               {/* Indicators */}
               <div className="flex justify-center mt-4 gap-2">
                  {project.screenshots.map((_, index) => (
                     <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-yellow-300 w-8" : "bg-gray-400 hover:bg-gray-500"
                           }`}
                        aria-label={`Go to slide ${index + 1}`}
                     />
                  ))}
               </div>
            </>
         }
      </section>
   )
}