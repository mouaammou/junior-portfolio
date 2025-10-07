export default function Work() {
   return (
      <div className="flex flex-col lg:ml-52 mb-30 p-2">
         <header>
            <h1 className="text-4xl md:text-big font-black lg:my-4 mt-20">Work</h1>
            <p className="tiri_8 relative ml-10 text-lg">By Best Projects</p>
         </header>
         <main className="lg:mt-20">
            {/* container of the images 2 for row in lg */}
            <div className="flex justify-around items-start gap-1 flex-wrap space-y-10">
               {/* first div image */}
               <div className="mt-10 lg:mt-40 max-w-[30rem] w-full max-h-[23rem] overflow-hidden cursor-pointer group">
                  <h1 className="mb-3 font-semibold">FT_Transcendence</h1>
                  <img
                     src="/project-1.jpg"
                     alt="FT_Transcendence project"
                     className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-95"
                  />
               </div>

               {/* second div image */}
               <div className="max-w-[30rem] w-full max-h-[23rem] overflow-hidden cursor-pointer group">
                  <h1 className="mb-3 font-semibold">OCP - MAINTENCE SOLUTIONS</h1>
                  <img
                     src="/project-2.jpg"
                     alt="OCP Maintenance Solutions project"
                     className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-95"
                  />
               </div>
            </div>
         
         </main>
      </div>
   )
}