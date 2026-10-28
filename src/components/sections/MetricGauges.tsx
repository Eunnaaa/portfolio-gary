"use client";

import React from "react";
import { GaugeCircle } from "@/components/ui/GaugeCircle";
import { RESUME_DATA } from "@/data/resume-data";

export function MetricGauges() {
  return (
    <section className="border-b border-grid-border bg-canvas py-6 sm:py-10 md:py-14">
      {/* 3 Circular Gauges Container (Responsive 3-Column on all devices) */}
      <div className="grid grid-cols-3 divide-x divide-grid-border max-w-5xl mx-auto px-2 sm:px-6">
        {RESUME_DATA.metrics.map((metric, idx) => (
          <div key={idx} className="flex justify-center items-center py-1 sm:py-2">
            <GaugeCircle
              number={metric.number}
              unit={metric.unit}
              label={metric.label}
              sublabel={metric.sublabel}
              progressPercent={metric.progressPercent}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
