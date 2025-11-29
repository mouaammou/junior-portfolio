import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import * as motion from "motion/react-client";

export default function Work() {
  return (
    <div className="flex flex-col mb-32 p-2 md:p-4 lg:ml-52">
      <header className="ml-2 md:ml-10">
        <h1 className="text-2xl md:text-4xl lg:text-big font-black my-4 lg:my-4 mt-16 lg:mt-20">Work</h1>
        <p className="tiri_8 relative ml-4 md:ml-10 text-lg md:text-2xl">My Best Projects</p>
      </header>
      <main className="mt-8 md:mt-10 ml-0 md:ml-10 lg:ml-16 pl-0 md:pl-8 lg:pl-16 pr-2 md:pr-4 lg:pr-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {projects.map((data, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.4, ease: "easeInOut", delay: 0.15 }}
              >
                <Link
                  className={`group flex flex-col h-full ${isEven ? 'md:mt-0' : 'md:mt-16 lg:mt-24'}`}
                  href={`/work/${encodeURIComponent(data.slug)}`}
                >
                  <div className="mb-3 md:mb-4 overflow-hidden">
                    <h1 className="text-base md:text-lg lg:text-xl capitalize text-white group-hover:text-white transition-colors duration-300">
                      {data.slug}
                    </h1>
                    <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-transparent h-1 w-0 group-hover:w-120 transition-all duration-700 ease-linear mt-2"></div>
                  </div>
                  
                  <div className="relative w-full h-full lg:w-120 md:h-56 lg:h-120 overflow-hidden rounded-lg border border-gray-700/50 group-hover:border-yellow-400/60 transition-all duration-300 shadow-lg group-hover:shadow-yellow-400/20">
                    <Image
                      width={400}
                      height={256}
                      src={data.thumbnailImage}
                      alt={data.title}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </main>
    </div>
  );
}