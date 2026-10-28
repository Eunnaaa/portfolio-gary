import React from "react";
import Image from "next/image";
import Link from "next/link";
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
              <Link
                href={`/projects/${project.id}`}
                aria-label={`Buka halaman detail project ${project.title}`}
                className="relative w-full aspect-[16/10] rounded-xl border border-grid-border overflow-hidden bg-surface flex items-center justify-center cursor-pointer block"
              >
                {project.imageType === "portrait" ? (
                  project.gallery && project.gallery.length >= 3 ? (
                    <div className="relative w-full h-full flex items-center justify-center gap-1.5 sm:gap-2.5 px-2 sm:px-3">
                      {/* Left Screen */}
                      <div className="relative h-[80%] sm:h-[82%] aspect-[9/18.5] rounded-[18px] overflow-hidden border border-grid-border shadow-sm group-hover:scale-105 transition-transform duration-500 shrink-0">
                        <Image
                          src={project.gallery[0]}
                          alt={`${project.title} screenshot left`}
                          fill
                          sizes="(max-width: 1024px) 30vw, 12vw"
                          className="object-cover object-top grayscale contrast-[0.95] opacity-80 dark:opacity-75 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 transition-all duration-500 ease-out"
                        />
                      </div>

                      {/* Center Screen (Primary/Featured) */}
                      <div className="relative h-[90%] sm:h-[92%] aspect-[9/18.5] rounded-[20px] overflow-hidden border border-grid-border shadow-md group-hover:scale-105 transition-transform duration-500 z-10 shrink-0">
                        <Image
                          src={project.gallery[1]}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1024px) 35vw, 15vw"
                          priority={idx === 0}
                          className="object-cover object-top grayscale contrast-[0.95] opacity-80 dark:opacity-75 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 transition-all duration-500 ease-out"
                        />
                      </div>

                      {/* Right Screen */}
                      <div className="relative h-[80%] sm:h-[82%] aspect-[9/18.5] rounded-[18px] overflow-hidden border border-grid-border shadow-sm group-hover:scale-105 transition-transform duration-500 shrink-0">
                        <Image
                          src={project.gallery[2]}
                          alt={`${project.title} screenshot right`}
                          fill
                          sizes="(max-width: 1024px) 30vw, 12vw"
                          className="object-cover object-top grayscale contrast-[0.95] opacity-80 dark:opacity-75 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 transition-all duration-500 ease-out"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-[90%] aspect-[9/18.5] rounded-[20px] overflow-hidden border border-grid-border shadow-sm group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src={project.image!}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        priority={idx === 0}
                        className="object-cover object-top grayscale contrast-[0.95] opacity-80 dark:opacity-75 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 transition-all duration-500 ease-out"
                      />
                    </div>
                  )
                ) : (
                  <Image
                    src={project.image!}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority={idx === 0}
                    className="object-cover object-top group-hover:scale-105 grayscale contrast-[0.95] opacity-80 dark:opacity-75 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 transition-all duration-500 ease-out"
                  />
                )}
              </Link>
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
                <Link
                  href={`/projects/${project.id}`}
                  className="group/title inline-block"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary group-hover/title:text-accent-green tracking-tight mb-2.5 transition-colors">
                    {project.title}
                  </h3>
                </Link>

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

                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1 font-semibold text-text-primary hover:text-accent-green transition-colors cursor-pointer shrink-0"
                >
                  <span>project-details/</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent-green" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
