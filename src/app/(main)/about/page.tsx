const AboutMe = () => {

   return (
      <div className="flex min-h-screen flex-col lg:ml-60">
         {/* top section */}
         <div className="relative flex justify-start items-start  mt-20 flex-col">
            <h1 className="text-7xl md:text-big font-black mb-4">About</h1>
            <p className="tiri_8 relative ml-10 text-lg">A little bit about me</p>
         </div>

         {/* main content */}
         <div className="flex gap-10 justify-center h-full py-5 my-5 max-md:flex-col">
            <div className="min-w-90">
               <img src="/mouaad.jpg" alt="profile page" className="w-80 mx-auto md:w-[50rem]" />
            </div>
            <div className="text-lg">
               <p>I’ve always believed great developers aren’t born — they’re shaped. My journey began in Agadir, where I earned my Bachelor’s degree in Mathematics & Computer Science. But things truly clicked when I joined 1337 Coding School: no teachers, no traditional system — just problem-solving, peers, and pure logic.</p>
               <br />
               <p>For two years, I lived in that environment: late-night debugging, intense peer reviews, and projects that forced me to grow fast. It taught me discipline, autonomy, and one clear truth — I genuinely love building things.</p>
               <br />
               <p>From there, everything accelerated. I worked on AI-powered tools, dashboards, and full-stack systems. At Exchange Lab, I built everything from real-time stats dashboards to complete school-management platforms using Next.js and Supabase. Later, I helped create an AI agent that generates Shopify themes automatically, with billing and authentication built in.</p>
               <br />
               <p>Today, at OCP Maintenance Solutions, I build scalable and reliable front-end applications — turning messy data into clear interfaces and shaping clean, maintainable Next.js architecture.</p>
               <br />
               <p>What drives me is simple: creating smooth, predictable, and high-quality user experiences. Whether it’s a dashboard, an internal tool, or a production app, I focus on performance, clarity, and the details that make software feel professional.</p>
               <br />
               <p>I enjoy teamwork, ownership, and delivering beyond expectations. I code because I love the craft, I build because I love the impact — and every project is my chance to raise the bar.</p>
            </div>

         </div>
      </div>
   )

};

export default AboutMe;