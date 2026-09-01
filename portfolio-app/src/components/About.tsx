"use client";

export default function About() {
  return (
    <section
      id="about"
      data-gsap-section
      className="relative overflow-hidden bg-gradient-to-br from-[#0a224a] via-[#0a142a] to-[#03050a] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#1a3a6a]/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-black/40 blur-3xl" />
        <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(#5b9bd5 1px, transparent 1px)',backgroundSize:'26px 26px',opacity:0.2}} />
        <svg
          className="absolute bottom-10 left-10 h-40 w-40 text-white/[0.04]"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M50 10 C30 20 10 40 20 60 C30 80 50 90 70 80 C90 70 95 40 70 20 C60 10 55 5 50 10 Z" />
        </svg>
        <svg
          className="absolute right-20 top-20 h-32 w-32 text-white/[0.03]"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M50 10 C30 20 10 40 20 60 C30 80 50 90 70 80 C90 70 95 40 70 20 C60 10 55 5 50 10 Z" />
        </svg>
      </div>

      {/* Photo - absolute to section, past padding to touch bottom border */}
      <div className="absolute bottom-[-5rem] left-0 lg:left-20 w-[650px] max-w-full h-full min-h-[500px] lg:w-[800px] hidden lg:block z-0 lg:translate-x-[30%] lg:-translate-y-[9%]">
        <img
          src="/assets/about-photo.png"
          alt="Andika Firmansyah Nugraha - portrait"
          className="w-full h-full object-contain object-bottom"
        />
      </div>

      <div className="container-custom relative z-10">
        <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-white" data-gsap-heading>
          Siapa Saya?
        </p>

        <div className="lg:ml-[560px] lg:pl-6">
          <div className="flex flex-col gap-4">
            {/* Name card - moved above Perjalanan Karir */}
            <div className="relative inline-block rounded-2xl bg-black/50 p-6 backdrop-blur-sm sm:p-7 whitespace-nowrap">
              <span className="relative inline-block text-3xl font-extralight tracking-tight text-white">
                Andika Firmansyah Nugraha
              </span>
              <p className="mt-2 text-base text-white/80">Full stack developer</p>
            </div>

            <div className="rounded-2xl bg-black/40 p-6 backdrop-blur-sm sm:p-7" data-gsap-card>
              <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-white">
                <span className="h-2 w-2 rounded-full bg-[#3b82f6]" />
                Perjalanan Karier
              </h3>
              <p className="text-sm leading-relaxed text-white/80">
                Saya adalah Full-Stack Developer yang sedang mengasah kemampuan
                melalui pendidikan formal dan praktikum. Perjalanan saya dimulai
                dari Produksi Film di SMKN 4 Garut (2021 — 2024), lalu melanjutkan
                ke S1 Sistem Informasi di Institut Teknologi Garut (2024 — Sekarang),
                sekaligus mengikuti Coding Camp 2026 powered by DBS Foundation &
                Dicoding untuk menguasai pengembangan web modern.
              </p>
            </div>

            <div className="rounded-2xl bg-black/40 p-6 backdrop-blur-sm sm:p-7" data-gsap-card>
              <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-white">
                <span className="h-2 w-2 rounded-full bg-[#3b82f6]" />
                Keahlian Utama
              </h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-white/60" />
                  HTML / CSS
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-white/60" />
                  JavaScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-white/60" />
                  TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-white/60" />
                  React / Next.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-white/60" />
                  Node.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-white/60" />
                  Tailwind CSS
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-black/40 p-6 backdrop-blur-sm sm:p-7" data-gsap-card>
              <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-white">
                <span className="h-2 w-2 rounded-full bg-[#3b82f6]" />
                Fokus Saat Ini
              </h3>
              <p className="text-sm leading-relaxed text-white/80">
                Saat ini saya fokus pada performa, aksesibilitas, dan pengalaman
                pengguna yang bersih. Saya percaya batasan desain yang baik
                menghasilkan produk yang lebih baik — tipografi yang jelas, tata
                letak teratur, dan kode yang dapat diskalakan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
