import React from "react";
import { RESUME_DATA } from "@/data/resume-data";

export function EducationSection() {
  return (
    <section className="border-b border-grid-border">
      {/* Section Header */}
      <div className="px-6 sm:px-10 py-4 sm:py-5 border-b border-grid-border flex items-center justify-between">
        <h2 className="text-xs sm:text-sm font-mono font-bold text-text-primary uppercase tracking-wider">
          education/
        </h2>
        <span className="text-[11px] sm:text-xs font-mono text-text-muted">
          academic & vocational
        </span>
      </div>

      {/* 2-Column Grid on sm+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-grid-border">
        {RESUME_DATA.education.map((edu, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 lg:p-10 hover:bg-surface/20 transition-colors flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-mono text-accent-green font-semibold block mb-1">
                {edu.period}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-text-primary tracking-tight mb-1">
                {edu.degree}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-text-muted mb-2.5">
                {edu.institution} • {edu.status}
              </p>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-sans">
                {edu.notes}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
