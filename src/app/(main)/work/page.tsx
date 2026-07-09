import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import * as motion from "motion/react-client";
import { FaArrowRightLong } from "react-icons/fa6";

const stats = [
  { label: "Projects", value: String(projects.length).padStart(2, "0") },
  { label: "Role", value: "Full Stack" },
  { label: "Focus", value: "Next.js / React" },
];

export default function Work() {
  return (
    <div className="pf-root relative min-h-screen text-[var(--ink)]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;500&family=Inter:wght@400;500&display=swap');
        .pf-root { --bg:#122A43; --surface:#1B3A56; --line:#2E4E6E; --ink:#F3EFE4; --muted:#93A6BC; --signal:#FF8A42;
          font-family:'Inter',ui-sans-serif,system-ui,sans-serif; }
        .pf-display { font-family:'Space Grotesk',ui-sans-serif,sans-serif; }
        .pf-mono { font-family:'JetBrains Mono',ui-monospace,monospace; }
        @media (prefers-reduced-motion: reduce) {
          .pf-root * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>

      {/* HERO */}
      <section className="relative px-6 pb-16 pt-24 md:px-14 md:pt-32">
        <motion.p
          className="pf-mono text-base tracking-[0.28em] text-[var(--signal)] md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {"// SELECTED WORK"}
        </motion.p>

        <motion.h1
          className="pf-display mt-5 text-6xl font-bold leading-[0.98] tracking-tight md:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          Work.
        </motion.h1>

        <motion.p
          className="mt-7 max-w-2xl text-xl leading-[1.75] text-[var(--muted)] md:text-2xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          A collection of platforms, dashboards, and tools I&apos;ve designed
          and shipped — from real-time systems to AI-powered products.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-wrap gap-x-12 gap-y-6 border-t border-[var(--line)] pt-7"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="pf-display text-3xl font-bold md:text-4xl">{stat.value}</p>
              <p className="pf-mono mt-2 text-sm tracking-[0.22em] text-[var(--muted)] md:text-base">
                {stat.label.toUpperCase()}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* LIST */}
      <section className="relative px-6 pb-24 md:px-14">
        <div className="mx-auto flex max-w-7xl flex-col divide-y divide-[var(--line)]">
          {projects.map((data, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={data.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Link
                  href={`/work/${encodeURIComponent(data.slug)}`}
                  className="group grid items-center gap-8 py-16 md:grid-cols-12 md:gap-10 md:py-24"
                >
                  <div className={`md:col-span-5 ${isEven ? "" : "md:order-2"}`}>
                    <span className="pf-mono text-base tracking-[0.22em] text-[var(--signal)] md:text-lg">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h2 className="pf-display mt-4 text-3xl font-bold tracking-tight transition-colors duration-300 group-hover:text-[var(--signal)] md:text-5xl">
                      {data.title}
                    </h2>

                    <p className="mt-4 max-w-md text-lg leading-[1.8] text-[var(--muted)] md:text-xl">
                      {data.tagline}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <span className="pf-mono rounded-full border border-[var(--line)] px-3.5 py-1.5 text-sm tracking-[0.16em] text-[var(--muted)] md:text-base">
                        {data.role}
                      </span>
                      <span className="pf-mono rounded-full border border-[var(--line)] px-3.5 py-1.5 text-sm tracking-[0.16em] text-[var(--muted)] md:text-base">
                        {data.website ? "Live ↗" : "Case study"}
                      </span>
                    </div>

                    <div className="mt-8 inline-flex items-center gap-2 text-base font-medium text-[var(--ink)] transition-all duration-300 md:text-lg md:opacity-0 md:-translate-x-2 md:group-hover:opacity-100 md:group-hover:translate-x-0">
                      View project <FaArrowRightLong className="h-3.5 w-3.5" />
                    </div>
                  </div>

                  <div className={`relative md:col-span-7 ${isEven ? "" : "md:order-1"}`}>
                    <div className="relative rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.25)] shadow-black/30 md:p-4">
                      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.35rem] bg-[var(--surface)]">
                      <Image
                        src={data.thumbnailImage}
                        alt={data.title}
                        fill
                        sizes="(min-width: 768px) 55vw, 100vw"
                        className="object-cover object-center grayscale-[20%] contrast-[1.1] saturate-[1.08] transition-all duration-700 ease-out will-change-transform group-hover:scale-[1.06] group-hover:grayscale-0 group-hover:contrast-[1.15]"
                      />
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_35%),linear-gradient(to_t,rgba(18,42,67,0.5),transparent_55%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                      </div>

                    </div>

                    <span className="pointer-events-none absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-[var(--signal)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="pointer-events-none absolute -right-2 -top-2 h-6 w-6 border-r-2 border-t-2 border-[var(--signal)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="pointer-events-none absolute -bottom-2 -left-2 h-6 w-6 border-b-2 border-l-2 border-[var(--signal)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="pointer-events-none absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-[var(--signal)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="border-t border-[var(--line)] px-6 py-20 md:px-14">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="pf-display text-4xl font-bold tracking-tight md:text-6xl">
              Got something to build?
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-[1.8] text-[var(--muted)] md:text-xl">
              I&apos;m always open to new projects and collaborations.
            </p>
          </div>

          <Link href="/#contact">
            <motion.button
              className="group flex items-center gap-3 border border-[var(--ink)] px-7 py-4 text-base font-medium md:text-lg"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Get in touch
              <FaArrowRightLong className="h-3.5 w-3.5" />
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
