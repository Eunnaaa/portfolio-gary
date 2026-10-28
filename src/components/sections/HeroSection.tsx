"use client";

import React, { useState } from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { Download, Mail, Check, ArrowRight, Terminal } from "lucide-react";

export function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="relative border-b border-grid-border">
      {/* 2-Column Bento Grid Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
        {/* Left Column: Greeting, Role, Actions (7 cols on lg) */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-grid-border">
          {/* Metadata Eyebrow */}
          <div className="flex items-center gap-2 text-xs font-mono text-text-muted mb-8 sm:mb-12">
            <Terminal className="w-3.5 h-3.5 text-accent-green" />
            <span>developer-profile.init(GaryHardyansyah)</span>
            <span className="text-grid-border-dark">/</span>
            <span>RPL Alum</span>
          </div>

          {/* Main Dual-Tone Headline */}
          <div className="my-auto py-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-text-primary leading-[1.08]">
              hi-<span className="text-accent-green">{RESUME_DATA.shortGreeting}</span>
            </h1>
            <p className="mt-3 text-lg sm:text-xl font-mono text-text-muted font-medium">
              junior-fullstack-developer<span className="text-accent-green">/</span>
            </p>
            <p className="mt-2 text-sm text-text-muted font-mono">
              Universitas Nusa Mandiri • S1 Informatika (Sem 5)
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pt-8 sm:pt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-mono font-medium bg-text-primary hover:bg-accent-green text-white transition-all shadow-sm"
            >
              <span>Hubungi Gary</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={RESUME_DATA.contact.cvDownloadUrl}
              download="CV_Gary_Hardyansyah.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded text-sm font-mono font-medium bg-surface hover:bg-surface-hover text-text-primary border border-grid-border transition-colors"
            >
              <Download className="w-4 h-4 text-accent-green" />
              <span>Download CV (.pdf)</span>
            </a>
          </div>
        </div>

        {/* Right Column: Editorial Value Proposition & Quick Copy (5 cols on lg) */}
        <div className="lg:col-span-5 p-6 sm:p-10 lg:p-14 flex flex-col justify-between bg-surface/40">
          {/* Top Label */}
          <div className="flex items-center justify-between text-xs font-mono text-text-muted mb-6">
            <span>statement/</span>
            <span className="px-2 py-0.5 rounded bg-surface border border-grid-border text-[11px]">
              Fullstack & Cloud
            </span>
          </div>

          {/* Editorial Paragraphs */}
          <div className="space-y-4 my-auto">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-text-primary leading-snug">
              Membangun arsitektur server-side yang andal, antarmuka web modern, dan membimbing generasi developer masa depan.
            </h2>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed font-sans">
              {RESUME_DATA.bio.summary}
            </p>
            <p className="text-sm text-text-muted/90 leading-relaxed font-sans">
              {RESUME_DATA.bio.subtext}
            </p>
          </div>

          {/* Quick Copy Email Widget */}
          <div className="pt-8 mt-6 border-t border-grid-border">
            <div className="flex items-center justify-between p-3 rounded bg-surface border border-grid-border">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <Mail className="w-4 h-4 text-accent-green shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-text-primary truncate">
                  {RESUME_DATA.contact.email}
                </span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="ml-2 px-2.5 py-1 rounded text-xs font-mono bg-canvas hover:bg-white text-text-primary border border-grid-border transition-colors flex items-center gap-1.5 shrink-0"
                title="Salin alamat email"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-accent-green" />
                    <span className="text-accent-green font-medium">Copied!</span>
                  </>
                ) : (
                  <span>Salin</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
