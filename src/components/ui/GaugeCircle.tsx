"use client";

import React from "react";
import { motion } from "framer-motion";

interface GaugeCircleProps {
  number: string;
  unit: string;
  label: string;
  sublabel?: string;
  progressPercent: number; // 0 to 100
}

export function GaugeCircle({
  number,
  unit,
  label,
  sublabel,
  progressPercent = 75,
}: GaugeCircleProps) {
  // Use a normalized 100x100 viewBox so SVG scales responsively via CSS
  const size = 100;
  const strokeWidth = 4.5;
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  return (
    <div
      role="progressbar"
      aria-valuenow={progressPercent}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`${number} ${unit} - ${label}${sublabel ? ` (${sublabel})` : ""}`}
      className="flex flex-col items-center text-center p-2 sm:p-4 w-full"
    >
      {/* Responsive Scalable Circle Container */}
      <div className="relative flex items-center justify-center rounded-full bg-surface transition-transform duration-300 hover:scale-105 shadow-sm w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40">
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="w-full h-full rotate-[-90deg] transform"
          aria-hidden="true"
        >
          {/* Subtle Background Track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-grid-border"
          />
          {/* Animated Progress Arc */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            strokeLinecap="round"
            className="text-accent-green"
          />
        </svg>

        {/* Centered Structured Value */}
        <div className="absolute inset-0 flex flex-col items-center justify-center select-none pointer-events-none p-1">
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold font-sans tracking-tight text-accent-green leading-none">
            {number}
          </span>
          <span className="text-[9px] sm:text-[11px] md:text-xs lg:text-sm font-mono font-bold tracking-wider text-text-primary uppercase mt-1">
            {unit}
          </span>
        </div>
      </div>

      {/* Responsive Text Labels */}
      <div className="mt-2.5 sm:mt-4 min-h-[44px] sm:min-h-[56px] flex flex-col justify-start max-w-[130px] sm:max-w-[180px] md:max-w-[220px]">
        <h4 className="text-xs sm:text-sm md:text-base font-semibold text-text-primary tracking-tight leading-snug">
          {label}
        </h4>
        {sublabel && (
          <p className="text-[10px] sm:text-xs text-text-muted font-mono mt-0.5 leading-relaxed hidden sm:block">
            {sublabel}
          </p>
        )}
      </div>
    </div>
  );
}
