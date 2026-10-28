import React from "react";
import { RESUME_DATA } from "@/data/resume-data";

export function SkillsMatrix() {
  return (
    <section id="skills" className="border-b border-grid-border">
      {/* Section Header */}
      <div className="px-8 sm:px-12 py-5 border-b border-grid-border flex items-center justify-between">
        <h2 className="text-sm font-mono font-bold text-text-primary uppercase tracking-wider">
          capabilities/
        </h2>
        <span className="text-xs font-mono text-text-muted">
          skills & tooling
        </span>
      </div>

      {/* Simplified 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-grid-border">
        {RESUME_DATA.skills.map((cat, idx) => (
          <div
            key={cat.category}
            className={`p-8 sm:p-10 ${
              idx >= 2 ? "border-t border-grid-border" : ""
            } hover:bg-surface/20 transition-colors`}
          >
            <h3 className="text-xs font-mono font-bold text-accent-green uppercase tracking-wider mb-3">
              {cat.category}
            </h3>
            <p className="text-sm font-mono text-text-primary leading-loose">
              {cat.skills.map((s) => s.name).join(" • ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
