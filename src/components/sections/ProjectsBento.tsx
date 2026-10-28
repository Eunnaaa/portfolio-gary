import React from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { Badge } from "@/components/ui/Badge";
import { FolderGit2, ArrowUpRight, Database, Server, Layers } from "lucide-react";

export function ProjectsBento() {
  return (
    <section id="projects" className="border-b border-grid-border">
      {/* Section Header */}
      <div className="px-6 sm:px-10 py-5 border-b border-grid-border flex items-center justify-between bg-surface/50">
        <div className="flex items-center gap-2">
          <FolderGit2 className="w-4 h-4 text-accent-green" />
          <h2 className="text-base sm:text-lg font-mono font-bold text-text-primary tracking-tight">
            selected-projects/
          </h2>
        </div>
        <span className="text-xs font-mono text-text-muted">
          architecture & engineering case-studies
        </span>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-grid-border">
        {RESUME_DATA.projects.map((project, idx) => (
          <div
            key={project.id}
            className="p-6 sm:p-8 flex flex-col justify-between hover:bg-surface/30 transition-colors group"
          >
            {/* Card Header & Status */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-mono text-text-muted flex items-center gap-1.5">
                  {idx === 0 && <Server className="w-3.5 h-3.5 text-accent-green" />}
                  {idx === 1 && <Layers className="w-3.5 h-3.5 text-accent-green" />}
                  {idx === 2 && <Database className="w-3.5 h-3.5 text-accent-green" />}
                  <span>{project.category}</span>
                </span>

                <Badge
                  variant={project.statusType === "competition" ? "yellow" : "green"}
                  dot
                >
                  {project.status}
                </Badge>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-text-primary tracking-tight mb-3 group-hover:text-accent-green transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-text-muted leading-relaxed font-sans mb-6">
                {project.description}
              </p>

              {/* Architecture Highlights */}
              <div className="space-y-2 mb-6 p-3.5 rounded bg-surface/60 border border-grid-border">
                <div className="text-[11px] font-mono text-text-primary font-semibold uppercase tracking-wider mb-2">
                  Key Deliverables:
                </div>
                {project.architecturePoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 text-xs text-text-muted">
                    <span className="font-mono text-accent-green font-bold shrink-0">
                      •
                    </span>
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card Footer: Tags & Action Links */}
            <div className="pt-4 border-t border-grid-border space-y-4">
              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 text-[11px] font-mono rounded bg-surface text-text-muted border border-grid-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              {project.links && (
                <div className="flex items-center gap-3 pt-2">
                  {project.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.href}
                      className="inline-flex items-center gap-1 text-xs font-mono font-medium text-text-primary hover:text-accent-green transition-colors"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3 h-3 text-accent-green" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
