"use client";

import React from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { ArrowUpRight, Download, MessageSquare } from "lucide-react";

export function ContactFooter() {
  return (
    <footer id="contact" className="bg-canvas">
      {/* 2-Column Grid (Mirroring pre-show/ layout in reference screenshot) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-grid-border border-b border-grid-border">
        {/* Left Column */}
        <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
          <div>
            {/* Top metadata */}
            <div className="text-xs font-mono text-text-muted mb-8">
              {RESUME_DATA.location}
            </div>

            {/* Big Headline with trailing slash */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary mb-4">
              get-in-touch<span className="text-accent-green">/</span>
            </h2>

            <p className="text-sm sm:text-base text-text-muted leading-relaxed font-sans max-w-md">
              Terbuka untuk peluang magang, posisi fullstack developer, dan pengerjaan proyek sistem web.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-8 mt-6 border-t border-grid-border">
            <a
              href={RESUME_DATA.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-mono font-medium bg-accent-green hover:bg-accent-green-hover text-white transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Gary</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href={RESUME_DATA.contact.cvDownloadUrl}
              download="CV_Gary_Hardyansyah.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded text-xs font-mono font-medium bg-surface hover:bg-surface-hover text-text-primary border border-grid-border transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-accent-green" />
              <span>Resume (.pdf)</span>
            </a>
          </div>
        </div>

        {/* Right Column: Direct Channels */}
        <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-between bg-surface/20">
          <div>
            <div className="text-xs font-mono text-text-muted mb-6">
              direct-channels/
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono text-text-muted block mb-1">
                  Email:
                </span>
                <a
                  href={`mailto:${RESUME_DATA.contact.email}`}
                  className="text-base sm:text-lg font-mono font-medium text-text-primary hover:text-accent-green underline underline-offset-4 decoration-grid-border transition-colors"
                >
                  {RESUME_DATA.contact.email}
                </a>
              </div>

              <div>
                <span className="text-xs font-mono text-text-muted block mb-1">
                  WhatsApp & Phone:
                </span>
                <a
                  href={RESUME_DATA.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-mono font-medium text-text-primary hover:text-accent-green underline underline-offset-4 decoration-grid-border transition-colors"
                >
                  {RESUME_DATA.contact.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="pt-8 mt-6 border-t border-grid-border flex items-center gap-6 text-xs font-mono">
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
      <div className="max-w-6xl mx-auto px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-text-muted">
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
