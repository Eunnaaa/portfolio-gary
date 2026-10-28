import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  dot?: boolean;
  className?: string;
  variant?: "yellow" | "green" | "neutral";
}

export function Badge({
  children,
  dot = true,
  className,
  variant = "yellow",
}: BadgeProps) {
  const variantStyles = {
    yellow: "bg-badge-bg text-text-primary border-transparent",
    green: "bg-[#E3EFE4] text-accent-green border-[#C3DCC5]",
    neutral: "bg-surface text-text-muted border-grid-border",
  };

  const dotStyles = {
    yellow: "bg-badge-dot",
    green: "bg-accent-green",
    neutral: "bg-text-muted",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium tracking-tight border transition-colors",
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span
            className={cn(
              "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
              dotStyles[variant]
            )}
          />
          <span
            className={cn(
              "relative inline-flex rounded-full h-2 w-2",
              dotStyles[variant]
            )}
          />
        </span>
      )}
      <span>{children}</span>
    </span>
  );
}
