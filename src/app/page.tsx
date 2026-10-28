import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { MetricGauges } from "@/components/sections/MetricGauges";
import { ExperienceLog } from "@/components/sections/ExperienceLog";
import { ProjectsBento } from "@/components/sections/ProjectsBento";
import { SkillsMatrix } from "@/components/sections/SkillsMatrix";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactFooter } from "@/components/sections/ContactFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas text-text-primary flex flex-col">
      {/* Top Sticky Navigation */}
      <Navbar />

      {/* Main Framed Blueprint Grid Container */}
      <main className="flex-1 w-full max-w-7xl mx-auto border-x border-grid-border shadow-sm">
        <HeroSection />
        <MetricGauges />
        <ExperienceLog />
        <ProjectsBento />
        <SkillsMatrix />
        <EducationSection />
        <ContactFooter />
      </main>
    </div>
  );
}
