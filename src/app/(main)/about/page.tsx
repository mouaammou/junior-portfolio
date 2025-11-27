import Link from "next/link";

const AboutMe = () => {

   return (
      <div className="flex min-h-screen flex-col lg:ml-60">
         {/* top section */}
         <div className="relative flex justify-start items-start  mt-20 flex-col">
            <h1 className="text-7xl md:text-big font-black mb-4">About</h1>
            <p className="tiri_8 relative ml-10 md:text-2xl">A little bit about me</p>
         </div>

         {/* main content */}
         <div className="flex gap-10 justify-center h-full py-5 my-5 flex-col xl:flex-row">
            <div className="min-w-60 lg:min-w-90">
               <img src="/mouaad.jpg" alt="profile page" className="w-80 mx-auto md:w-[50rem] bg-black/30 p-1 shadow-inner shadow-gray-500" />
            </div>
            <div className="text-lg bg-black/60 px-3 py-1 shadow-inner shadow-gray-500">
               <p>I've always believed great developers aren't born — they're shaped. My journey began in Agadir, where I earned my <span className="bg-blue-600 p-1">Bachelor's degree</span> in Mathematics & Computer Science. But things truly clicked when I joined <Link href="https://1337.ma/en/" target="_blank" className="relative bg-pink-600 p-1 hover:bg-pink-700 transition-colors group">1337 Coding School<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-pink-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Visit website</span></Link>: no teachers, no traditional system — just problem-solving, peers, and pure logic.</p>
               <br />
               <p>For two years, I lived in that environment: late-night debugging, intense peer reviews, and projects that forced me to grow fast. It taught me <span className="bg-yellow-500 p-1 text-gray-800">discipline</span>, <span className="bg-yellow-500 p-1 text-gray-800">autonomy</span>, and one clear truth — I genuinely love building things.</p>
               <br />
               <p>From there, everything accelerated. I worked on AI-powered tools, dashboards, and full-stack systems. At <Link href="https://www.xchangelab.info/fr" target="_blank" className="relative bg-green-500 p-1 text-black hover:bg-green-600 transition-colors group">Exchange Lab<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Visit website</span></Link>, I built everything from real-time stats dashboards to complete school-management platforms using <span className="bg-green-500 p-1 text-black">Next.js and Supabase</span>. Later, I helped create an AI agent that generates Shopify themes automatically, with billing and authentication built in.</p>
               <br />
               <p>Today, at <Link href="https://ocp-ms.com" target="_blank" className="relative bg-sky-500 p-1 text-black hover:bg-sky-600 transition-colors group">OCP Maintenance Solutions<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-sky-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Visit website</span></Link>, I build scalable and reliable front-end applications — turning messy data into clear interfaces and shaping clean, maintainable <span className="bg-sky-500 text-black p-1">Next.js architecture</span>.</p>
               <br />
               <p>What drives me is simple: creating smooth, predictable, and high-quality user experiences. Whether it's a dashboard, an internal tool, or a production app, I focus on performance, clarity, and the details that make software feel professional.</p>
               <br />
               <p>I enjoy teamwork, ownership, and delivering beyond expectations. I code because I love the craft, I build because I love the impact — and every project is my chance to raise the bar.</p>
            </div>

         </div>
      </div>
   )

};

export default AboutMe;