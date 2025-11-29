"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* main content */}
      <main className="relative flex-1 flex justify-center items-center">
        <div className="lg:w-[50%] p-3 md:p-10">
          <motion.h1
            className="text-7xl md:text-big font-black mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hello
          </motion.h1>

          <div className="space-y-6">
            <motion.p
              className="text-xl w-full font-semibold leading-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              - I&apos;m a <span className="bg-blue-600 capitalize p-1">full-stack web developer</span> focused on building modern, scalable, and conversion-oriented applications.
            </motion.p>

            <motion.p
              className="text-xl font-semibold leading-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
              - With <span className="bg-yellow-500 p-1 text-gray-800 capitalize">Next.js</span>, <span className="p-1 bg-red-500 capitalize">React</span>, TypeScript, and <span className="bg-green-500 p-1 text-black capitalize">Supabase</span>, I turn ideas into fast, reliable, and growth-driven products.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          >
            <Link href="/work">
              <motion.button
                className="underline_effect mt-10 p-2 text-xl capitalize cursor-pointer flex items-center gap-3"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                view work
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  <FaArrowRightLong className="w-4" />
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
