export default function Hello() {
  return (
    <main className="relative flex-1 flex justify-center items-center ml-24">
      <div className="lg:w-[50%] p-3 md:p-10">
        <h1 className="text-7xl md:text-big font-black mb-4">Hello</h1>
        <div className="space-y-4">
          <p className="text-lg w-full">
            - I’m a full-stack web developer focused on building modern, scalable, and conversion-oriented applications.
          </p>
          <p className="text-lg">
            - With Next.js, React, TypeScript, and Supabase, I turn ideas into fast, reliable, and growth-driven products.
          </p>
        </div>
        <button className="underline_effect absolute right-[30%] mt-10 p-2 text-xl capitalize cursor-pointer">
          view work
        </button>
      </div>
    </main>
  )
}