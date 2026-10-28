"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const hasDarkClass = document.documentElement.classList.contains("dark");
    setIsDark(hasDarkClass);

    // Observer to stay in sync if class is modified elsewhere
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      try {
        localStorage.setItem("theme", "dark");
      } catch (e) {}
    } else {
      document.documentElement.classList.remove("dark");
      try {
        localStorage.setItem("theme", "light");
      } catch (e) {}
    }
  };

  // Prevent hydration mismatch during initial SSR
  if (!mounted) {
    return (
      <div
        className={`w-7 h-7 sm:w-8 sm:h-8 rounded border border-grid-border bg-surface ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded text-xs font-mono bg-surface hover:bg-surface-hover text-text-primary border border-grid-border transition-colors ${className}`}
      aria-label={isDark ? "Ganti ke mode terang" : "Ganti ke mode gelap"}
      title={isDark ? "Mode Terang (Light Mode)" : "Mode Gelap (Dark Mode)"}
    >
      {isDark ? (
        <Sun className="w-3.5 h-3.5 text-accent-green animate-in fade-in zoom-in duration-200" />
      ) : (
        <Moon className="w-3.5 h-3.5 text-text-muted animate-in fade-in zoom-in duration-200" />
      )}
    </button>
  );
}
