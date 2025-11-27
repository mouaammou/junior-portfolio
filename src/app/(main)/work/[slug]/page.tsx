import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import CarouselCard from "@/components/layout/carouselLayout";
import { FaExternalLinkAlt } from "react-icons/fa";

type PageProps = {
  params: { slug: string };
};

export default async function WorkPageDetails({ params }: PageProps) {
  let { slug } = await params
  slug = decodeURIComponent(slug);
  const project = getProjectBySlug(slug);


  if (!project) return notFound();

  return (
    <div className="flex flex-col gap-8 p-2 sm:p-10 lg:ml-52 md:text-xl">
      <header>
        <h1 className="sm:text-7xl text-2xl font-black my-8">{project.title}</h1>
        <p className="text-muted-foreground flex gap-5">{project.tagline} {project.website && <Link href={project.website} target="_blank"><FaExternalLinkAlt className="text-sm"/></Link>} </p>

      </header>

      <main className="flex flex-col gap-6 space-y-4">
        <section className="flex flex-col gap-2">
          <div className="text-xl uppercase tracking-wide text-gray-500">Role</div>
          <div className="font-medium">{project.role}</div>
        </section>

        <section className="flex flex-col gap-2 bg-background">
          <div className="text-xl uppercase tracking-wide text-gray-500">Description</div>
          <p className="max-w-3xl leading-relaxed">{project.description}</p>
        </section>

        <div className="flex items-center justify-center gap-2 -mb-3">
          {project.website && <Link href={project.website}  target="_blank" className="inline-flex items-center gap-2 text-yellow-300 hover:text-yellow-400 transition-colors">visit <FaExternalLinkAlt className="h-4 w-4" /></Link>}
        </div>

        <CarouselCard project={project} />

        <div>
          <Link href="/work" className="text-yellow-300 hover:underline">
            ← Back
          </Link>
        </div>
      </main>
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}