# Gary Hardyansyah — Personal Portfolio

> **Neo-Technical Editorial (GitHub Blueprint Edition)**  
> Personal portfolio of **Gary Hardyansyah** — Junior Software Engineer & Mahasiswa Informatika Universitas Nusa Mandiri.

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?logo=framer)](https://www.framer.com/motion/)
[![WCAG AA](https://img.shields.io/badge/Accessibility-WCAG_2.1_AA-success)](#aksesibilitas)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🌐 Live Preview

- **Production Domain**: [https://www.garyhardyansyah.xyz](https://www.garyhardyansyah.xyz)
- **Deployment**: Vercel (Edge CDN, SSL otomatis)

---

## 🎨 Konsep Desain & Estetika

Portfolio ini menerapkan bahasa visual **"Neo-Technical Editorial"** yang diadaptasi dari portal acara **GitHub Universe**:
- **Latar Tenang**: *Warm sage / off-white* (`#EAEDEC`) untuk mode terang dan *deep obsidian* (`#0E110F`) untuk mode gelap yang ramah di mata teknisi.
- **Hairline Grid Modular**: Garis pembatas tipis 1px (`#D3D9D4` / `#262E29`) menyerupai lembar cetak biru (*technical blueprint*).
- **Aksen Developer**: Warna hijau ekosistem (`#357338` light / `#4AA34E` dark) yang telah disesuaikan agar lolos standar rasio kontras WCAG AA ($\ge 4.5:1$).
- **Tipografi**: Menggabungkan sans-serif modern (**Inter**) untuk keterbacaan artikel editorial dan monospaced (**JetBrains Mono**) untuk penanda metadata dan kode.

---

## ⚡ Tech Stack

| Layer | Teknologi |
| :--- | :--- |
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router, Static Site Generation / SSG) |
| **Bahasa** | [TypeScript 5](https://www.typescriptlang.org/) (Strict Type-Safety) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) + CSS Variables untuk Dynamic Theming |
| **Animasi** | [Framer Motion](https://www.framer.com/motion/) (`MotionConfig reducedMotion="user"`) |
| **Ikonografi** | [Lucide React](https://lucide.dev/) (Stroke 1.5px bergaya teknis) |
| **Font** | `next/font/google` (Inter & JetBrains Mono — Zero Cumulative Layout Shift) |

---

## 🏛️ Arsitektur Proyek

```
portfolio/
├── .env.example                     # Contoh konfigurasi URL kanonikal
├── public/
│   ├── CV_Gary_Hardyansyah.pdf      # Berkas CV resmi untuk unduhan
│   ├── projects/                    # Screenshot mockup proyek web & mobile
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout, JSON-LD, fonts, skip link & theme handler
│   │   ├── page.tsx                 # Halaman utama (Bento grid modular)
│   │   ├── globals.css              # Variabel CSS tema light/dark & utility styling
│   │   ├── robots.ts                # Dynamic robots.txt
│   │   ├── sitemap.ts               # Dynamic sitemap.xml
│   │   └── projects/[id]/
│   │       └── page.tsx             # Dynamic SSG project detail routes (generateStaticParams)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           # Header navigasi, smooth scroll, theme toggle, drawer
│   │   │   └── Footer.tsx           # Footer minimalis bergaris border
│   │   ├── providers/
│   │   │   └── MotionProvider.tsx   # Pembungkus Framer Motion dengan reducedMotion="user"
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx      # Identitas, typewriter rotator, tombol unduh CV
│   │   │   ├── MetricGauges.tsx     # 3 progress ring metrik teknis
│   │   │   ├── ExperienceLog.tsx    # Log pengalaman pengajar & developer
│   │   │   ├── ProjectsBento.tsx    # Showcase proyek dengan link GitHub & detail
│   │   │   ├── SkillsMatrix.tsx     # Matriks keahlian (Languages, Frameworks, DB, Tools)
│   │   │   ├── EducationSection.tsx # Riwayat akademis S1 Informatika & SMK RPL
│   │   │   └── ContactFooter.tsx    # Kanal kontak, WhatsApp, dan copy-email
│   │   └── ui/
│   │       ├── GaugeCircle.tsx      # Komponen SVG progress ring interaktif
│   │       ├── RoleRotator.tsx      # Animasi typewriter peran teknis
│   │       └── ThemeToggle.tsx      # Tombol ganti mode terang/gelap
│   ├── data/
│   │   └── resume-data.ts           # Single Source of Truth data profil & portofolio
│   └── lib/
│       ├── smooth-scroll.ts         # Silky smooth scroll engine (easeInOutCubic 900ms)
│       └── utils.ts                 # Helper cn() (clsx + tailwind-merge)
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Proyek Unggulan yang Ditampilkan

1. **[Kedai-Ku (Multi-Tenant POS & CRM)](https://github.com/Eunnaaa/pos-app)**
   - Stack: Next.js 15, React 19, TypeScript, Drizzle ORM, Supabase PostgreSQL, Better Auth, PWA Offline Queue, Playwright E2E.
2. **[PadelHub (Sports Booking & Venue ERP)](https://github.com/Eunnaaa/Padel-HUB)**
   - Stack: Laravel (^13.x / PHP 8.3), Vue 3, Inertia.js, PostgreSQL (`DB::transaction & lockForUpdate`), Pest PHP, Midtrans SDK.
3. **[Si Bank Sampah (Community Waste ERP)](https://github.com/Eunnaaa/bank-sampah)**
   - Stack: TanStack Start, React 19, TypeScript, Vite, Drizzle ORM, Supabase, In-Memory Demo Mode, Playwright E2E.
4. **[EventKu (Mobile Event Ticketing)](https://github.com/Eunnaaa/eventku)**
   - Stack: Flutter, Dart, Firebase Authentication, Cloud Firestore, Provider, SharedPreferences.
5. **[UangKu (Personal Finance & Offline Sync)](https://github.com/Eunnaaa/uang-ku)**
   - Stack: React Native, Expo, SQLite Lokal, Bun, ElysiaJS, Turborepo Monorepo, Drizzle ORM.

---

## ♿ Aksesibilitas & Performa

- **Skip Navigation Link**: Tersedia tautan `"Lompat ke konten utama"` di awal dokumen untuk navigasi keyboard.
- **Accessible ARIA Labels**: Seluruh tombol interaktif, pengubah tema, tautan eksternal, dan progress ring metrik dilengkapi label deskriptif.
- **Reduced Motion Support**: Menghargai preferensi pengguna sistem operasi (`prefers-reduced-motion`) via `<MotionConfig reducedMotion="user">`.
- **Zero-FOUC Theming**: Script pendeteksi tema di `<head>` mengeksekusi preferensi `localStorage` atau `prefers-color-scheme` sebelum DOM me-render elemen untuk mencegah kedipan layar.
- **Core Web Vitals & SEO**: Skor LCP < 1.0s, CLS = 0, Schema.org JSON-LD terstruktur (`Person` dan `WebSite`).

---

## 🛠️ Memulai di Lingkungan Lokal

### Prasyarat
- Node.js $\ge$ 20.x atau Bun $\ge$ 1.1

### Instalasi
```bash
# Clone repositori
git clone https://github.com/Eunnaaa/portfolio-gary.git
cd portfolio-gary

# Salin konfigurasi environment
cp .env.example .env.local

# Pasang dependensi
npm install
# atau
bun install
```

### Menjalankan Server Pengembangan
```bash
npm run dev
# Buka http://localhost:3000 di browser Anda
```

### Melakukan Build Produksi
```bash
npm run build
npm run start
```

---

## 📬 Kontak

- **Email**: [garryhardyansyah23@gmail.com](mailto:garryhardyansyah23@gmail.com)
- **WhatsApp**: [+62 857-2152-9781](https://wa.me/6285721529781)
- **LinkedIn**: [linkedin.com/in/garyhardyansyah](https://www.linkedin.com/in/garyhardyansyah/)
- **GitHub**: [@Eunnaaa](https://github.com/Eunnaaa)

---
*Dibuat dengan dedikasi arsitektur perangkat lunak oleh Gary Hardyansyah.*
