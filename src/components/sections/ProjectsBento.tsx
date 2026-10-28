import React from "react";
import Image from "next/image";
import { RESUME_DATA, ProjectItem } from "@/data/resume-data";
import { ArrowUpRight } from "lucide-react";

function ProjectCard({
  project,
  priority = false,
}: {
  project: ProjectItem;
  priority?: boolean;
}) {
  return (
    <div className="group flex flex-col justify-between hover:bg-surface/25 transition-colors">
      <div>
        {/* Visual Mockup Header & Preview */}
        {project.image && (
          <div className="border-b border-grid-border overflow-hidden bg-surface">
            {/* Technical Mockup Bar */}
            <div className="flex items-center justify-between px-3.5 py-1.5 border-b border-grid-border bg-surface text-[10px] font-mono text-text-muted select-none">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-grid-border" />
                <span className="w-2 h-2 rounded-full bg-grid-border" />
                <span className="w-2 h-2 rounded-full bg-grid-border" />
              </div>
              <span className="truncate max-w-[160px] sm:max-w-[200px]">
                {project.id}.app/
              </span>
              <span className="text-accent-green text-[9px] font-semibold">
                ● {project.statusType}
              </span>
            </div>

            {/* Mockup Preview Area */}
            {project.imageType === "portrait" ? (
              <div className="w-full h-56 sm:h-64 flex items-center justify-center p-3 sm:p-4 bg-canvas/30">
                <div className="relative h-full aspect-[9/18.5] rounded-xl overflow-hidden border border-grid-border shadow-sm group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    priority={priority}
                    className="object-cover object-top"
                  />
                </div>
              </div>
            ) : (
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-canvas/30">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={priority}
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
          </div>
        )}

        {/* Content Details */}
        <div className="p-6 sm:p-8">
          {/* Category */}
          <div className="text-xs font-mono text-accent-green font-medium mb-2">
            {project.category}
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-text-primary tracking-tight mb-2.5">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-sans mb-4">
            {project.description}
          </p>
        </div>
      </div>

      {/* Footer: Tech Stack & Action */}
      <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-4 border-t border-grid-border mt-auto space-y-3">
        <div className="text-xs font-mono text-text-muted leading-relaxed">
          <span className="text-text-primary font-medium">Stack: </span>
          {project.tags.join(" • ")}
        </div>

        <div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-text-primary hover:text-accent-green transition-colors cursor-pointer"
          >
            <span>project-details/</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-accent-green" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function ProjectsBento() {
  const topProjects = RESUME_DATA.projects.slice(0, 2);
  const bottomProjects = RESUME_DATA.projects.slice(2);

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

      {/* Row 1: Featured 2 Web Platforms (50/50 on desktop) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-grid-border border-b border-grid-border">
        {topProjects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} priority={idx === 0} />
        ))}
      </div>

      {/* Row 2: 3 Systems & Mobile Apps (33/33/33 on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-grid-border">
        {bottomProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
