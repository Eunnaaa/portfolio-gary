import React from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { Cpu, Code, Wrench, Database } from "lucide-react";

export function SkillsMatrix() {
  const categoryIcons: Record<string, React.ReactNode> = {
    "Programming Languages": <Code className="w-4 h-4 text-accent-green" />,
    "Frameworks & Libraries": <Cpu className="w-4 h-4 text-accent-green" />,
    "Databases & Architecture": <Database className="w-4 h-4 text-accent-green" />,
    "Design, Content & Tools": <Wrench className="w-4 h-4 text-accent-green" />,
  };

  return (
    <section id="skills" className="border-b border-grid-border">
      {/* Section Header */}
      <div className="px-6 sm:px-10 py-5 border-b border-grid-border flex items-center justify-between bg-surface/50">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-accent-green" />
          <h2 className="text-base sm:text-lg font-mono font-bold text-text-primary tracking-tight">
            technical-capabilities/
          </h2>
        </div>
        <span className="text-xs font-mono text-text-muted">
          multi-stack proficiency matrix
        </span>
      </div>

      {/* 4-Box Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-grid-border">
        {RESUME_DATA.skills.map((cat, idx) => (
          <div
            key={cat.category}
            className={`p-6 sm:p-8 ${
              idx >= 2 ? "border-t border-grid-border" : ""
            } hover:bg-surface/20 transition-colors`}
          >
            {/* Category Header */}
            <div className="flex items-center gap-2 mb-4">
              {categoryIcons[cat.category] || <Code className="w-4 h-4 text-accent-green" />}
              <h3 className="text-sm sm:text-base font-mono font-bold text-text-primary tracking-tight">
                {cat.category}
              </h3>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="px-3 py-1.5 rounded bg-surface hover:bg-surface-hover border border-grid-border flex items-center gap-2 transition-all hover:border-accent-green/60"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-green" />
                  <span className="text-xs font-mono font-medium text-text-primary">
                    {skill.name}
                  </span>
                  {skill.level && (
                    <span className="text-[10px] font-mono text-text-muted border-l border-grid-border pl-1.5">
                      {skill.level}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
