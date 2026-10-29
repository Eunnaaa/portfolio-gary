import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProjectsBento } from "@/components/sections/ProjectsBento";
import { ArrowLeft } from "lucide-react";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.garyhardyansyah.xyz";

export const metadata: Metadata = {
  title: "Projects & Technical Case Studies",
  description:
    "Koleksi lengkap proyek software engineering, backend architecture, sistem multi-tenant, dan aplikasi mobile oleh Gary Hardyansyah.",
  alternates: {
    canonical: `${siteUrl}/projects`,
  },
  openGraph: {
    title: "Projects & Technical Case Studies | Gary Hardyansyah",
    description:
      "Koleksi lengkap proyek software engineering, backend architecture, sistem multi-tenant, dan aplikasi mobile oleh Gary Hardyansyah.",
    url: `${siteUrl}/projects`,
  },
};

export default function ProjectsIndexPage() {
  return (
    <div className="min-h-screen bg-canvas text-text-primary flex flex-col font-sans">
      <Navbar />

      <main
        id="main-content"
        className="flex-1 w-full max-w-6xl mx-auto border-x border-grid-border"
      >
        {/* Header Breadcrumb */}
        <div className="px-6 sm:px-10 py-4 sm:py-5 border-b border-grid-border flex items-center justify-between text-xs font-mono">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-semibold text-text-primary hover:text-accent-green transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-accent-green group-hover:-translate-x-0.5 transition-transform" />
            <span>back-to-home/</span>
          </Link>
          <span className="text-text-muted">archive/</span>
        </div>

        {/* Section Title Banner */}
        <div className="px-6 sm:px-10 py-8 sm:py-12 border-b border-grid-border bg-surface/20">
          <div className="text-xs font-mono text-accent-green font-semibold uppercase tracking-wider mb-2">
            engineering portfolio /
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-primary mb-3">
            Projects & Architecture
          </h1>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-mono max-w-2xl">
            Koleksi sistem web, backend multi-tenant, transaksi kasir POS, dan aplikasi mobile yang dibangun dengan fokus pada performa, skalabilitas, dan keandalan data.
          </p>
        </div>

        {/* Bento Grid Projects Showcase */}
        <ProjectsBento />
      </main>

      <Footer />
    </div>
  );
}
