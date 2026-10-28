import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gary Hardyansyah — Junior Fullstack Developer",
  description:
    "Personal portfolio of Gary Hardyansyah, Junior Fullstack Developer & Informatics Student with RPL vocational foundation. Building resilient web & server-side systems with Next.js, Laravel, and modern cloud stacks.",
  keywords: [
    "Gary Hardyansyah",
    "Fullstack Developer",
    "Next.js",
    "Laravel",
    "React",
    "Portfolio Developer",
    "Universitas Nusa Mandiri",
    "SMKS Bhinneka Nusantara",
  ],
  authors: [{ name: "Gary Hardyansyah" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#EAEDEC" },
    { media: "(prefers-color-scheme: dark)", color: "#0E110F" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${sansFont.variable} ${monoFont.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-canvas text-text-primary antialiased font-sans selection:bg-accent-green selection:text-white">
        {children}
      </body>
    </html>
  );
}
