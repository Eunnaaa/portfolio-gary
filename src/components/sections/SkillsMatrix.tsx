import React from "react";
import { RESUME_DATA } from "@/data/resume-data";

export function SkillsMatrix() {
  return (
    <section id="skills" className="border-b border-grid-border">
      {/* Section Header */}
      <div className="px-6 sm:px-10 py-4 sm:py-5 border-b border-grid-border flex items-center justify-between">
        <h2 className="text-xs sm:text-sm font-mono font-bold text-text-primary uppercase tracking-wider">
          capabilities
        </h2>
        <span className="text-[11px] sm:text-xs font-mono text-text-muted">
          skills & tooling
        </span>
      </div>

      {/* Responsive 2x2 Grid: 1 col on mobile, 2 cols on sm/tablet/desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 divide-grid-border">
        {RESUME_DATA.skills.map((cat, idx) => (
          <div
            key={cat.category}
            className={`p-6 sm:p-8 lg:p-10 ${
              idx % 2 === 1 ? "sm:border-l sm:border-grid-border" : ""
            } ${
              idx >= 2 ? "sm:border-t sm:border-grid-border" : ""
            } hover:bg-surface/20 transition-colors`}
          >
            <h3 className="text-xs font-mono font-bold text-accent-green uppercase tracking-wider mb-2.5">
              {cat.category}
            </h3>
            <p className="text-xs sm:text-sm font-mono text-text-primary leading-loose">
              {cat.skills.map((s) => s.name).join(" • ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
