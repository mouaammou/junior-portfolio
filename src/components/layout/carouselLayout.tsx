'use client';
import { Project } from "@/data/projects";
import Image from "next/image";
import { useState } from "react";

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
         <div className="overflow-hidden rounded-lg">
            <Image
               src={project.screenshots[currentIndex].src}
               alt={project.screenshots[currentIndex].alt}
               width={1200}
               height={800}
               sizes="(min-width: 640px) 90vw, 100vw"
               className="w-full h-[40rem] object-cover"
               priority
            />
         </div>

         {/* Navigation buttons */}
         {project.screenshots.length > 1 &&
            <>
               <button
                  onClick={prevSlide}
                  className="absolute left-0 cursor-pointer top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-r-lg"
                  aria-label="Previous image"
               >
                  ←
               </button>
               <button
                  onClick={nextSlide}
                  className="absolute right-0 cursor-pointer top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-l-lg"
                  aria-label="Next image"
               >
                  →
               </button>

               {/* Indicators */}
               <div className="flex justify-center mt-4 gap-2">
                  {project.screenshots.map((_, index) => (
                     <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-yellow-300" : "bg-gray-400"
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