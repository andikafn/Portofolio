"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const navLinks = [
  { href: "#hero", label: "Beranda" },
  { href: "#about", label: "Tentang" },
  { href: "#skills", label: "Keahlian" },
  { href: "#portfolio", label: "Proyek" },
  { href: "#experience", label: "Riwayat" },
  { href: "#testimonials", label: "Testimoni" },
  { href: "#contact", label: "Kontak" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.getBoundingClientRect().top <= 100) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom mx-auto flex items-center justify-between px-6 py-5">
        <a
          href="#hero"
          className="text-lg font-medium tracking-tight text-foreground"
        >
          AFN<span className="text-muted">.</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm transition-colors hover:text-foreground ${
                  activeSection === link.href
                    ? "text-foreground"
                    : "text-muted"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center text-muted transition-colors hover:text-foreground"
            aria-label="Toggle theme"
          >
            {!mounted ? (
              <span className="block h-5 w-5" />
            ) : theme === "dark" ? (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M20.354 16.354A9 9 0 018.646 4.646 9 9 0 1012 20a9 9 0 008.354-4.646z"
                />
              </svg>
            )}
          </button>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle navigation"
          >
            <span
              className={`h-px w-6 bg-foreground transition-all ${
                isMobileOpen ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-foreground transition-all ${
                isMobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-foreground transition-all ${
                isMobileOpen ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <ul className="flex flex-col items-center gap-5 border-t border-border bg-background px-6 py-8 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`text-base transition-colors hover:text-foreground ${
                  activeSection === link.href
                    ? "text-foreground"
                    : "text-muted"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
