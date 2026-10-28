"use client";

import React from "react";
import { GaugeCircle } from "@/components/ui/GaugeCircle";
import { RESUME_DATA } from "@/data/resume-data";

export function MetricGauges() {
  return (
    <section className="border-b border-grid-border bg-canvas py-10 sm:py-16">
      {/* 3 Circular Gauges Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-grid-border max-w-5xl mx-auto px-4">
        {RESUME_DATA.metrics.map((metric, idx) => (
          <div key={idx} className="flex justify-center items-center py-6 md:py-0">
            <GaugeCircle
              number={metric.number}
              unit={metric.unit}
              label={metric.label}
              sublabel={metric.sublabel}
              progressPercent={metric.progressPercent}
              size={160}
              strokeWidth={7}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
