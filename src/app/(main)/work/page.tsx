import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";


export default function Work() {
  return (
    <div className="flex flex-col lg:ml-52 mb-32 p-2">
      <header className=" ml-10">
        <h1 className="text-4xl md:text-big font-black lg:my-4 mt-20">Work</h1>
        <p className="tiri_8 relative ml-10 text-lg">My Best Projects</p>
      </header>
      <main className="lg:mt-10 lg:ml-16 lg:pl-16 lg:pr-10">
        <div className="flex gap-5 lg:gap-10 justify-end flex-wrap max-md:justify-center">
          {projects.map((data, index) => {
            return (
              <Link
                className={`${data.id % 2 === 1 && "mt-10 lg:mt-40"}`}
                key={index}
                href={`/work/${encodeURIComponent(data.slug)}`}
              >
                <h1 className="mb-3 font-semibold">{data.slug}</h1>
                <div className="max-w-[25rem] w-full max-h-[20rem] h-full overflow-hidden cursor-pointer group">
                  <Image
                    width={200}
                    height={100}
                    src={data.thumbnailImage}
                    alt={data.title}
                    className="w-[25rem] h-[20rem] transition-transform duration-500 ease-out group-hover:scale-110 object-cover"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}