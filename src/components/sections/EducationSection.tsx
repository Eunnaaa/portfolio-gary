import React from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";

export function EducationSection() {
  return (
    <section className="border-b border-grid-border">
      {/* Section Header */}
      <div className="px-6 sm:px-10 py-5 border-b border-grid-border flex items-center justify-between bg-surface/50">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-accent-green" />
          <h2 className="text-base sm:text-lg font-mono font-bold text-text-primary tracking-tight">
            education-journey/
          </h2>
        </div>
        <span className="text-xs font-mono text-text-muted">
          academic & vocational background
        </span>
      </div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-grid-border">
        {RESUME_DATA.education.map((edu, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 hover:bg-surface/30 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono text-accent-green font-semibold">
                  {edu.period}
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-surface border border-grid-border text-text-muted">
                  {edu.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-text-primary tracking-tight mb-1">
                {edu.degree}
              </h3>

              <p className="text-sm font-mono text-text-primary/90 font-medium mb-3">
                {edu.institution}
              </p>

              <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-sans">
                {edu.notes}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-grid-border flex items-center gap-2 text-xs font-mono text-text-muted">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent-green" />
              <span>Verified Institution Profile</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
