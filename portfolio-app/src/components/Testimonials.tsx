"use client";

import { useState } from "react";

const testimonials = [
  {
    id: 0,
    name: "None",
    role: "",
    content:
      "Belum ada testimonial yang tersedia.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      data-gsap-section
      className="maroon-gradient relative overflow-hidden border-t border-[#0a1d3a]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{backgroundImage:'radial-gradient(#5b9bd5 1px, transparent 1px)',backgroundSize:'26px 26px'}} />
      <div className="pointer-events-none absolute -top-32 -left-20 h-96 w-96 rounded-full bg-blue-700/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-indigo-900/40 blur-3xl" />
      <svg className="bolt-flicker pointer-events-none absolute left-[10%] top-10 h-16 w-16 opacity-95" style={{animationDelay:"0.6s"}} viewBox="0 0 24 24" fill="none">
        <path className="bolt-glow" d="M13 2 L4 14 H9.2 L7.2 22 L19 9 H11.8 L13 2 Z" fill="#fff" opacity="0.7" />
        <path d="M13 2 L4 14 H9.2 L7.2 22 L19 9 H11.8 L13 2 Z" fill="#5b9bd5" />
        <path d="M13 2 L4 14 H9.2 L7.2 22 L19 9 H11.8 L13 2 Z" fill="none" stroke="#e0ecff" strokeWidth="0.5" />
      </svg>
       <div className="container-custom relative z-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
         <div className="mb-16">
           <p className="section-label !text-white/55 before:!bg-[#5b9bd5]" data-gsap-heading>Testimoni</p>
           <h2 className="text-3xl font-extralight tracking-tight text-white sm:text-4xl" data-gsap-heading>
             Yang <span className="font-medium">mereka katakan</span>
           </h2>
         </div>

         <div className="mx-auto max-w-3xl">
           <blockquote className="border-l-2 border-white pl-6 text-xl font-light leading-relaxed text-white sm:text-2xl" data-gsap-card>
             &ldquo;{t.content}&rdquo;
           </blockquote>

<div className="mt-8" data-gsap-card>
  <p className="font-medium text-white">{t.name}</p>
  {t.role && (
    <p className="text-sm text-white/55">{t.role}</p>
  )}
</div>

          <div className="mt-12 flex items-center justify-between border-t border-[#1e3a5f] pt-6">
            <button
              onClick={prevTestimonial}
              className="text-sm text-white/55 transition-colors hover:text-white"
              aria-label="Testimoni sebelumnya"
            >
              ← Sebelumnya
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-1 transition-all ${
                    idx === current ? "w-6 bg-white" : "w-4 bg-white/20"
                  }`}
                  aria-label={`Ke testimoni ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="text-sm text-white/55 transition-colors hover:text-white"
              aria-label="Testimoni berikutnya"
            >
              Berikutnya →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
