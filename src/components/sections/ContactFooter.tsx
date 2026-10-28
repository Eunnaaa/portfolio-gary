"use client";

import React, { useState } from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { Badge } from "@/components/ui/Badge";
import {
  Mail,
  Phone,
  MessageSquare,
  Download,
  Github,
  Linkedin,
  ArrowUpRight,
  Check,
  Terminal,
} from "lucide-react";

export function ContactFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="relative bg-canvas">
      {/* 2-Column Grid (Mirrors the pre-show/ layout in screenshot) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-grid-border border-b border-grid-border">
        {/* Left Column: Exactly mirroring the pre-show/ section */}
        <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
          <div>
            {/* Timestamp & Badge (Like '8:55 - 9:00 AM PT' and '• Starting soon') */}
            <div className="flex items-center justify-between gap-3 mb-8">
              <span className="text-xs font-mono text-text-muted">
                {RESUME_DATA.timezone} • Direct Channel
              </span>
              <Badge variant="yellow" dot>
                Ready to Collaborate
              </Badge>
            </div>

            {/* Big Headline with trailing slash (like 'pre-show/') */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary mb-6">
              get-in-touch<span className="text-accent-green">/</span>
            </h2>

            <p className="text-sm sm:text-base text-text-muted leading-relaxed font-sans mb-8 max-w-lg">
              Saya selalu terbuka untuk berdiskusi seputar peluang kerja, proyek freelance web & backend, maupun kolaborasi pengembangan software.
            </p>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-grid-border">
            <a
              href={RESUME_DATA.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-mono font-medium bg-accent-green hover:bg-accent-green-hover text-white transition-all shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Gary</span>
              <ArrowUpRight className="w-4 h-4" />
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

        {/* Right Column: Contact Cards & Channels */}
        <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between bg-surface/30">
          <div>
            <div className="text-xs font-mono text-text-muted mb-6">
              channels/
            </div>

            <div className="space-y-3.5 mb-8">
              {/* Email Card with Copy Button */}
              <div className="p-4 rounded bg-surface border border-grid-border flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded bg-canvas border border-grid-border text-accent-green">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] font-mono text-text-muted uppercase">
                      Email Address
                    </div>
                    <div className="text-xs sm:text-sm font-mono font-medium text-text-primary truncate">
                      {RESUME_DATA.contact.email}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyEmail}
                    className="px-2.5 py-1.5 rounded text-xs font-mono bg-canvas hover:bg-white text-text-primary border border-grid-border transition-colors flex items-center gap-1.5"
                    title="Copy Email"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-accent-green" />
                        <span className="text-accent-green font-medium">Copied</span>
                      </>
                    ) : (
                      <span>Copy</span>
                    )}
                  </button>
                  <a
                    href={`mailto:${RESUME_DATA.contact.email}`}
                    className="p-1.5 rounded text-text-muted hover:text-text-primary hover:bg-canvas transition-colors"
                    title="Buka Email Client"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Phone / WhatsApp Card */}
              <div className="p-4 rounded bg-surface border border-grid-border flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-canvas border border-grid-border text-accent-green">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-text-muted uppercase">
                      Phone & WhatsApp
                    </div>
                    <div className="text-xs sm:text-sm font-mono font-medium text-text-primary">
                      {RESUME_DATA.contact.phone}
                    </div>
                  </div>
                </div>

                <a
                  href={RESUME_DATA.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded text-xs font-mono bg-canvas hover:bg-white text-text-primary border border-grid-border transition-colors flex items-center gap-1.5"
                >
                  <span>Chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent-green" />
                </a>
              </div>
            </div>
          </div>

          {/* Social Profiles & Developer Note */}
          <div className="pt-6 border-t border-grid-border flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={RESUME_DATA.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-surface hover:bg-surface-hover text-text-primary border border-grid-border transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github/</span>
              </a>
              <a
                href={RESUME_DATA.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-surface hover:bg-surface-hover text-text-primary border border-grid-border transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-accent-green" />
                <span>linkedin/</span>
              </a>
            </div>

            <div className="text-xs font-mono text-text-muted flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-accent-green" />
              <span>Response SLA: &lt; 24h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Tech Stack Credits */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-text-muted">
        <div>
          © {new Date().getFullYear()} Gary Hardyansyah. All rights reserved.
        </div>
        <div className="flex items-center gap-2">
          <span>Engineered with Next.js 14 + Tailwind CSS</span>
          <span className="text-grid-border-dark">•</span>
          <span className="text-accent-green">Neo-Technical Editorial</span>
        </div>
      </div>
    </footer>
  );
}
