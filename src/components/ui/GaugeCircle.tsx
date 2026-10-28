"use client";

import React from "react";
import { motion } from "framer-motion";

interface GaugeCircleProps {
  number: string;
  unit: string;
  label: string;
  sublabel?: string;
  progressPercent: number; // 0 to 100
  size?: number;
  strokeWidth?: number;
}

export function GaugeCircle({
  number,
  unit,
  label,
  sublabel,
  progressPercent = 75,
  size = 168,
  strokeWidth = 7,
}: GaugeCircleProps) {
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  return (
    <div className="flex flex-col items-center text-center p-4 w-full max-w-[260px] mx-auto">
      {/* Circle Container */}
      <div
        className="relative flex items-center justify-center rounded-full bg-surface transition-transform duration-300 hover:scale-105 shadow-sm"
        style={{ width: size, height: size }}
      >
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="rotate-[-90deg] transform"
        >
          {/* Subtle Background Track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#DCE3DE"
            strokeWidth={strokeWidth}
          />
          {/* Animated Progress Arc */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#3D7D3F"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            strokeLinecap="round"
          />
        </svg>

        {/* Centered Structured Value (Hero Number + Clean Unit) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center select-none pointer-events-none">
          <span className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-accent-green leading-none">
            {number}
          </span>
          <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-text-primary uppercase mt-1.5">
            {unit}
          </span>
        </div>
      </div>

      {/* Text Labels below */}
      <div className="mt-4 min-h-[60px] flex flex-col justify-start">
        <h4 className="text-sm sm:text-base font-semibold text-text-primary tracking-tight">
          {label}
        </h4>
        {sublabel && (
          <p className="text-xs text-text-muted font-mono mt-1 leading-relaxed max-w-[200px] mx-auto">
            {sublabel}
          </p>
        )}
      </div>
    </div>
  );
}
