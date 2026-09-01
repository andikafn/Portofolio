"use client";

type Experience = {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
};

type Education = {
  id: number;
  degree: string;
  institution: string;
  period: string;
};

const experiences: Experience[] = [
  {
    id: 0,
    role: "None",
    company: "",
    period: "",
    description:
      "Saat ini belum memiliki pengalaman kerja tetap.",
  },
];

const educationList: Education[] = [
  {
    id: 1,
    degree: "Produksi Film",
    institution: "SMKN 4 Garut",
    period: "2021 — 2024",
  },
  {
    id: 2,
    degree: "S1 Sistem Informasi",
    institution: "Institut Teknologi Garut",
    period: "2024 — Sekarang",
  },
  {
    id: 3,
    degree: "Coding Camp 2026",
    institution: "DBS Foundation & Dicoding",
    period: "2026 — Sekarang",
  },
];

export default function Experience() {
  return (
    <section id="experience" data-gsap-section className="maroon-gradient relative overflow-hidden border-t border-[#0a1d3a]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{backgroundImage:'radial-gradient(#5b9bd5 1px, transparent 1px)',backgroundSize:'26px 26px'}} />
      <div className="pointer-events-none absolute -top-32 -right-20 h-96 w-96 rounded-full bg-blue-700/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-cyan-700/30 blur-3xl" />
      <svg className="bolt-flicker pointer-events-none absolute right-[14%] top-12 h-14 w-14 opacity-90" style={{animationDelay:"0.9s"}} viewBox="0 0 24 24" fill="none">
        <path className="bolt-glow" d="M13 2 L4 14 H9.2 L7.2 22 L19 9 H11.8 L13 2 Z" fill="#fff" opacity="0.6" />
        <path d="M13 2 L4 14 H9.2 L7.2 22 L19 9 H11.8 L13 2 Z" fill="#5b9bd5" />
        <path d="M13 2 L4 14 H9.2 L7.2 22 L19 9 H11.8 L13 2 Z" fill="none" stroke="#e0ecff" strokeWidth="0.5" />
      </svg>
      <div
        className="container-custom relative z-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      >
        <div className="mb-16">
          <p className="section-label !text-white/55 before:!bg-[#5b9bd5]" data-gsap-heading>Riwayat</p>
          <h2 className="text-3xl font-extralight tracking-tight text-white sm:text-4xl" data-gsap-heading>
            Pengalaman <span className="font-medium">& pendidikan</span>
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h3 className="mb-8 text-sm uppercase tracking-widest text-white/50">
              Pengalaman Kerja
            </h3>
            <div className="space-y-10">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  data-gsap-card
                  className="border-l border-[#1e3a5f] pl-6"
                >
                  {exp.period && (
                    <p className="text-xs uppercase tracking-widest text-white/45">
                      {exp.period}
                    </p>
                  )}
                  <h4 className="mt-2 font-medium text-white">
                    {exp.role}
                  </h4>
                  {exp.company && (
                    <p className="text-sm text-white/60">{exp.company}</p>
                  )}
                  {exp.description && (
                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-8 text-sm uppercase tracking-widest text-white/50">
              Pendidikan
            </h3>
            <div className="space-y-10">
              {educationList.map((edu) => (
                <div key={edu.id} data-gsap-card className="border-l border-[#1e3a5f] pl-6">
                  <p className="text-xs uppercase tracking-widest text-white/45">
                    {edu.period}
                  </p>
                  <h4 className="mt-2 font-medium text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-white/60">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
