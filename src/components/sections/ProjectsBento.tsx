import React from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { ArrowUpRight } from "lucide-react";

export function ProjectsBento() {
  return (
    <section id="projects" className="border-b border-grid-border">
      {/* Section Header */}
      <div className="px-6 sm:px-10 py-4 sm:py-5 border-b border-grid-border flex items-center justify-between">
        <h2 className="text-xs sm:text-sm font-mono font-bold text-text-primary uppercase tracking-wider">
          selected-projects
        </h2>
        <span className="text-[11px] sm:text-xs font-mono text-text-muted">
          engineering & architecture
        </span>
      </div>

      {/* Grid: 1 col on mobile/tablet, 3 cols on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-grid-border">
        {RESUME_DATA.projects.map((project) => (
          <div
            key={project.id}
            className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between hover:bg-surface/20 transition-colors"
          >
            <div>
              {/* Category */}
              <div className="text-xs font-mono text-accent-green font-medium mb-2.5">
                {project.category}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-text-primary tracking-tight mb-2.5">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-sans mb-5 sm:mb-6">
                {project.description}
              </p>
            </div>

            {/* Footer: Simple Tech & Link */}
            <div className="pt-5 border-t border-grid-border space-y-3">
              <div className="text-xs font-mono text-text-muted leading-relaxed">
                <span className="text-text-primary font-medium">Stack: </span>
                {project.tags.join(" • ")}
              </div>

              <div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-text-primary hover:text-accent-green transition-colors"
                >
                  <span>project-details/</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent-green" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
