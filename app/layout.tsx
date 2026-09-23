import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanmay Kulkarni | Senior Software Engineer",
  description: "Portfolio of Tanmay Kulkarni.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav className="nav-inner" aria-label="Primary navigation">
            <Link className="brand" href="/">Tanmay Kulkarni</Link>
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
