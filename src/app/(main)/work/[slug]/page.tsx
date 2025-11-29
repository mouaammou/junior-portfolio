import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import CarouselCard from "@/components/layout/carouselLayout";
import { FaExternalLinkAlt } from "react-icons/fa";
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

  return (
    <div className="flex flex-col gap-8 p-2 sm:p-10 lg:ml-52 md:text-xl">
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="sm:text-7xl text-2xl font-black my-8">{project.title}</h1>
        <motion.p
          className="text-muted-foreground flex gap-5"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {project.tagline}{" "}
          {project.website && (
            <Link href={project.website} target="_blank">
              <FaExternalLinkAlt className="text-sm hover:text-yellow-400 transition-colors" />
            </Link>
          )}
        </motion.p>
      </motion.header>

      <main className="flex flex-col gap-6 space-y-4">
        <motion.section
          className="flex flex-col gap-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-xl uppercase tracking-wide text-gray-500">Role</div>
          <div className="font-medium">{project.role}</div>
        </motion.section>

        <motion.section
          className="flex flex-col gap-2 bg-background"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <div className="text-xl uppercase tracking-wide text-gray-500">Description</div>
          <p className="max-w-3xl leading-relaxed">{project.description}</p>
        </motion.section>

        <motion.div
          className="flex items-center justify-center gap-2 -mb-3"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {project.website && (
            <Link
              href={project.website}
              target="_blank"
              className="inline-flex items-center gap-2 text-yellow-300 hover:text-yellow-400 transition-colors"
            >
              visit <FaExternalLinkAlt className="h-4 w-4" />
            </Link>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <CarouselCard project={project} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/work" className="text-yellow-300 hover:underline">
            ← Back
          </Link>
        </motion.div>
      </main>
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}