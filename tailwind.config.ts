import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#EAEDEC",
        surface: "#F1F4F2",
        "surface-hover": "#E5EBE7",
        "grid-border": "#D3D9D4",
        "grid-border-dark": "#B8C2BA",
        "text-primary": "#161511",
        "text-muted": "#5A635C",
        "accent-green": "#3D7D3F",
        "accent-green-hover": "#326633",
        "badge-bg": "#FEF8CA",
        "badge-dot": "#F2C756",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        hairline: "0 0 0 1px #D3D9D4",
      },
    },
  },
  plugins: [],
};

export default config;
