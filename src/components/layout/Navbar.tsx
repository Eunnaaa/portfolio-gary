"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RESUME_DATA } from "@/data/resume-data";
import { Download, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-canvas/95 backdrop-blur-sm border-b border-grid-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link
            href="/"
            className="text-sm font-mono font-medium text-text-primary hover:text-accent-green transition-colors"
          >
            <span className="text-accent-green font-bold mr-1.5">/</span>
            <span>Gary Hardyansyah</span>
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-xs font-mono">
            <Link
              href="#about"
              className="text-text-muted hover:text-text-primary transition-colors"
            >
              about/
            </Link>
            <Link
              href="#experience"
              className="text-text-muted hover:text-text-primary transition-colors"
            >
              experience/
            </Link>
            <Link
              href="#projects"
              className="text-text-muted hover:text-text-primary transition-colors"
            >
              projects/
            </Link>
            <Link
              href="#skills"
              className="text-text-muted hover:text-text-primary transition-colors"
            >
              skills/
            </Link>
            <Link
              href="#contact"
              className="text-accent-green font-semibold hover:underline transition-all"
            >
              contact/
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-2.5">
            <ThemeToggle />
            <a
              href={RESUME_DATA.contact.cvDownloadUrl}
              download="CV_Gary_Hardyansyah.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono bg-surface hover:bg-surface-hover text-text-primary border border-grid-border transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-accent-green" />
              <span>Resume</span>
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded text-text-muted hover:text-text-primary border border-grid-border bg-surface"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-grid-border bg-canvas px-6 py-4 space-y-3 font-mono text-xs">
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-text-muted hover:text-text-primary"
          >
            about/
          </Link>
          <Link
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-text-muted hover:text-text-primary"
          >
            experience/
          </Link>
          <Link
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-text-muted hover:text-text-primary"
          >
            projects/
          </Link>
          <Link
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-text-muted hover:text-text-primary"
          >
            skills/
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 text-accent-green font-semibold"
          >
            contact/
          </Link>
          <div className="pt-2 border-t border-grid-border">
            <a
              href={RESUME_DATA.contact.cvDownloadUrl}
              download="CV_Gary_Hardyansyah.pdf"
              className="inline-flex items-center gap-1.5 py-1 text-text-primary"
            >
              <Download className="w-3.5 h-3.5 text-accent-green" />
              <span>Download Resume (.pdf)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
