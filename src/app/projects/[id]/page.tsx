import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RESUME_DATA } from "@/data/resume-data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

interface PageProps {
  params: {
    id: string;
  };
}

// Generate static routes for all projects
export function generateStaticParams() {
  return RESUME_DATA.projects.map((project) => ({
    id: project.id,
  }));
}

// Generate dynamic metadata
export function generateMetadata({ params }: PageProps): Metadata {
  const project = RESUME_DATA.projects.find((p) => p.id === params.id);
  if (!project) {
    return {
      title: "Project Not Found | Gary Hardyansyah",
    };
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.garyhardyansyah.xyz";

  return {
    title: `${project.title} — Gary Hardyansyah`,
    description: project.tagline || project.description,
    keywords: [
      project.title,
      project.category,
      ...project.tags,
      "Gary Hardyansyah",
      "Software Engineer",
    ],
    openGraph: {
      title: `${project.title} — Gary Hardyansyah`,
      description: project.tagline || project.description,
      url: `${siteUrl}/projects/${project.id}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Gary Hardyansyah`,
      description: project.tagline || project.description,
    },
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const projectIndex = RESUME_DATA.projects.findIndex(
    (p) => p.id === params.id
  );

  if (projectIndex === -1) {
    notFound();
  }

  const project = RESUME_DATA.projects[projectIndex];
  const totalProjects = RESUME_DATA.projects.length;
  const prevProject =
    projectIndex > 0
      ? RESUME_DATA.projects[projectIndex - 1]
      : RESUME_DATA.projects[totalProjects - 1];
  const nextProject =
    projectIndex < totalProjects - 1
      ? RESUME_DATA.projects[projectIndex + 1]
      : RESUME_DATA.projects[0];

  return (
    <div className="min-h-screen bg-canvas text-text-primary flex flex-col font-sans">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Editorial Container */}
      <main
        id="main-content"
        className="flex-1 w-full max-w-6xl mx-auto border-x border-grid-border"
      >
        {/* 1. Header Navigation & Quick Meta */}
        <div className="px-6 sm:px-10 py-4 sm:py-5 border-b border-grid-border flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-semibold text-text-primary hover:text-accent-green transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-accent-green group-hover:-translate-x-0.5 transition-transform" />
            <span>back-to-projects/</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-text-muted font-mono hidden sm:inline">
              0{projectIndex + 1}/0{totalProjects}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono bg-badge-bg text-badge-dot border border-grid-border/40">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
              <span>{project.status}</span>
            </span>
          </div>
        </div>

        {/* 2. Project Title & Overview Banner */}
        <div className="px-6 sm:px-10 py-8 sm:py-10 border-b border-grid-border">
          <div className="text-xs font-mono text-accent-green font-semibold uppercase tracking-wider mb-2">
            {project.category}
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary mb-3">
            {project.title}
          </h1>

          <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-mono max-w-3xl">
            {project.tagline || project.description}
          </p>

          {/* Compact Spec Row */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-5 mt-5 border-t border-grid-border text-xs font-mono text-text-muted">
            <div>
              <span className="text-text-primary font-medium">Role: </span>
              {project.role || "Fullstack Engineer"}
            </div>
            <div>
              <span className="text-text-primary font-medium">Timeline: </span>
              {project.timeline || "2024 - 2025"}
            </div>
            <div>
              <span className="text-text-primary font-medium">Platform: </span>
              {project.imageType === "portrait"
                ? "Mobile Application"
                : "Web SaaS / Platform"}
            </div>
          </div>

          {/* Action Links (GitHub Repository & Demo) */}
          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 pt-5 mt-5 border-t border-grid-border">
              {project.links.map((link, lIdx) => (
                <a
                  key={lIdx}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded text-xs font-mono font-medium bg-surface hover:bg-surface-hover text-text-primary border border-grid-border hover:border-accent-green transition-colors"
                  aria-label={
                    link.type === "github"
                      ? `Buka repositori GitHub untuk ${project.title}`
                      : `Lihat ${link.label} untuk ${project.title}`
                  }
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent-green" />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* 3. Hero Visual Preview with Prominently Rounded Corners */}
        <div className="p-6 sm:p-10 border-b border-grid-border bg-surface/15">
          {project.imageType === "portrait" ? (
            /* Mobile Device Showcase: 3 Phone Screens with Authentic Curvature */
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl border border-grid-border overflow-hidden bg-surface flex items-center justify-center p-3 sm:p-6 shadow-sm">
              {project.gallery && project.gallery.length >= 3 ? (
                <div className="relative w-full h-full flex items-center justify-center gap-2 sm:gap-5 px-2 sm:px-4">
                  {/* Left Phone Screen */}
                  <div className="relative h-[80%] sm:h-[84%] aspect-[9/18.5] rounded-[30px] sm:rounded-[38px] overflow-hidden border border-grid-border/80 shadow-sm shrink-0">
                    <Image
                      src={project.gallery[0]}
                      alt={`${project.title} screenshot left`}
                      fill
                      sizes="(max-width: 1024px) 30vw, 15vw"
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Center Phone Screen (Primary) */}
                  <div className="relative h-[90%] sm:h-[94%] aspect-[9/18.5] rounded-[34px] sm:rounded-[42px] overflow-hidden border border-grid-border/80 shadow-md z-10 shrink-0">
                    <Image
                      src={project.gallery[1]}
                      alt={project.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 35vw, 18vw"
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Right Phone Screen */}
                  <div className="relative h-[80%] sm:h-[84%] aspect-[9/18.5] rounded-[30px] sm:rounded-[38px] overflow-hidden border border-grid-border/80 shadow-sm shrink-0">
                    <Image
                      src={project.gallery[2]}
                      alt={`${project.title} screenshot right`}
                      fill
                      sizes="(max-width: 1024px) 30vw, 15vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              ) : (
                <div className="relative h-[90%] aspect-[9/18.5] rounded-[34px] sm:rounded-[42px] overflow-hidden border border-grid-border/80 shadow-sm">
                  <Image
                    src={project.image!}
                    alt={project.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top"
                  />
                </div>
              )}
            </div>
          ) : (
            /* Web Application Showcase: Rounded Container with Overflow Hidden */
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl border border-grid-border overflow-hidden bg-surface shadow-sm">
              <Image
                src={project.image!}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1152px"
                className="object-cover object-top"
              />
            </div>
          )}
        </div>

        {/* 4. Unified Editorial Blueprint: Overview & Architecture Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-grid-border border-b border-grid-border">
          {/* Left Column: Context, Problem & Solution (5 cols on lg) */}
          <div className="lg:col-span-5 p-6 sm:p-10 space-y-6">
            <div>
              <h2 className="text-xs font-mono text-text-primary uppercase tracking-wider font-bold mb-3">
                overview/
              </h2>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-sans mb-3">
                {project.problemStatement || project.description}
              </p>
              <p className="text-xs sm:text-sm text-text-primary leading-relaxed font-sans">
                {project.solution || project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="pt-6 border-t border-grid-border">
              <h3 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-3">
                tech-stack/
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded border border-grid-border bg-surface text-xs font-mono text-text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Architecture Highlights & Capabilities (7 cols on lg) */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xs font-mono text-text-primary uppercase tracking-wider font-bold">
                  key-architecture & capabilities/
                </h2>
                <span className="text-xs font-mono text-text-muted">
                  engineering spec
                </span>
              </div>

              <div className="space-y-3">
                {project.architecturePoints.map((point, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-3.5 sm:p-4 rounded-lg border border-grid-border bg-surface/30 flex items-start gap-3"
                  >
                    <span className="text-accent-green font-bold text-sm select-none shrink-0">
                      ›
                    </span>
                    <p className="text-xs sm:text-sm font-mono text-text-primary leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Discussion & Code Links */}
            <div className="pt-6 mt-6 border-t border-grid-border flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="text-text-muted">
                Ingin mendiskusikan atau mengeksplorasi kode project ini?
              </span>
              <div className="flex items-center gap-4">
                {project.links?.find((l) => l.type === "github") && (
                  <a
                    href={project.links.find((l) => l.type === "github")!.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-text-muted hover:text-accent-green transition-colors cursor-pointer"
                    aria-label={`Buka repositori GitHub untuk ${project.title}`}
                  >
                    <span>view-source/</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-accent-green" />
                  </a>
                )}
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-1 font-semibold text-text-primary hover:text-accent-green transition-colors cursor-pointer"
                >
                  <span>contact-gary/</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent-green" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Minimalist Next / Prev Project Pagination */}
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-grid-border font-mono text-xs">
          <Link
            href={`/projects/${prevProject.id}`}
            className="p-6 sm:p-8 hover:bg-surface/30 transition-colors block group cursor-pointer"
          >
            <div className="text-text-muted mb-1 flex items-center gap-1.5 group-hover:text-accent-green transition-colors">
              <ArrowLeft className="w-3.5 h-3.5 text-accent-green group-hover:-translate-x-0.5 transition-transform" />
              <span>previous-project/</span>
            </div>
            <div className="text-sm sm:text-base font-bold text-text-primary group-hover:text-accent-green transition-colors truncate">
              {prevProject.title}
            </div>
          </Link>

          <Link
            href={`/projects/${nextProject.id}`}
            className="p-6 sm:p-8 hover:bg-surface/30 transition-colors block text-left sm:text-right group cursor-pointer"
          >
            <div className="text-text-muted mb-1 flex items-center sm:justify-end gap-1.5 group-hover:text-accent-green transition-colors">
              <span>next-project/</span>
              <ArrowRight className="w-3.5 h-3.5 text-accent-green group-hover:translate-x-0.5 transition-transform" />
            </div>
            <div className="text-sm sm:text-base font-bold text-text-primary group-hover:text-accent-green transition-colors truncate">
              {nextProject.title}
            </div>
          </Link>
        </div>
      </main>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
}
