"use client";

import React from "react";
import { GaugeCircle } from "@/components/ui/GaugeCircle";
import { RESUME_DATA } from "@/data/resume-data";
import { Activity } from "lucide-react";

export function MetricGauges() {
  return (
    <section className="border-b border-grid-border bg-canvas">
      {/* Subheader / Section Bar */}
      <div className="px-6 py-3 border-b border-grid-border flex items-center justify-between text-xs font-mono text-text-muted bg-surface/30">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-accent-green" />
          <span>engineering-metrics/</span>
          <span className="text-grid-border-dark">•</span>
          <span>career-trajectory.log</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-[11px]">
          <span className="w-2 h-2 rounded-full bg-accent-green inline-block" />
          <span>Live Verified Highlights</span>
        </div>
      </div>

      {/* 3 Circular Gauges Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-grid-border py-8 sm:py-12 px-4 max-w-6xl mx-auto">
        {RESUME_DATA.metrics.map((metric, idx) => (
          <div key={idx} className="flex justify-center items-center py-6 md:py-2">
            <GaugeCircle
              number={metric.number}
              unit={metric.unit}
              label={metric.label}
              sublabel={metric.sublabel}
              progressPercent={metric.progressPercent}
              size={168}
              strokeWidth={7}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
