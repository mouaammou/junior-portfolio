'use client';

import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Briefcase, Code } from 'lucide-react';

const CURRI_NODES = [
   {
      id: 1,
      year: 2018,
      title: "Baccalaureate in Physical Sciences",
      period: "2018",
      description: "Focused on the fundamentals of Physical Sciences and Mathematical Theory",
      type: "education",
      icon: "education"
   },
   {
      id: 2,
      year: 2019,
      title: "Bachelor in Mathematics and Computer Science - SMI",
      period: "2019 - 2021",
      description: "Study Discrete Mathematics and Algorithmic Theory for Computer Science applications.",
      type: "education",
      icon: "education"
   },
   {
      id: 3,
      year: 2022,
      title: "Junior Software Engineer - 1337",
      period: "2022 - 2024",
      description: "Advanced studies in computer science, specializing in software engineering.",
      type: "education",
      icon: "education"
   },
   {
      id: 4,
      year: 2024,
      title: "Frontend Developer - Exchange Lab",
      period: "2024 - 2025",
      description: "Develop a high-performance, School Management System using the Next.js framework for the frontend and API layers. The system will rely on Supabase for secure, low-latency data operations, including PostgreSQL database management, real-time synchronization, and authentication.",
      type: "experience",
      icon: "work"
   },
   {
      id: 5,
      year: 2025,
      title: "Software Engineer - OCP MAINTENCE SOLUTIONS",
      period: "2025 - Present",
      description: "Develop a centralized Dashboard System for OCP Maintenance Solutions designed to streamline internal calculations and eliminate reliance on manual data entry, thereby improving operational efficiency and data accuracy.",
      type: "experience",
      icon: "work"
   },
];


const Curriculum = () => {
   const [activeNode, setActiveNode] = useState<number>(1);
   const openingInterval = useRef<NodeJS.Timeout | null>(null);

   const getNodeIcon = (type: string) => {
      switch (type) {
         case 'education': return <GraduationCap className="h-6 w-6 text-yellow-300" />;
         case 'experience': return <Briefcase className="h-6 w-6 text-yellow-300" />;
         default: return <Code className="h-6 w-6 text-yellow-300" />;
      }
   };

   useEffect(() => {
      openingInterval.current = setInterval(() => {
         //randon index between 1 and curri_nodes.legth
         let randomIndex = Math.floor(Math.random() * CURRI_NODES.length) + 1;
         setActiveNode(randomIndex);
      }, 5000);

      return (() => {
         if (openingInterval.current) {
            clearInterval(openingInterval.current);
         }
      })
   }, [])

   const handleCardOpening = (id: number) => {
      setActiveNode(activeNode === id ? 1 : id)
      if (openingInterval.current) {
         clearInterval(openingInterval.current);
         openingInterval.current = null;
      }
   }

   return (
      <div className="flex flex-col lg:ml-52 mb-30">
         <header className='ml-2 sm:ml-9'>
            <h1 className="text-4xl md:text-big font-black my-4 mt-20">Curriculum</h1>
            <p className="tiri_8 relative ml-10 text-lg">my education & professional journey</p>
         </header>

         <main className="mt-16 px-4">
            {/* Timeline */}
            <div className="relative">
               {/* Vertical line */}
               <div className="absolute left-4 lg:left-1/2 h-full w-1 bg-gradient-to-b from-yellow-300 to-yellow-700/70 transform -translate-x-1/2"></div>

               {/* Timeline nodes */}
               {CURRI_NODES.map((node, index) => (
                  <div
                     key={node.id}
                     className={`flex mb-12 relative ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
                  >
                     {/* Date indicator */}
                     <div className="lg:w-1/2 mb-4 lg:mb-0 px-8 absolute -top-6 ">
                        <span className="font-semibold  text-yellow-300">{node.period}</span>
                     </div>

                     {/* Node circle */}
                     <div className="absolute left-4 lg:left-1/2 w-8 h-8 bg-background
                        flex items-center justify-center transform -translate-x-1/2 z-10">
                        {getNodeIcon(node.type)}
                     </div>

                     {/* Content card */}
                     <div className={`lg:w-1/2 pl-12 lg:pl-8  ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : ''}`}>
                        <div
                           className="p-4 m-2 bg-background border border-yellow-400/30 rounded-lg shadow-lg hover:shadow-yellow-400/20 
                           transition-all duration-300 cursor-pointer text-left"
                           onClick={() => handleCardOpening(node.id)}
                        >
                           <h3 className="text-lg  my-1">{node.title}</h3>
                           <div
                              className={`overflow-hidden transition-all duration-300 ease-in-out ${activeNode === node.id
                                 ? 'max-h-40 opacity-100 mt-2'
                                 : 'max-h-0 opacity-0'
                                 }`}
                           >
                              <p className="text-gray-400">{node.description}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </main>
      </div>
   );
};

export default Curriculum;