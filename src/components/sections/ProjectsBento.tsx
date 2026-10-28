import React from "react";
import Image from "next/image";
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

      {/* Structured Editorial Rows (Consistent 5:7 Blueprint Ratio) */}
      <div className="divide-y divide-grid-border">
        {RESUME_DATA.projects.map((project, idx) => (
          <div
            key={project.id}
            className="group grid grid-cols-1 lg:grid-cols-12 p-6 sm:p-8 lg:p-10 gap-6 lg:gap-10 hover:bg-surface/20 transition-colors"
          >
            {/* Left Column: Visual Preview (5 cols on lg) */}
            <div className="lg:col-span-5 flex items-center">
              <div className="relative w-full aspect-[16/10] rounded border border-grid-border overflow-hidden bg-surface flex items-center justify-center">
                {project.imageType === "portrait" ? (
                  <div className="relative h-[90%] aspect-[9/18.5] rounded-md overflow-hidden border border-grid-border shadow-sm group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src={project.image!}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority={idx === 0}
                      className="object-cover object-top"
                    />
                  </div>
                ) : (
                  <Image
                    src={project.image!}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority={idx === 0}
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
            </div>

            {/* Right Column: Project Context & Details (7 cols on lg) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Meta Header: Category & Index */}
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-accent-green font-semibold">
                    {project.category}
                  </span>
                  <span className="text-text-muted font-mono">
                    0{idx + 1}/
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight mb-2.5">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-sans mb-4">
                  {project.description}
                </p>

                {/* Architecture Highlights */}
                {project.architecturePoints && project.architecturePoints.length > 0 && (
                  <ul className="space-y-1 mb-5">
                    {project.architecturePoints.map((pt, pIdx) => (
                      <li
                        key={pIdx}
                        className="text-xs font-mono text-text-muted flex items-start gap-2"
                      >
                        <span className="text-accent-green font-bold">›</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Bottom Row: Tech Stack & Action Link */}
              <div className="pt-4 border-t border-grid-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono mt-auto">
                <div className="text-text-muted">
                  <span className="text-text-primary font-medium">Stack: </span>
                  {project.tags.join(" • ")}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 font-semibold text-text-primary hover:text-accent-green transition-colors cursor-pointer shrink-0"
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
