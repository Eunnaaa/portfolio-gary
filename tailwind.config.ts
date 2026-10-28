import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "rgb(var(--bg-canvas) / <alpha-value>)",
        surface: "rgb(var(--bg-surface) / <alpha-value>)",
        "surface-hover": "rgb(var(--bg-surface-hover) / <alpha-value>)",
        "grid-border": "rgb(var(--border-grid) / <alpha-value>)",
        "grid-border-dark": "rgb(var(--border-grid-dark) / <alpha-value>)",
        "text-primary": "rgb(var(--text-primary) / <alpha-value>)",
        "text-muted": "rgb(var(--text-muted) / <alpha-value>)",
        "accent-green": "rgb(var(--accent-green) / <alpha-value>)",
        "accent-green-hover": "rgb(var(--accent-green-hover) / <alpha-value>)",
        "badge-bg": "rgb(var(--badge-bg) / <alpha-value>)",
        "badge-dot": "rgb(var(--badge-dot) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        hairline: "0 0 0 1px rgb(var(--border-grid))",
      },
    },
  },
  plugins: [],
};

export default config;
