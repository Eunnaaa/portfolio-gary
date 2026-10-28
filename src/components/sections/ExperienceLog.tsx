import React from "react";
import { RESUME_DATA } from "@/data/resume-data";

export function ExperienceLog() {
  return (
    <section id="experience" className="border-b border-grid-border">
      {/* Clean Section Header */}
      <div className="px-8 sm:px-12 py-5 border-b border-grid-border flex items-center justify-between">
        <h2 className="text-sm font-mono font-bold text-text-primary uppercase tracking-wider">
          experience/
        </h2>
        <span className="text-xs font-mono text-text-muted">
          work & mentorship
        </span>
      </div>

      {/* Experience Rows */}
      <div className="divide-y divide-grid-border">
        {RESUME_DATA.experiences.map((exp, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 lg:grid-cols-12 p-8 sm:p-12 hover:bg-surface/20 transition-colors gap-6"
          >
            {/* Left Column: Period & Institution (4 cols) */}
            <div className="lg:col-span-4">
              <span className="text-xs font-mono text-accent-green font-semibold block mb-1">
                {exp.period}
              </span>
              <h3 className="text-base font-bold text-text-primary tracking-tight">
                {exp.institution}
              </h3>
              <span className="text-xs font-mono text-text-muted block mt-0.5">
                {exp.location}
              </span>
            </div>

            {/* Right Column: Role, Description & Focus (8 cols) */}
            <div className="lg:col-span-8 space-y-3">
              <h4 className="text-lg font-bold text-text-primary tracking-tight">
                {exp.role}
              </h4>
              <p className="text-sm text-text-muted leading-relaxed font-sans">
                {exp.description}
              </p>
              <div className="pt-2 text-xs font-mono text-text-muted flex flex-wrap gap-2">
                <span>Focus:</span>
                <span className="text-text-primary font-medium">
                  {exp.tags.join(" • ")}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
