
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import CarouselCard from "@/components/layout/carouselLayout";

type PageProps = {
  params: { slug: string };
};

export default async function WorkPageDetails({ params }: PageProps) {
  let { slug } = await params
  slug = decodeURIComponent(slug);
  const project = getProjectBySlug(slug);


  if (!project) return notFound();

  return (
    <div className="flex flex-col gap-8 p-2 sm:p-10 lg:ml-52">
      <header>
        <h1 className="sm:text-7xl text-2xl font-black my-8">{project.title}</h1>
        <p className="text-muted-foreground">{project.tagline}</p>
      </header>

      <main className="flex flex-col gap-6 space-y-4">
        <section className="flex flex-col gap-2">
          <div className="text-xl uppercase tracking-wide text-gray-500">Role</div>
          <div className="font-medium">{project.role}</div>
        </section>

        <section className="flex flex-col gap-2">
          <div className="text-xl uppercase tracking-wide text-gray-500">Description</div>
          <p className="max-w-3xl leading-relaxed">{project.description}</p>
        </section>

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