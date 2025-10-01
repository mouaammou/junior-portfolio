'use client';

const CURRI_NODES = [
   {
      id: 1,
      x: 20,
      y: 15,
      size: 'large',
      icon: 'GraduationCap',
      color: 'from-blue-500 to-cyan-500',
      title: "Master's in Computer Science",
      subtitle: "University Name",
      period: "2020 - 2022",
      details: "Specialized in AI and Machine Learning with thesis on Neural Networks. GPA: 3.8/4.0",
      type: "education"
   },
   {
      id: 2,
      x: 50,
      y: 30,
      size: 'xlarge',
      icon: 'Briefcase',
      color: 'from-purple-500 to-pink-500',
      title: "Senior Full Stack Developer",
      subtitle: "Tech Corp",
      period: "2022 - Present",
      details: "Leading development of scalable web applications. Improved performance by 40%, mentored team of 5 developers.",
      type: "experience"
   },
   {
      id: 3,
      x: 75,
      y: 55,
      size: 'medium',
      icon: 'Code',
      color: 'from-green-500 to-emerald-500',
      title: "Frontend Developer",
      subtitle: "Digital Agency",
      period: "2020 - 2022",
      details: "Built 15+ client projects, reduced load time by 50%, implemented design system.",
      type: "experience"
   },
   {
      id: 4,
      x: 25,
      y: 65,
      size: 'large',
      icon: 'GraduationCap',
      color: 'from-orange-500 to-red-500',
      title: "Bachelor's in Software Engineering",
      subtitle: "Tech University",
      period: "2016 - 2020",
      details: "Focus on web technologies and software architecture. GPA: 3.6/4.0",
      type: "education"
   },
   {
      id: 5,
      x: 65,
      y: 10,
      size: 'medium',
      icon: 'Award',
      color: 'from-yellow-500 to-orange-500',
      title: "AWS Certified Developer",
      subtitle: "Amazon Web Services",
      period: "2023",
      details: "Professional certification in cloud development and architecture.",
      type: "certification"
   },
   {
      id: 6,
      x: 45,
      y: 75,
      size: 'small',
      icon: 'Users',
      color: 'from-indigo-500 to-purple-500',
      title: "Junior Developer Intern",
      subtitle: "Startup Inc",
      period: "2019 - 2020",
      details: "Contributed to 3 major features, fixed 100+ bugs, learned agile methodology.",
      type: "experience"
   }
];

const Curriculum = () => {
   return (
      <div className="flex flex-col lg:ml-52 min-h-screen overflow-scroll no-scrollbar">
         <header>
            <h1 className=" text-4xl md:text-big font-black my-4 mt-20">Curriculum</h1>
            <p className="tiri_8  relative ml-10 text-lg">my education & some of my experiences</p>
         </header>
         <main className="flex justify-center items-center mt-10">
            <div className="relative">
               <div className="absolute top-0 -left-24 lg:right-1/2">
                  <svg width="200" height="200" viewBox="0 0 100 100">
                     <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="black"
                        stroke="gold"
                        strokeWidth="5"
                        id="my-circle"
                     />
                  </svg>
                  <p className="absolute top-20 left-17 font-black text-2xl capitalize">hello</p>
               </div>

               {/* line that will connect */}
               <div className="absolute top-44 left-10">
                  <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
                     <line x1="10" y1="0" x2="250" y2="200"
                        stroke="gold"
                        strokeWidth="5" />
                  </svg>
               </div>

               <div className="absolute top-[20rem] -left-24 lg:left-44">
                  <svg width="200" height="200" viewBox="0 0 100 100">
                     <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="black"
                        stroke="gold"
                        strokeWidth="5"
                        id="my-circle"
                     />
                  </svg>
                  <p className="absolute top-20 left-17 font-black text-2xl capitalize">hello</p>
               </div>


               <div className="absolute top-[30rem] -left-24 lg:right-1/3">
                  <svg width="200" height="200" viewBox="0 0 100 100">
                     <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="black"
                        stroke="gold"
                        strokeWidth="5"
                        id="my-circle"
                     />
                  </svg>
                  <p className="absolute top-20 left-17 font-black text-2xl capitalize">hello</p>
               </div>


               {/* line that will connect */}
               <div className="absolute top-[20rem] left-24">
                  <svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
                     <line  x1="0" y1="270" x2="90" y2="90"
                        stroke="gold"
                        strokeWidth="5" />
                        {/* <line x1="0" y1="263" x2="120" y2="22" stroke="gold" stroke-width="5"></line> */}
                  </svg>
               </div>
               

  {/* line that will connect */}
               <div className="absolute top-[30rem] -left-24 lg:right-1/2">
                  <svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
                     <line x1="26" y1="99" x2="36" y2="300"
                        stroke="gold"
                        strokeWidth="5" />
                  </svg>
               </div>

               <div className="absolute top-[50rem] -left-24 lg:right-1/2">
                  <svg width="200" height="200" viewBox="0 0 100 100">
                     <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="black"
                        stroke="gold"
                        strokeWidth="5"
                        id="my-circle"
                     />
                  </svg>
                  <p className="absolute top-20 left-17 font-black text-2xl capitalize">hello</p>
               </div>
            </div>
         </main>
      </div>
   )
}

export default Curriculum;