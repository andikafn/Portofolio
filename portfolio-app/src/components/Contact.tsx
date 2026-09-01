"use client";

import { useState } from "react";

const FORM_ENDPOINT =
  "https://formspree.io/f/xljejjkk";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [honeypot, setHoneypot] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (form.name.trim().length < 2)
      newErrors.name = "Nama minimal 2 karakter.";
    if (!/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(form.email.trim()))
      newErrors.email = "Email tidak valid.";
    if (form.subject.trim().length < 3)
      newErrors.subject = "Subjek minimal 3 karakter.";
    if (form.message.trim().length < 10)
      newErrors.message = "Pesan minimal 10 karakter.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;
    if (!validate()) return;

    const submitData = {
      name: form.name.trim(),
      _replyto: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    };

    setIsSubmitting(true);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(submitData),
      });
      if (!res.ok) {
        const err = await res.text();
        throw new Error(err || `Submit failed: ${res.status}`);
      }
      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors((prev) => ({ ...prev, message: "Gagal mengirim. Coba lagi nanti." }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      data-gsap-section
      className="maroon-gradient relative overflow-hidden border-t border-[#0a1d3a]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{backgroundImage:'radial-gradient(#5b9bd5 1px, transparent 1px)',backgroundSize:'26px 26px'}} />
      <div className="pointer-events-none absolute -top-40 -right-20 h-96 w-96 rounded-full bg-blue-700/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-cyan-700/40 blur-3xl" />
      <svg className="bolt-flicker pointer-events-none absolute right-[12%] top-10 h-16 w-16 opacity-95" style={{animationDelay:"0.4s"}} viewBox="0 0 24 24" fill="none">
        <path className="bolt-glow" d="M13 2 L4 14 H9.2 L7.2 22 L19 9 H11.8 L13 2 Z" fill="#fff" opacity="0.75" />
        <path d="M13 2 L4 14 H9.2 L7.2 22 L19 9 H11.8 L13 2 Z" fill="#5b9bd5" />
        <path d="M13 2 L4 14 H9.2 L7.2 22 L19 9 H11.8 L13 2 Z" fill="none" stroke="#e0ecff" strokeWidth="0.5" />
      </svg>
      <div
        className="container-custom relative z-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      >
        <div className="mb-16">
          <p className="section-label !text-white/55 before:!bg-[#5b9bd5]" data-gsap-heading>Kontak</p>
          <h2 className="text-3xl font-extralight tracking-tight text-white sm:text-4xl" data-gsap-heading>
            Hubungi <span className="font-medium">saya</span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/60" data-gsap-card>
            Ada pertanyaan? Isi formulir di bawah ini atau kirim email langsung.
          </p>
          <div className="mt-8 h-px w-12 bg-[#5b9bd5]" />
        </div>

        <div className="mx-auto max-w-xl">
          {submitted ? (
            <div className="border border-[#1e3a5f] p-10 text-center">
              <svg
                className="mx-auto mb-4 h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m5.618-4.016A11.97 11.97 0 0012 2.94m-7.757 1.593A10.006 10.006 0 012.044 12.56M4.5 12a7.5 7.5 0 1010.97-6.05A7.994 7.994 0 0112 15a7.5 7.5 0 007.5-7.5z"
                />
              </svg>
              <h3 className="mb-3 text-xl font-light text-white">
                Terima kasih!
              </h3>
              <p className="text-sm text-white/60">
                Pesan Anda telah terkirim. Saya akan menghubungi Anda segera.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm text-white/55"
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border-b-2 border-[#1e3a5f] bg-transparent px-0 py-2 text-sm text-white outline-none focus:border-[#5b9bd5]"
                    placeholder="Nama lengkap"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm text-white/55"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border-b-2 border-[#1e3a5f] bg-transparent px-0 py-2 text-sm text-white outline-none focus:border-[#5b9bd5]"
                    placeholder="nama@contoh.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-1 block text-sm text-white/55"
                >
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full border-b-2 border-[#1e3a5f] bg-transparent px-0 py-2 text-sm text-white outline-none focus:border-[#5b9bd5]"
                  placeholder="Apa yang ingin disampaikan?"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-500">{errors.subject}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm text-white/55"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full resize-y border-b-2 border-[#1e3a5f] bg-transparent px-0 py-2 text-sm text-white outline-none focus:border-[#5b9bd5]"
                  placeholder="Tuliskan pesan Anda..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              <div className="flex items-center justify-between border-t border-[#1e3a5f] pt-6">
                <label className="flex cursor-pointer items-center gap-3 text-sm text-white/55">
                  <input
                    type="checkbox"
                    required
                    className="h-4 w-4 border-[#1e3a5f] text-white focus:ring-[#5b9bd5]"
                  />
                  Saya setuju dengan kebijakan privasi
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-sm font-medium text-white transition-opacity hover:opacity-70 disabled:opacity-50"
                >
                  {isSubmitting ? "Mengirim..." : "Kirim"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
