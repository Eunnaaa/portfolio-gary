"use client";

import React from "react";
import { motion } from "framer-motion";

interface GaugeCircleProps {
  value: string;
  label: string;
  sublabel?: string;
  progressPercent: number; // 0 to 100
  size?: number;
  strokeWidth?: number;
}

export function GaugeCircle({
  value,
  label,
  sublabel,
  progressPercent = 75,
  size = 150,
  strokeWidth = 6.5,
}: GaugeCircleProps) {
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  return (
    <div className="flex flex-col items-center text-center p-4">
      {/* Circle Container */}
      <div
        className="relative flex items-center justify-center rounded-full bg-surface transition-transform duration-300 hover:scale-105"
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

        {/* Centered Value */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl md:text-3xl font-bold font-sans tracking-tight text-accent-green">
            {value}
          </span>
        </div>
      </div>

      {/* Text Labels */}
      <div className="mt-3.5 max-w-[170px]">
        <h4 className="text-sm font-semibold text-text-primary tracking-tight">
          {label}
        </h4>
        {sublabel && (
          <p className="text-xs text-text-muted font-mono mt-0.5 leading-relaxed">
            {sublabel}
          </p>
        )}
      </div>
    </div>
  );
}
