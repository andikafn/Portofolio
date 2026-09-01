"use client";

const skills = [
  { label: "SKILL 1", name: "HTML & CSS", desc: "Markup semantik dan styling responsif yang bersih, aksesibel, dan terstruktur." },
  { label: "SKILL 2", name: "JAVASCRIPT", desc: "Bahasa inti web untuk membangun interaksi yang dinamis dan modern." },
  { label: "SKILL 3", name: "REACT / NEXT.JS", desc: "Framework powerful untuk aplikasi web yang cepat, interaktif, dan SEO-friendly." },
  { label: "SKILL 4", name: "TYPESCRIPT", desc: "Superset JavaScript dengan type-safety untuk kode yang scalable dan maintainable." },
  { label: "SKILL 5", name: "NODE.JS", desc: "Runtime backend untuk membangun API dan logika server yang efisien dan handal." },
  { label: "SKILL 6", name: "TAILWIND CSS", desc: "Utility-first CSS untuk desain custom yang cepat, konsisten, dan responsif." },
];

function RoseDecoration() {
  return (
    <svg viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -top-10 right-0 h-[280px] w-[320px] opacity-[0.12] lg:right-4 lg:h-[380px] lg:w-[420px]" aria-hidden>
      <path d="M130 42C132 58 144 70 162 72C148 78 138 90 136 108C134 90 124 78 110 72C128 70 140 58 130 42Z" fill="#254f7a" />
      <path d="M130 44C118 50 104 52 88 58C96 70 102 84 108 98C104 96 98 94 92 93C100 110 112 122 130 135C148 122 160 110 168 93C156 52 142 50 130 44Z" fill="#345e90" />
      <path d="M108 98C118 108 124 120 130 135C124 120 118 108 108 98Z" fill="#1a3a66" />
      <path d="M152 98C142 108 136 120 130 135C136 120 142 108 152 98Z" fill="#1a3a66" />
      <path d="M92 93C98 112 112 128 130 146C112 128 98 112 92 93Z" fill="#0f2b50" opacity="0.7" />
      <path d="M168 93C162 112 148 128 130 146C148 128 162 112 168 93Z" fill="#0f2b50" opacity="0.7" />
      <path d="M130 135C128 155 117 172 98 184M130 135C132 155 143 172 162 184M130 146C130 168 126 180 118 196" stroke="#0f2b50" strokeWidth="2.2" strokeLinecap="round" opacity="0.9" />
      <ellipse cx="98" cy="186" rx="12" ry="6" fill="#0f2b50" opacity="0.55" />
      <ellipse cx="162" cy="186" rx="12" ry="6" fill="#0f2b50" opacity="0.55" />
      <path d="M118 164C110 162 102 166 96 172M142 164C150 162 158 166 164 172" stroke="#0f2b50" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

function PhoneIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <rect x="14" y="18" width="36" height="28" rx="13" stroke="#0d2448" strokeWidth="1.7" opacity="0.85" />
      <rect x="20" y="24" width="24" height="16" rx="8" stroke="#14365f" strokeWidth="1.3" opacity="0.9" />
      <circle cx="32" cy="32" r="3.2" stroke="#14365f" strokeWidth="1.2" opacity="0.9" />
      <circle cx="26.5" cy="29" r="1.1" fill="#14365f" opacity="0.6" />
      <circle cx="37.5" cy="29" r="1.1" fill="#14365f" opacity="0.6" />
      <circle cx="26.5" cy="35" r="1.1" fill="#14365f" opacity="0.6" />
      <circle cx="37.5" cy="35" r="1.1" fill="#14365f" opacity="0.6" />
      <path d="M12 28C12 28 11 34 16 38" stroke="#0d2448" strokeWidth="1.7" strokeLinecap="round" opacity="0.85" />
      <path d="M52 28C52 28 53 34 48 38" stroke="#0d2448" strokeWidth="1.7" strokeLinecap="round" opacity="0.85" />
      <path d="M22 44L17 50M42 44L47 50" stroke="#0d2448" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

export default function Skills() {
  return (
    <section id="skills" data-gsap-section className="maroon-gradient relative overflow-hidden border-t border-[#0a1d3a]">
      <RoseDecoration />
      <PhoneIcon className="pointer-events-none absolute bottom-24 left-0 hidden h-16 w-16 -translate-x-1 opacity-20 lg:block lg:h-20 lg:w-20" />
      <PhoneIcon className="pointer-events-none absolute bottom-10 right-0 hidden h-16 w-16 translate-x-1 opacity-20 lg:block lg:h-20 lg:w-20" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{backgroundImage:'radial-gradient(#5b9bd5 1px, transparent 1px)',backgroundSize:'26px 26px'}} />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-700/40 blur-3xl" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-cyan-700/30 blur-3xl" />
      <svg className="bolt-flicker pointer-events-none absolute right-[7%] top-8 h-20 w-20 opacity-95" viewBox="0 0 24 24" fill="none">
        <path className="bolt-glow" d="M13 2 L4 14 H9.2 L7.2 22 L19 9 H11.8 L13 2 Z" fill="#fff" opacity="0.85" />
        <path d="M13 2 L4 14 H9.2 L7.2 22 L19 9 H11.8 L13 2 Z" fill="#5b9bd5" />
        <path d="M13 2 L4 14 H9.2 L7.2 22 L19 9 H11.8 L13 2 Z" fill="none" stroke="#e0ecff" strokeWidth="0.5" />
      </svg>

      <div
        className="container-custom relative z-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      >
        <p className="section-label !text-white/50 before:!bg-[#5b9bd5]" data-gsap-heading>Keahlian</p>
        <h2 className="text-3xl font-extralight tracking-tight text-white sm:text-4xl" data-gsap-heading>
          Keahlian <span className="font-medium">teknis</span>
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-10 lg:gap-5">
          {skills.map((skill) => (
            <div
              key={skill.label}
              data-gsap-card
              className="skill-card rounded-2xl px-6 py-6 lg:px-7 lg:py-7"
            >
              <span className="skill-badge">{skill.label}</span>
              <h3 className="mt-4 text-sm font-bold tracking-wide text-white sm:text-[15px]">{skill.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
