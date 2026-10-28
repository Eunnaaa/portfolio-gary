import React from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { Badge } from "@/components/ui/Badge";
import { GitCommit, Briefcase, MapPin, Calendar } from "lucide-react";

export function ExperienceLog() {
  return (
    <section id="experience" className="border-b border-grid-border">
      {/* Section Header */}
      <div className="px-6 sm:px-10 py-5 border-b border-grid-border flex items-center justify-between bg-surface/50">
        <div className="flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-accent-green" />
          <h2 className="text-base sm:text-lg font-mono font-bold text-text-primary tracking-tight">
            experience/
          </h2>
        </div>
        <span className="text-xs font-mono text-text-muted">
          work-history & mentorship
        </span>
      </div>

      {/* Experience Timeline Rows */}
      <div className="divide-y divide-grid-border">
        {RESUME_DATA.experiences.map((exp, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 lg:grid-cols-12 hover:bg-surface/30 transition-colors"
          >
            {/* Left Metadata Column (4 cols) */}
            <div className="lg:col-span-4 p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-grid-border flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant={idx === 0 ? "yellow" : "neutral"} dot={idx === 0}>
                    {exp.badge || "Career"}
                  </Badge>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-text-muted mb-1.5">
                  <Calendar className="w-3.5 h-3.5 text-accent-green" />
                  <span>{exp.period}</span>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{exp.location}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-grid-border hidden lg:block">
                <span className="text-[11px] font-mono text-text-muted">
                  commit #{idx + 1} • verified
                </span>
              </div>
            </div>

            {/* Right Details Column (8 cols) */}
            <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10">
              <div className="flex items-baseline justify-between flex-wrap gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
                  {exp.role}
                </h3>
              </div>

              <p className="text-sm sm:text-base font-mono font-medium text-accent-green mb-4">
                @{exp.institution}
              </p>

              <p className="text-sm text-text-muted leading-relaxed mb-6 font-sans">
                {exp.description}
              </p>

              {/* Highlights List */}
              <div className="space-y-2.5 mb-6">
                {exp.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-primary/90">
                    <span className="font-mono text-accent-green font-bold shrink-0 mt-0.5">
                      →
                    </span>
                    <span className="leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-grid-border">
                {exp.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 text-xs font-mono rounded bg-surface border border-grid-border text-text-muted"
                  >
                    [{tag}]
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
