 import type { Metadata } from "next";
  import { Inter, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GSAPInit from "@/components/GSAPInit";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const caveat = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Andika Firmansyah Nugraha — Full-Stack Developer",
  description:
    "Portofolio Andika Firmansyah Nugraha, Full-Stack Developer & UI/UX Enthusiast. Membangun website modern, responsif, dan berperforma tinggi.",
  keywords: [
    "portfolio",
    "developer",
    "full-stack",
    "react",
    "next.js",
    "web developer indonesia",
  ],
  authors: [{ name: "Andika Firmansyah Nugraha" }],
  openGraph: {
    title: "Andika Firmansyah Nugraha — Full-Stack Developer",
    description:
      "Portofolio Andika Firmansyah Nugraha, Full-Stack Developer & UI/UX Enthusiast.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andika Firmansyah Nugraha — Full-Stack Developer",
    description:
      "Portofolio Andika Firmansyah Nugraha, Full-Stack Developer & UI/UX Enthusiast.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${caveat.variable} font-sans bg-background text-foreground antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <GSAPInit />
        </ThemeProvider>
      </body>
    </html>
  );
}
