"use client";

import { useState, useRef, useEffect } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  demo?: string;
  github?: string;
};

const projects: Project[] = [
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Website portofolio pribadi dengan desain minimalis dan performa tinggi.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    demo: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Web Pencatatan Keuangan",
    description:
      "Aplikasi web untuk mencatat dan mengelola keuangan pribadi.",
    tech: ["Next.js", "React 18", "Prisma ORM", "PostgreSQL", "Tailwind CSS", "TypeScript"],
    demo: "https://pencatatan-keuangan-ancz4q863-neo-0172.vercel.app/",
    github: "#",
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [version, setVersion] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  const techs = Array.from(new Set(projects.flatMap((p) => p.tech))).sort();

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.tech.includes(filter));

  const openModal = (project: Project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);
  const handleFilter = (next: string) => {
    setFilter(next);
    setVersion((v) => v + 1);
  };

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const items = grid.querySelectorAll<HTMLElement>(".project-itemglitch");
    if (!items.length) return;
    import("gsap").then(({ gsap }) => {
      gsap.set(items, { autoAlpha: 0, clipPath: "inset(0 100% 0 0)", x: -8, skewX: 1 });
      items.forEach((el, i) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(0 100% 0 0)", x: -6, skewX: 1.2, opacity: 0 },
          {
            clipPath: "inset(0 0% 0 0)",
            x: 0,
            skewX: 0,
            opacity: 1,
            duration: 0.58,
            ease: "steps(18)",
            delay: i * 0.04,
            clearProps: "clipPath,x,skewX,opacity,visibility",
          }
        );
      });
    });
  }, [version]);

  return (
    <section id="portfolio" data-gsap-section className="portfolio-gradient relative overflow-hidden border-t border-[#0a1d3a] py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{backgroundImage:'radial-gradient(#5b9bd5 1px, transparent 1px)',backgroundSize:'26px 26px'}} />
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-blue-700/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-800/40 blur-3xl" />
      <svg className="bolt-flicker pointer-events-none absolute left-[10%] top-6 h-16 w-16 opacity-95" viewBox="0 0 24 24" fill="none">
        <path className="bolt-glow" d="M13 2 L4 14 H9.2 L7.2 22 L19 9 H11.8 L13 2 Z" fill="#fff" opacity="0.8" />
        <path d="M13 2 L4 14 H9.2 L7.2 22 L19 9 H11.8 L13 2 Z" fill="#5b9bd5" />
        <path d="M13 2 L4 14 H9.2 L7.2 22 L19 9 H11.8 L13 2 Z" fill="none" stroke="#e0ecff" strokeWidth="0.5" />
      </svg>
      <div
        className="container-custom mx-auto max-w-5xl relative z-10 px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-12">
          <p className="section-label !text-white/50 before:!bg-[#5b9bd5]" data-gsap-heading>Proyek</p>
          <h2 className="text-3xl font-extralight tracking-tight text-white sm:text-4xl" data-gsap-heading>
            Proyek yang <span className="font-medium">pernah dibangun</span>
          </h2>
        </div>

        <div className="mb-10 flex flex-wrap gap-4 border-b border-white/10">
          <button
            onClick={() => handleFilter("all")}
            className={`-mb-px border-b-2 pb-3 text-sm transition-colors ${
              filter === "all"
                ? "border-white text-white"
                : "border-transparent text-white/50 hover:text-white"
            }`}
          >
            Semua
          </button>
          {techs.map((tech) => (
            <button
              key={tech}
              onClick={() => handleFilter(tech)}
              className={`-mb-px border-b-2 pb-3 text-sm transition-colors ${
                filter === tech
                  ? "border-white text-white"
                  : "border-transparent text-white/50 hover:text-white"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <div ref={gridRef} key={`grid-${filter}-${version}`} className="grid gap-px border border-[#1e3a5f] bg-[#1e3a5f]">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              data-gsap-card
              className="project-itemglitch cursor-pointer border-b border-[#1e3a5f] p-8 transition-all hover:bg-white/[0.03]"
              onClick={() => openModal(project)}
            >
              <div className="flex flex-col justify-between gap-4 sm:flex-row">
                <div>
                  <h3 className="text-xl font-medium text-white">
                    {project.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="portfolio-tech-pill"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="sm:max-w-xs text-sm text-white/60">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center border border-border bg-black/40 px-6 py-12 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-2xl border border-border bg-background p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-light tracking-tight text-foreground">
              {selectedProject.title}
            </h3>
            <p className="mt-6 text-sm text-muted">
              {selectedProject.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {selectedProject.tech.map((t) => (
                <span
                  key={t}
                  className="border border-border px-2.5 py-1 text-xs text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 border-t border-border pt-6 text-sm text-muted">
              <p className="mb-1 font-medium text-foreground">Masalah yang diselesaikan:</p>
              <p className="mt-1">
                Klien membutuhkan solusi digital yang efisien dan responsif.
              </p>
            </div>

            <div className="mt-6 flex justify-end gap-4 border-t border-border pt-6">
              <button
                onClick={closeModal}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                Tutup
              </button>
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-foreground transition-colors hover:underline"
                >
                  Demo →
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
