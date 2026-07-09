import { GraduationCap, Briefcase } from "lucide-react";
import * as motion from "motion/react-client";

const CURRI_NODES = [
  {
    id: 1,
    tag: "EDUCATION",
    title: "Baccalaureate in Physical Sciences",
    period: "2021",
    description: "Focused on the fundamentals of Physical Sciences and Mathematical Theory.",
    type: "education",
  },
  {
    id: 2,
    tag: "EDUCATION",
    title: "Bachelor in Mathematics and Computer Science — SMI",
    period: "2019 — 2021",
    description: "Studied discrete mathematics and algorithmic theory for computer science applications.",
    type: "education",
  },
  {
    id: 3,
    tag: "EDUCATION",
    title: "Junior Software Engineer — 1337",
    period: "2022 — 2024",
    description: "Advanced, peer-driven studies in computer science, specializing in software engineering.",
    type: "education",
  },
  {
    id: 4,
    tag: "EXPERIENCE",
    title: "Frontend Developer — Exchange Lab",
    period: "2024 — 2025",
    description:
      "Built a high-performance school management system on Next.js for the frontend and API layers, backed by Supabase for secure, low-latency data — Postgres, real-time sync, and auth.",
    type: "experience",
  },
  {
    id: 5,
    tag: "EXPERIENCE",
    title: "Software Engineer — OCP Maintenance Solutions",
    period: "2025 — Present",
    description:
      "Developing a centralized dashboard system that streamlines internal calculations and removes manual data entry, improving operational efficiency and data accuracy.",
    type: "experience",
    current: true,
  },
];

const stats = [
  { label: "Since", value: "2021" },
  { label: "Education", value: String(CURRI_NODES.filter((n) => n.type === "education").length).padStart(2, "0") },
  { label: "Experience", value: String(CURRI_NODES.filter((n) => n.type === "experience").length).padStart(2, "0") },
];

function NodeIcon({ type }: { type: string }) {
  const Icon = type === "education" ? GraduationCap : Briefcase;
  return <Icon className="h-5 w-5 text-[var(--signal)]" />;
}

export default function Curriculum() {
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
          className="pf-mono text-base tracking-wide text-[var(--signal)] md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {"// CURRICULUM"}
        </motion.p>

        <motion.h1
          className="pf-display mt-5 text-6xl font-bold leading-[1.02] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          Curriculum.
        </motion.h1>

        <motion.p
          className="mt-7 max-w-2xl text-xl leading-relaxed text-[var(--muted)] md:text-2xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          My education and professional journey — from first principles to
          production systems.
        </motion.p>

        <motion.div
          className="mt-14 flex flex-wrap gap-x-14 gap-y-6 border-t border-[var(--line)] pt-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="pf-display text-4xl font-bold md:text-5xl">{stat.value}</p>
              <p className="pf-mono mt-1 text-sm tracking-widest text-[var(--muted)]">
                {stat.label.toUpperCase()}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* TIMELINE */}
      <section className="relative px-6 pb-28 md:px-14">
        <div className="mx-auto max-w-6xl">
          {/* desktop horizontal timeline */}
          <div className="relative hidden lg:block">
            <div className="absolute left-0 right-0 top-[15px] h-px bg-[var(--line)]" />
            <motion.div
              className="absolute left-0 top-[15px] h-px w-full origin-left bg-[var(--signal)]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
            <div className="grid grid-cols-5 gap-8">
              {CURRI_NODES.map((node, i) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
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

                  <p className="pf-mono mb-2 flex items-center gap-2 text-sm tracking-widest text-[var(--signal)]">
                    <NodeIcon type={node.type} />
                    {node.tag}
                  </p>
                  <p className="pf-mono text-sm text-[var(--muted)]">{node.period}</p>
                  <p className="pf-display mt-2 text-xl font-bold leading-snug md:text-2xl">{node.title}</p>
                  <p className="mt-3 text-base leading-relaxed text-[var(--muted)]/90">
                    {node.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* mobile / tablet vertical timeline */}
          <div className="relative space-y-10 lg:hidden">
            <div className="absolute bottom-2 left-[3px] top-2 w-px bg-[var(--line)]" />
            {CURRI_NODES.map((node, i) => (
              <motion.div
                key={node.id}
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
                <p className="pf-mono mb-2 flex items-center gap-2 text-sm tracking-widest text-[var(--signal)]">
                  <NodeIcon type={node.type} />
                  {node.tag}
                </p>
                <p className="pf-mono text-sm text-[var(--muted)]">{node.period}</p>
                <p className="pf-display mt-2 text-2xl font-bold leading-snug">{node.title}</p>
                <p className="mt-3 text-base leading-relaxed text-[var(--muted)]/90">
                  {node.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
