import { FaArrowRightLong } from "react-icons/fa6";


export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* main content */}
      <main className="relative flex-1 flex justify-center items-center">
        <div className="lg:w-[50%] p-3 md:p-10">
          <h1 className="text-7xl md:text-big font-black mb-4">Hello</h1>
          <div className="space-y-6">
            <p className="text-xl w-full font-semibold leading-8">
              - I’m a <span className="bg-blue-600 capitalize p-1">full-stack web developer</span>  focused on building modern, scalable, and conversion-oriented applications.
            </p>
            <p className="text-xl font-semibold leading-8">
              - With <span className="bg-yellow-500 p-1 text-gray-800 capitalize">Next.js</span>, <span className="p-1 bg-red-500 capitalize">React</span>, TypeScript, and <span className="bg-green-500 p-1 text-black capitalize">Supabase</span>, I turn ideas into fast, reliable, and growth-driven products.
            </p>
          </div>
          <button className="underline_effect absolute right-[30%] mt-10 p-2 text-xl capitalize cursor-pointer flex items-end gap-3">
            view work <FaArrowRightLong className="w-4" />
          </button>
        </div>
      </main>
    </div>
  );
}
