"use client";

import React, { useState } from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { ArrowUpRight, Download, MessageSquare, Copy, Check } from "lucide-react";

export function ContactFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="bg-canvas">
      {/* Section Header */}
      <div className="px-6 sm:px-10 py-4 sm:py-5 border-b border-grid-border flex items-center justify-between">
        <h2 className="text-xs sm:text-sm font-mono font-bold text-text-primary uppercase tracking-wider">
          contact
        </h2>
        <span className="text-[11px] sm:text-xs font-mono text-text-muted">
          inquiries & collaboration
        </span>
      </div>

      {/* 2-Column Grid (Mirrors section#about 7:5 ratio exactly) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[400px] border-b border-grid-border">
        {/* Left Column: 7 cols on lg */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-grid-border">
          {/* Top Metadata */}
          <div className="text-xs font-mono text-text-muted">
            {RESUME_DATA.location}
          </div>

          {/* Main Title & Description */}
          <div className="my-6 sm:my-10 lg:my-12">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-text-primary">
              get-in-touch
            </h2>
            <p className="mt-3 text-sm sm:text-base text-text-muted leading-relaxed font-sans max-w-lg">
              Terbuka untuk peluang magang, posisi Junior Software Engineer, dan pengerjaan proyek sistem web.
            </p>
          </div>

          {/* Action Buttons (Mirrors the button pair in section#about) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={RESUME_DATA.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded text-xs font-mono font-medium bg-text-primary hover:bg-accent-green text-canvas hover:text-white transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Gary</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={RESUME_DATA.contact.cvDownloadUrl}
              download="CV_Gary_Hardyansyah.pdf"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 rounded text-xs font-mono font-medium bg-surface hover:bg-surface-hover text-text-primary border border-grid-border transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-accent-green" />
              <span>Resume (.pdf)</span>
            </a>
          </div>
        </div>

        {/* Right Column: 5 cols on lg (Mirrors overview column in section#about) */}
        <div className="lg:col-span-5 p-6 sm:p-10 lg:p-14 flex flex-col justify-between bg-surface/20">
          {/* Top Tag */}
          <div className="text-xs font-mono text-text-muted">
            direct-channels/
          </div>

          {/* Channels Information */}
          <div className="space-y-5 my-auto py-5 sm:py-6">
            <div>
              <span className="text-xs font-mono text-text-muted block mb-1">
                Email:
              </span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${RESUME_DATA.contact.email}`}
                  className="text-base sm:text-lg font-mono font-medium text-text-primary hover:text-accent-green underline underline-offset-4 decoration-grid-border transition-colors truncate"
                >
                  {RESUME_DATA.contact.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1 rounded text-text-muted hover:text-text-primary transition-colors shrink-0"
                  title="Copy email"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-accent-green" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <span className="text-xs font-mono text-text-muted block mb-1">
                WhatsApp & Phone:
              </span>
              <a
                href={RESUME_DATA.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-mono font-medium text-text-primary hover:text-accent-green underline underline-offset-4 decoration-grid-border transition-colors block"
              >
                {RESUME_DATA.contact.phone}
              </a>
            </div>
          </div>

          {/* Social Profiles (Mirrors bottom row in section#about) */}
          <div className="pt-4 sm:pt-6 border-t border-grid-border flex items-center justify-between text-xs font-mono">
            <a
              href={RESUME_DATA.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary hover:text-accent-green transition-colors inline-flex items-center gap-1"
            >
              <span>github/</span>
              <ArrowUpRight className="w-3 h-3 text-accent-green" />
            </a>

            <a
              href={RESUME_DATA.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary hover:text-accent-green transition-colors inline-flex items-center gap-1"
            >
              <span>linkedin/</span>
              <ArrowUpRight className="w-3 h-3 text-accent-green" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Line */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[11px] sm:text-xs font-mono text-text-muted">
        <div>
          © {new Date().getFullYear()} Gary Hardyansyah
        </div>
        <div>
          Next.js 14 • Neo-Technical Editorial
        </div>
      </div>
    </footer>
  );
}
