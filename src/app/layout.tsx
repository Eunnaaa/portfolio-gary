import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { MotionProvider } from "@/components/providers/MotionProvider";
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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.garyhardyansyah.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gary Hardyansyah — Junior Software Engineer",
    template: "%s | Gary Hardyansyah",
  },
  description:
    "Portfolio of Gary Hardyansyah, Junior Software Engineer & Informatics Student. Building resilient backend systems, RESTful APIs, and modern web applications with Next.js, TypeScript, and Laravel.",
  keywords: [
    "Gary Hardyansyah",
    "Junior Software Engineer",
    "Fullstack Developer",
    "Backend Developer",
    "Next.js",
    "Laravel",
    "TypeScript",
    "React",
    "Flutter",
    "Universitas Nusa Mandiri",
    "SMKS Bhinneka Nusantara",
    "Bekasi",
    "Indonesia",
  ],
  authors: [{ name: "Gary Hardyansyah", url: siteUrl }],
  creator: "Gary Hardyansyah",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    title: "Gary Hardyansyah — Junior Software Engineer",
    description:
      "Portfolio of Gary Hardyansyah, Junior Software Engineer & Informatics Student. Building resilient backend systems, RESTful APIs, and modern web applications.",
    siteName: "Gary Hardyansyah Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gary Hardyansyah — Junior Software Engineer",
    description:
      "Portfolio of Gary Hardyansyah, Junior Software Engineer & Informatics Student. Building resilient backend systems, RESTful APIs, and modern web applications.",
    creator: "@garyhrdynsyh",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#EAEDEC" },
    { media: "(prefers-color-scheme: dark)", color: "#0E110F" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Gary Hardyansyah",
      url: siteUrl,
      jobTitle: "Junior Software Engineer",
      description:
        "Mahasiswa Informatika semester 5 di Universitas Nusa Mandiri dengan fondasi kuat di bidang Software Development. Berfokus membangun sistem backend yang andal dan aplikasi web modern.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bekasi",
        addressCountry: "ID",
      },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Universitas Nusa Mandiri",
        },
        {
          "@type": "EducationalOrganization",
          name: "SMKS Bhinneka Nusantara",
        },
      ],
      sameAs: [
        "https://github.com/Eunnaaa",
        "https://www.linkedin.com/in/garyhardyansyah/",
        "https://www.instagram.com/garyhrdynsyh/",
      ],
      knowsAbout: [
        "Software Engineering",
        "Backend Architecture",
        "RESTful API",
        "Next.js",
        "React",
        "Laravel",
        "TypeScript",
        "JavaScript",
        "PostgreSQL",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Gary Hardyansyah Portfolio",
      description: "Personal portfolio of Gary Hardyansyah, Junior Software Engineer.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "id-ID",
    },
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
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-text-primary focus:text-canvas focus:rounded focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent-green text-xs font-mono font-medium"
        >
          Lompat ke konten utama
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
