import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tanmay Kulkarni | Senior Software Engineer",
  description: "Portfolio of Tanmay Kulkarni.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plexSans.variable}`}>
      <body>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
        <header className="site-header">
          <nav className="nav-inner" aria-label="Primary navigation">
            <Link className="brand" href="/">Tanmay Kulkarni</Link>
            <input type="checkbox" id="nav-toggle" className="nav-toggle-checkbox" />
            <label htmlFor="nav-toggle" className="nav-toggle-label" aria-label="Toggle navigation">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </label>
            <div className="nav-links">
              <Link href="/#about">About</Link>
              <Link href="/#experience">Experience</Link>
              <Link href="/#projects">Projects</Link>
              <Link href="/#skills">Skills</Link>
              <Link href="/#contact">Contact</Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="site-footer">© 2026 Tanmay Kulkarni. All rights reserved.</footer>
      </body>
    </html>
  );
}
