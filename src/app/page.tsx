import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
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
      {/* Top Navbar (full-width border-b) */}
      <Navbar />

      {/* Main Editorial Container (border-x) */}
      <main
        id="main-content"
        className="flex-1 w-full max-w-6xl mx-auto border-x border-grid-border"
      >
        <HeroSection />
        <MetricGauges />
        <ExperienceLog />
        <ProjectsBento />
        <SkillsMatrix />
        <EducationSection />
        <ContactFooter />
      </main>

      {/* Bottom Footer (full-width border-t, exactly like Navbar, no border-x) */}
      <Footer />
    </div>
  );
}
