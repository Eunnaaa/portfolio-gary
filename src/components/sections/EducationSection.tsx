import React from "react";
import { RESUME_DATA } from "@/data/resume-data";

export function EducationSection() {
  return (
    <section className="border-b border-grid-border">
      {/* Section Header */}
      <div className="px-8 sm:px-12 py-5 border-b border-grid-border flex items-center justify-between">
        <h2 className="text-sm font-mono font-bold text-text-primary uppercase tracking-wider">
          education/
        </h2>
        <span className="text-xs font-mono text-text-muted">
          academic & vocational
        </span>
      </div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-grid-border">
        {RESUME_DATA.education.map((edu, idx) => (
          <div
            key={idx}
            className="p-8 sm:p-10 hover:bg-surface/20 transition-colors flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-mono text-accent-green font-semibold block mb-1">
                {edu.period}
              </span>
              <h3 className="text-xl font-bold text-text-primary tracking-tight mb-1">
                {edu.degree}
              </h3>
              <p className="text-sm font-mono text-text-muted mb-3">
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
