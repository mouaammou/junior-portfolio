import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, projects } from "@/data/projects";
import CarouselCard from "@/components/layout/carouselLayout";
import { FaArrowLeft, FaArrowRightLong, FaArrowUpRightFromSquare } from "react-icons/fa6";
import * as motion from "motion/react-client";
import React from "react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default function WorkPageDetails({ params }: PageProps) {
  const resolvedParams = React.use(params);
  let { slug } = resolvedParams;
  slug = decodeURIComponent(slug);
  const project = getProjectBySlug(slug);

  if (!project) return notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <div className="pf-root relative min-h-screen  text-[var(--ink)]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;500&family=Inter:wght@400;500&display=swap');
        .pf-root { --bg:#122A43; --surface:#1B3A56; --line:#2E4E6E; --ink:#F3EFE4; --muted:#93A6BC; --signal:#FF8A42;
          font-family:'Inter',ui-sans-serif,system-ui,sans-serif; }
        .pf-display { font-family:'Space Grotesk',ui-sans-serif,sans-serif; }
        .pf-mono { font-family:'JetBrains Mono',ui-monospace,monospace; }
        .pf-grid-bg {
          background-image:
            linear-gradient(var(--line) 1px, transparent 1px),
            linear-gradient(90deg, var(--line) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        @media (prefers-reduced-motion: reduce) {
          .pf-root * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>

      <div className="pf-grid-bg pointer-events-none fixed inset-0 opacity-[0.06]" />

      <div className="relative px-6 pb-24 pt-24 md:px-14 md:pt-32 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link
              href="/work"
              className="pf-mono group inline-flex items-center gap-2 text-xs tracking-[0.14em] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--signal)] md:text-sm"
            >
              <FaArrowLeft className="h-3 w-3 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to work
            </Link>
          </motion.div>

          <motion.p
            className="pf-mono mt-10 text-xs tracking-[0.18em] text-[var(--signal)] md:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {String(index + 1).padStart(2, "0")} — CASE STUDY
          </motion.p>

          <motion.h1
            className="pf-display mt-4 text-3xl font-bold leading-[1.04] tracking-tight md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            {project.title}
          </motion.h1>

          <motion.p
            className="mt-6 max-w-3xl text-sm leading-[1.75] text-[var(--muted)] md:text-base lg:text-lg"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {project.tagline}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-[var(--line)] pt-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <div>
              <p className="pf-mono text-xs tracking-[0.18em] text-[var(--muted)] md:text-sm">ROLE</p>
              <p className="mt-2 text-sm font-medium md:text-base">{project.role}</p>
            </div>
            <div>
              <p className="pf-mono text-xs tracking-[0.18em] text-[var(--muted)] md:text-sm">STATUS</p>
              <p className="mt-2 text-sm font-medium md:text-base">{project.website ? "Live" : "Case study"}</p>
            </div>
            {project.website && (
              <Link
                href={project.website}
                target="_blank"
                className="group inline-flex items-center gap-2 text-xs font-medium text-[var(--ink)] transition-colors duration-300 hover:text-[var(--signal)] md:text-sm"
              >
                Visit site
                <FaArrowUpRightFromSquare className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            )}
          </motion.div>
        </div>

        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <CarouselCard project={project} />
        </motion.div>

        <motion.div
          className="mx-auto mt-14 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="pf-mono text-xs tracking-[0.18em] text-[var(--signal)] md:text-sm">ABOUT THE PROJECT</p>
          <p className="mt-4 text-sm leading-[1.75] text-[var(--muted)] md:text-base lg:text-lg">
            {project.description}
          </p>
        </motion.div>
      </div>

      <Link
        href={`/work/${encodeURIComponent(nextProject.slug)}`}
        className="group block border-t border-[var(--line)] px-6 py-16 transition-colors duration-300 hover:bg-[var(--surface)]/30 md:px-14 md:py-18 lg:px-20"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="pf-mono text-xs tracking-[0.18em] text-[var(--muted)] md:text-sm">NEXT PROJECT</p>
            <h2 className="pf-display mt-3 text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-[var(--signal)] md:text-4xl lg:text-5xl">
              {nextProject.title}
            </h2>
          </div>
          <span className="pf-mono inline-flex items-center gap-2 text-xs tracking-[0.14em] text-[var(--muted)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--signal)] md:text-sm">
            View project <FaArrowRightLong className="h-3.5 w-3.5" />
          </span>
        </div>
      </Link>
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
