import React from "react";

export function Footer() {
  return (
    <footer className="w-full bg-canvas border-t border-grid-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[11px] sm:text-xs font-mono text-text-muted">
        <div>
          © {new Date().getFullYear()} Gary Hardyansyah
        </div>
        <div>
          Next.js 14 • Neo-Technical Editorial
        </div>
      </div>
    </footer>
  );
}
