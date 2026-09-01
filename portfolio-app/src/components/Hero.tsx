"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex aspect-video w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a224a] via-[#0a142a] to-[#03050a]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span data-anim="hero-bg-text" data-text="PORTOFOLIO" className="glitch glitch-solid select-none whitespace-nowrap font-display text-[20vw] font-black leading-none tracking-tight text-white sm:text-[18vw] md:text-[16vw] lg:text-[14vw]" style={{ opacity: 0.35, textShadow: "0 0 10px rgba(255,255,255,0.35)" }}>
          PORTOFOLIO
        </span>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(3,5,10,0.25)_100%)]" />

      <div className="absolute top-5 right-4 z-20 text-xs tracking-wider text-white/60" data-anim="intro">
        @dika.fn17
      </div>

      <div className="absolute bottom-5 left-4 z-20 flex flex-col items-start gap-1" data-anim="intro">
        <a
          href="https://instagram.com/dika.fn17"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-white/60"
        >
          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z" />
          </svg>
          instagram.com/dika.fn17
        </a>
      </div>

      <div className="absolute right-4 top-16 z-20 flex flex-col gap-px text-[10px] uppercase tracking-[0.25em] text-white/40 sm:top-10" data-anim="intro">
        @dika.fn17
      </div>

      <div className="absolute left-[6%] top-[76%] z-20 flex -translate-y-1/2 flex-col gap-1 text-center overflow-hidden">
          <span data-anim="hero-line" className="glitch font-sans text-3xl font-bold uppercase tracking-[0.15em] text-white sm:text-4xl md:text-5xl lg:text-6xl" data-text="DESIGNER">
              DESIGNER
            </span>
            <span data-anim="hero-line" className="glitch font-sans text-3xl font-bold uppercase tracking-[0.15em] text-white sm:text-4xl md:text-5xl lg:text-6xl" data-text="WEB">
              WEB
            </span>
      </div>

      <div className="absolute bottom-0 left-1/2 z-10 flex -translate-x-1/2 items-end justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/hero-photo.png"
          alt="Andika Firmansyah Nugraha"
          data-anim="hero-img"
          className="hero-photo object-contain object-bottom drop-shadow-[0_25px_50px_-12px_rgba(3,5,10,0.9)]"
        />
      </div>

      <div className="absolute right-[6%] top-[76%] z-20 flex -translate-y-1/2 flex-col gap-1 text-center overflow-hidden">
            <span data-anim="hero-line" className="glitch font-sans text-3xl font-bold uppercase tracking-[0.15em] text-[#f5e8e0] sm:text-4xl md:text-5xl lg:text-6xl" data-text="WEB">
              WEB
            </span>
            <span data-anim="hero-line" className="glitch font-sans text-3xl font-bold uppercase tracking-[0.15em] text-[#f5e8e0] sm:text-4xl md:text-5xl lg:text-6xl" data-text="DEVELOPER">
              DEVELOPER
            </span>
      </div>
    </section>
  );
}
