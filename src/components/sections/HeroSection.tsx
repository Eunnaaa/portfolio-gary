"use client";

import React, { useState } from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { Download, ArrowRight, Check, Copy } from "lucide-react";

export function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="border-b border-grid-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
        {/* Left Column: Greeting & Identity (7 cols) */}
        <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-grid-border">
          {/* Top Metadata */}
          <div className="text-xs font-mono text-text-muted">
            October 2026 / Jakarta, ID
          </div>

          {/* Main Hero Slogan */}
          <div className="my-8 sm:my-12">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-text-primary">
              hi-<span className="text-accent-green">{RESUME_DATA.shortGreeting}</span>
            </h1>
            <p className="mt-3 text-lg font-mono text-text-muted">
              junior-fullstack-developer<span className="text-accent-green">/</span>
            </p>
          </div>

          {/* Clean Primary Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-mono font-medium bg-text-primary hover:bg-accent-green text-white transition-colors"
            >
              <span>Hubungi Gary</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={RESUME_DATA.contact.cvDownloadUrl}
              download="CV_Gary_Hardyansyah.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded text-xs font-mono font-medium bg-surface hover:bg-surface-hover text-text-primary border border-grid-border transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-accent-green" />
              <span>Download CV (.pdf)</span>
            </a>
          </div>
        </div>

        {/* Right Column: Editorial Summary (5 cols) */}
        <div className="lg:col-span-5 p-8 sm:p-12 lg:p-16 flex flex-col justify-between bg-surface/20">
          {/* Top Tag */}
          <div className="text-xs font-mono text-text-muted">
            overview/
          </div>

          {/* Paragraphs */}
          <div className="space-y-4 my-auto py-6">
            <p className="text-lg sm:text-xl font-medium tracking-tight text-text-primary leading-snug">
              Mahasiswa Informatika semester 5 di Universitas Nusa Mandiri dengan fondasi kuat dari Rekayasa Perangkat Lunak (RPL).
            </p>
            <p className="text-sm text-text-muted leading-relaxed font-sans">
              Fokus merancang arsitektur server-side yang andal, RESTful API, dan web modern dengan Next.js & Laravel. Berpengalaman sebagai instruktur coding di SMK dan backend developer kompetisi nasional.
            </p>
          </div>

          {/* Clean Direct Email */}
          <div className="pt-6 border-t border-grid-border flex items-center justify-between text-xs font-mono">
            <span className="text-text-muted">Email:</span>
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 text-text-primary hover:text-accent-green transition-colors"
              title="Klik untuk menyalin email"
            >
              <span className="underline underline-offset-4 decoration-grid-border">
                {RESUME_DATA.contact.email}
              </span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-accent-green" />
              ) : (
                <Copy className="w-3 h-3 text-text-muted" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
