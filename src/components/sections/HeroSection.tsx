import React from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { Download, ArrowRight } from "lucide-react";
import { RoleRotator } from "@/components/ui/RoleRotator";

export function HeroSection() {
  return (
    <section id="about" className="border-b border-grid-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[400px]">
        {/* Left Column: Greeting & Identity (7 cols on lg) */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-grid-border">
          {/* Top Metadata */}
          <div className="text-xs font-mono text-text-muted">
            October 2026 / {RESUME_DATA.location}
          </div>

          {/* Main Hero Slogan */}
          <div className="my-6 sm:my-10 lg:my-12">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-text-primary">
              {RESUME_DATA.name}
            </h1>
            <RoleRotator />
          </div>

          {/* Clean Primary Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded text-xs font-mono font-medium bg-text-primary hover:bg-accent-green text-white transition-colors"
            >
              <span>Hubungi Gary</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={RESUME_DATA.contact.cvDownloadUrl}
              download="CV_Gary_Hardyansyah.pdf"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 rounded text-xs font-mono font-medium bg-surface hover:bg-surface-hover text-text-primary border border-grid-border transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-accent-green" />
              <span>Download CV (.pdf)</span>
            </a>
          </div>
        </div>

        {/* Right Column: Editorial Summary (5 cols on lg) */}
        <div className="lg:col-span-5 p-6 sm:p-10 lg:p-14 flex flex-col justify-between bg-surface/20">
          {/* Top Tag */}
          <div className="text-xs font-mono text-text-muted">
            overview/
          </div>

          {/* Paragraphs */}
          <div className="space-y-4 my-auto py-6 sm:py-8">
            <p className="text-base sm:text-lg lg:text-xl font-medium tracking-tight text-text-primary leading-snug">
              Mahasiswa Informatika semester 5 di Universitas Nusa Mandiri dengan fondasi kuat dari Rekayasa Perangkat Lunak (RPL).
            </p>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-sans">
              {RESUME_DATA.bio.subtext}
            </p>
          </div>

          {/* Empty spacer to balance bottom border alignment with left column */}
          <div className="hidden lg:block h-8" />
        </div>
      </div>
    </section>
  );
}
