"use client";

import Link from "next/link";
import * as motion from "motion/react-client";
import { FaArrowRightLong, FaArrowUpRightFromSquare } from "react-icons/fa6";
import Image from "next/image";

const journey = [
  {
    tag: "ORIGIN",
    place: "Agadir, Morocco",
    title: "Bachelor's, Mathematics & Computer Science",
    detail: "Where the foundations were laid — logic, math, and a first taste of code.",
  },
  {
    tag: "FORGE",
    place: "1337 Coding School",
    href: "https://1337.ma/en/",
    title: "Two years, no teachers",
    detail: "Just problem-solving, peer review, and pure logic — where discipline and autonomy were built.",
  },
  {
    tag: "BUILD",
    place: "Exchange Lab",
    href: "https://www.xchangelab.info/fr",
    title: "Dashboards, platforms, an AI agent",
    detail: "Real-time stats dashboards, school-management platforms, and a theme generator with billing and auth built in.",
  },
  {
    tag: "Internship",
    place: "OCP Maintenance Solutions",
    href: "https://ocp-ms.com",
    title: "Scalable front-end architecture",
    detail: "Turning messy data into clear interfaces with clean, maintainable Next.js architecture.",
    current: true,
  },
];

const stack = ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "GitHub Actions", "Django", "Rest API"];

export default function Home() {
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

      <section className="relative flex min-h-[92vh] items-center overflow-hidden px-6 pb-16 pt-24 md:px-14">
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-14 lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.p
              className="pf-mono mb-5 text-sm tracking-[0.24em] text-[var(--signal)] md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {"// FULL-STACK ENGINEER"}
            </motion.p>

            <h1 className="pf-display text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              I build things
              <br />
              that work.
            </h1>

            <motion.p
              className="mt-6 max-w-lg text-sm leading-[1.75] text-[var(--muted)] md:text-base"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I’m a software engineer with practical experience building and delivering web applications, particularly with Next.js, and I’m looking to contribute to products that create real value for users and businesses. I’m motivated by collaboration, continuous learning, and the opportunity to work with strong teams to build reliable, high-quality software.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-wrap items-center gap-5"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <Link href="/work">
                <motion.button
                  className="group flex items-center gap-3 border border-[var(--ink)] bg-[var(--ink)] px-5 py-3 text-sm font-medium text-[var(--bg)] md:px-6 md:py-3.5 md:text-base"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  View work
                  <FaArrowRightLong className="h-3.5 w-3.5" />
                </motion.button>
              </Link>

              <a
                href="#journey"
                className="pf-mono text-sm text-[var(--muted)] underline decoration-[var(--line)] underline-offset-4 transition-colors hover:text-[var(--ink)] md:text-base"
              >
                see my path ↓
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative shrink-0"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            <div className="relative h-64 w-52 md:h-80 md:w-64 lg:h-96 lg:w-72">
              <span className="absolute -left-2 -top-2 h-5 w-5 border-l-2 border-t-2 border-[var(--signal)]" />
              <span className="absolute -right-2 -top-2 h-5 w-5 border-r-2 border-t-2 border-[var(--signal)]" />
              <span className="absolute -bottom-2 -left-2 h-5 w-5 border-b-2 border-l-2 border-[var(--signal)]" />
              <span className="absolute -bottom-2 -right-2 h-5 w-5 border-b-2 border-r-2 border-[var(--signal)]" />
              <Image
                width={200}
                height={100}
                src="/mouaad.JPG"
                alt="Portrait"
                className="h-full w-full object-cover"
              />
            </div>

          </motion.div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--surface)]/40 px-6 py-5 md:px-14">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 md:justify-between">
          {stack.map((tech, i) => (
            <motion.span
              key={tech}
              className="pf-mono text-xs tracking-[0.2em] text-[var(--muted)] transition-colors hover:text-[var(--signal)] md:text-sm"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              {tech.toUpperCase()}
            </motion.span>
          ))}
        </div>
      </section>

      <section id="journey" className="px-6 py-24 md:px-14 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.p
            className="pf-mono mb-4 text-sm text-[var(--signal)] md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {"// BUILD LOG"}
          </motion.p>
          <motion.h2
            className="pf-display mb-5 text-4xl font-bold leading-[1.04] tracking-tight md:text-6xl"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How I got here.
          </motion.h2>

          <div className="relative hidden lg:block">
            <div className="absolute left-0 right-0 top-[15px] h-px bg-[var(--line)]" />
            <motion.div
              className="absolute left-0 top-[15px] h-px w-full origin-left bg-[var(--signal)]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
            <div className="grid grid-cols-4 gap-10">
              {journey.map((node, i) => (
                <motion.div
                  key={node.tag}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <div className="relative mb-6 h-8">
                    <span
                      className={`absolute left-0 top-0 h-2 w-2 rounded-full ${
                        node.current ? "bg-[var(--signal)]" : "bg-[var(--muted)]"
                      }`}
                    />
                    {node.current && (
                      <motion.span
                        className="absolute left-0 top-0 h-2 w-2 rounded-full bg-[var(--signal)]"
                        animate={{ scale: [1, 2.4], opacity: [0.6, 0] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                      />
                    )}
                  </div>

                  <p className="pf-mono mb-2 text-sm uppercase tracking-[0.22em] text-[var(--signal)] md:text-base">
                    {node.tag}                  
                  </p>

                  {node.href ? (
                    <Link
                      href={node.href}
                      target="_blank"
                      className="pf-mono group inline-flex items-center gap-1.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--signal)]"
                    >
                      {node.place}
                      <FaArrowUpRightFromSquare className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  ) : (
                    <p className="pf-mono text-sm text-[var(--muted)]">{node.place}</p>
                  )}

                  <h3 className="pf-display mt-3 text-xl font-bold leading-[1.15] tracking-tight text-[var(--ink)] md:text-2xl">
                    {node.title}
                  </h3>

                  <p className="mt-4 border-l-2 border-[var(--line)] py-0.5 pl-4 text-sm leading-[1.75] text-[var(--muted)] md:text-base">
                    {node.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative space-y-14 lg:hidden">
            <div className="absolute bottom-2 left-[3px] top-2 w-px bg-[var(--line)]" />
            {journey.map((node, i) => (
              <motion.div
                key={node.tag}
                className="relative pl-8"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span
                  className={`absolute left-0 top-1.5 h-2 w-2 rounded-full ${
                    node.current ? "bg-[var(--signal)]" : "bg-[var(--muted)]"
                  }`}
                />
                <p className="pf-mono mb-2 text-sm uppercase tracking-[0.22em] text-[var(--signal)] md:text-base">
                  {node.tag}
                </p>

                {node.href ? (
                  <Link
                    href={node.href}
                    target="_blank"
                    className="pf-mono inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--signal)]"
                  >
                    {node.place}
                    <FaArrowUpRightFromSquare className="h-3 w-3" />
                  </Link>
                ) : (
                  <p className="pf-mono text-sm text-[var(--muted)]">{node.place}</p>
                )}

                <h3 className="pf-display mt-3 text-xl font-bold leading-[1.15] tracking-tight text-[var(--ink)] md:text-2xl">
                  {node.title}
                </h3>

                <p className="mt-4 border-l-2 border-[var(--line)] py-0.5 pl-4 text-sm leading-[1.75] text-[var(--muted)] md:text-base">
                  {node.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-[var(--line)] px-6 py-20 md:px-14">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <h2 className="pf-display text-3xl font-bold tracking-tight md:text-4xl">
              Let&apos;s build something.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-[1.75] text-[var(--muted)] md:text-base">
              I’m currently looking for a software engineering opportunity where I can contribute my full-stack experience, learn from experienced people, and keep expanding my skills by building impactful products with a strong team.
              .
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <Link href="/work">
              <motion.button
                className="group flex items-center gap-3 border border-[var(--ink)] px-5 py-3 text-sm font-medium md:px-6 md:py-3.5 md:text-base"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                View work
                <FaArrowRightLong className="h-3.5 w-3.5" />
              </motion.button>
            </Link>
            <div className="pf-mono flex gap-5 text-xs tracking-[0.16em] text-[var(--muted)] md:text-sm">
              <Link href="https://1337.ma/en/" target="_blank" className="hover:text-[var(--signal)]">
                1337 ↗
              </Link>
              <Link
                href="https://www.xchangelab.info/fr"
                target="_blank"
                className="hover:text-[var(--signal)]"
              >
                EXCHANGE LAB ↗
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}