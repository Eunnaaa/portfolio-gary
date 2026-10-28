"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { RESUME_DATA } from "@/data/resume-data";
import { Github, Linkedin, Download, Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-canvas/90 backdrop-blur-md border-b border-grid-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Left Metadata / Brand */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-sm font-mono font-medium text-text-primary hover:text-accent-green transition-colors flex items-center gap-1.5"
            >
              <span className="font-bold text-accent-green">/</span>
              <span className="font-semibold tracking-tight">gary-hardyansyah</span>
            </Link>
            <span className="hidden lg:inline text-grid-border-dark font-mono text-xs">/</span>
            <span className="hidden lg:inline font-mono text-xs text-text-muted">
              {RESUME_DATA.location} • {RESUME_DATA.timezone}
            </span>
          </div>

          {/* Center Status Badge (Desktop) */}
          <div className="hidden md:flex items-center">
            <Link href="#contact" className="hover:opacity-90 transition-opacity">
              <Badge variant="yellow" dot>
                {RESUME_DATA.availability.status}
              </Badge>
            </Link>
          </div>

          {/* Right Navigation & Socials (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-5 text-xs font-mono">
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
                className="text-text-muted hover:text-accent-green font-semibold transition-colors"
              >
                contact/
              </Link>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 pl-4 border-l border-grid-border">
              <a
                href={RESUME_DATA.contact.cvDownloadUrl}
                download="CV_Gary_Hardyansyah.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono font-medium bg-surface hover:bg-surface-hover text-text-primary border border-grid-border transition-colors"
                title="Download CV Gary Hardyansyah"
              >
                <Download className="w-3.5 h-3.5 text-accent-green" />
                <span>CV.pdf</span>
              </a>
              <a
                href={RESUME_DATA.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded text-xs font-mono font-medium bg-accent-green hover:bg-accent-green-hover text-white transition-colors"
              >
                <span>Hire</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Badge variant="yellow" dot className="text-[10px] px-2 py-0.5">
              Available
            </Badge>
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-grid-border bg-canvas px-4 pt-3 pb-5 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-mono">
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 text-text-muted hover:text-text-primary rounded hover:bg-surface"
            >
              about/
            </Link>
            <Link
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 text-text-muted hover:text-text-primary rounded hover:bg-surface"
            >
              experience/
            </Link>
            <Link
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 text-text-muted hover:text-text-primary rounded hover:bg-surface"
            >
              projects/
            </Link>
            <Link
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 text-text-muted hover:text-text-primary rounded hover:bg-surface"
            >
              skills/
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 text-accent-green font-semibold rounded hover:bg-surface"
            >
              contact/
            </Link>
          </div>
          <div className="pt-3 border-t border-grid-border flex gap-2">
            <a
              href={RESUME_DATA.contact.cvDownloadUrl}
              download="CV_Gary_Hardyansyah.pdf"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-mono font-medium bg-surface text-text-primary border border-grid-border rounded"
            >
              <Download className="w-3.5 h-3.5 text-accent-green" />
              <span>Download CV</span>
            </a>
            <a
              href={RESUME_DATA.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-mono font-medium bg-accent-green text-white rounded"
            >
              <span>Chat WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
