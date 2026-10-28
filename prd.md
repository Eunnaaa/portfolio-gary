# Product Requirement Document (PRD)
## Portfolio Web — "Neo-Technical Editorial" (GitHub Blueprint Edition)
**Personal Portfolio of Gary Hardyansyah**

---

## 1. Executive Summary & Visi Produk

### 1.1 Visi
Membangun web portfolio interaktif berperforma tinggi untuk **Gary Hardyansyah** yang merefleksikan identitasnya sebagai **Junior Fullstack Developer & Mahasiswa Informatika** yang berakar kuat dari pendidikan vokasi Rekayasa Perangkat Lunak (RPL). 

Portfolio ini menerapkan bahasa visual **"Neo-Technical Editorial"** yang diadaptasi dari portal acara **GitHub Universe 2024**:
- Warna latar ramah di mata (*warm sage / off-white* `#EAEDEC`)
- Garis batas modular tipis (*hairline grid border* `#D3D9D4`)
- Tipografi resmi GitHub (**Mona Sans** & **Monaspace Neon**)
- Aksen hijau *developer ecosystem* (`#3D7D3F`) dan status pill amber (`#FEF8CA`)

### 1.2 Target Audiens & Objektif
- **Tech Recruiters & HR:** Langsung memahami ringkasan profil, status ketersediaan kerja (*availability*), domisili, dan kontak (Email/WhatsApp) dalam waktu < 10 detik.
- **Tech Leads & Engineering Managers:** Melihat kedalaman teknis melalui arsitektur proyek (Next.js, Laravel, REST API), kepemimpinan (pengajar RPL), dan kebersihan kode.
- **Klien Proyek Web:** Menilai portfolio nyata, kemampuan komunikasi, dan keandalan pengerjaan sistem fullstack.

---

## 2. Analisis & Keputusan Pemilihan Framework

### 2.1 Brainstorming Kandidat Framework

| Framework | Kelebihan | Kelemahan | Kesimpulan untuk Gary |
| :--- | :--- | :--- | :--- |
| **Next.js (App Router + TS + Tailwind)** | • Dicantumkan langsung di CV Gary (*direct proof of skill*).<br>• SSG/SSR optimal untuk SEO dan skor Core Web Vitals 99–100.<br>• Ekosistem komponen React sangat matang (Lucide, Framer Motion).<br>• Hosting gratis & instan di Vercel. | Bundle JS sedikit lebih besar dari Astro jika tidak dioptimasi. | **PILIHAN TERBAIK (Selected ⭐)** |
| **Astro** | • Zero-JS default, performa 100/100 tanpa usaha.<br>• Bagus untuk situs berbasis konten. | Gary belum mencantumkan Astro di CV; recruiter ingin melihat keahlian stack yang dikuasai kandidat. | Alternatif kedua |
| **Vite + React (SPA)** | • Ringan dan cepat dibuat. | CSR murni kurang ramah SEO, tidak ada route API bawaan untuk contact form. | Kurang optimal |
| **Laravel + Blade/Inertia** | • Gary menguasai Laravel. | Membutuhkan server PHP aktif (tidak bisa di-deploy di static edge CDN gratis), overkill untuk portfolio frontend. | Digunakan untuk backend showcase |

### 2.2 Keputusan Akhir Tech Stack
- **Framework Utama:** **Next.js 14/15 (App Router, TypeScript)**
- **Styling:** **Tailwind CSS** (dengan konfigurasi token palet GitHub Universe)
- **Komponen Animasi:** **Framer Motion** (transisi halus pada *circular gauge* dan *hover grid*)
- **Ikonografi:** **Lucide React** (stroke 1.5px bergaya blueprint teknis)
- **Deployment:** **Vercel** (Global Edge CDN, SSL otomatis, zero-cost)

---

## 3. Sistem Desain (Design System Tokens)

### 3.1 Palet Warna (Color Palette)
```css
:root {
  --bg-canvas: #EAEDEC;        /* Latar utama */
  --bg-surface: #F1F4F2;       /* Permukaan kartu / disc track */
  --border-grid: #D3D9D4;      /* Garis pembatas 1px */
  --text-primary: #161511;     /* Teks utama (Charcoal) */
  --text-muted: #5A635C;       /* Teks sekunder (Muted Slate) */
  --accent-green: #3D7D3F;     /* Hijau GitHub Universe */
  --badge-bg: #FEF8CA;         /* Latar pill badge status */
  --badge-dot: #F2C756;        /* Titik status aktif */
}
```

### 3.2 Tipografi
- **Display & Headings:** `Mona Sans` (Variable Neo-Grotesque, font-weight 600 - 800)
- **Body Copy:** `Mona Sans` (Regular, font-weight 400, line-height 1.6)
- **Technical Metadata & Code:** `Monaspace Neon` (Monospace modern dari GitHub Next)
- *Fallback:* `Inter` (Sans) dan `JetBrains Mono` / `Geist Mono` (Monospace).

---

## 4. Pemetaan Konten dari CV Gary Hardyansyah

Berikut adalah struktur pemetaan data asli CV Gary ke dalam arsitektur antarmuka portfolio:

### 4.1 Header & Topbar
- **Lokasi & Waktu:** `Jakarta, Indonesia / UTC+7 / Remote Friendly`
- **Status Pill Badge:** `• Open to Fulltime & Freelance Projects` (Warna `#FEF8CA` + dot `#F2C756`)
- **Quick Links:** `[about/]`, `[experience/]`, `[projects/]`, `[contact/]`

### 4.2 Hero Section (Bento Top Row)
- **Kiri (Dual-Tone Title):**
  - Eyebrow (Monospace): `Informatics Student / Junior Fullstack Developer`
  - Headline: `hi-Gary` (`hi-` dalam warna `#161511`, `Gary` dalam warna hijau `#3D7D3F`)
  - Sub-headline: `fullstack-engineer/`
- **Kanan (Editorial Summary):**
  - *"Mahasiswa Informatika Semester 5 (Universitas Nusa Mandiri) berlatar belakang SMK Rekayasa Perangkat Lunak. Memiliki keahlian terintegrasi dari perancangan arsitektur backend, RESTful API, hingga antarmuka modern dengan Next.js & Laravel. Berpengalaman sebagai instruktur teknis dan pengembang sistem kompetisi."*
  - CTA Button: `[Download CV (.PDF)]` & `[Hubungi Gary ->]`

### 4.3 Engineering Highlights (Circular Gauges)
Mengadaptasi 3 lingkaran hitung mundur dari screenshot acuan:
1. **Lingkaran 1 (`3+` Yrs):** `Fondasi RPL & Coding Aktif` (Pendidikan vokasi RPL sejak 2021 hingga perkuliahan saat ini).
2. **Lingkaran 2 (`7+` Frameworks):** `Multi-Stack Proficiency` (Next.js, React, Vue, Laravel, Flask, Spring Boot, Flutter).
3. **Lingkaran 3 (`100+` Siswa):** `Technical Mentorship` (Membimbing siswa kelas 11 RPL di SMKS Bhinneka Nusantara).

### 4.4 Pengalaman Kerja & Rekam Jejak (Work Experience Log)
Disajikan dalam format tabel/log komit teknis dengan garis batas 1px:

1. **Pengajar Freelance (Informatika & Praktik Kejuruan RPL)**
   - *Institusi:* SMKS Bhinneka Nusantara | *Periode:* Februari 2025 – Juli 2026
   - *Highlights:* 
     - Mengajar kurikulum Informatika dan dasar-dasar pemrograman untuk siswa kelas 11 RPL.
     - Membimbing sesi praktik kejuruan laboratorium komputer (Web development, logika algoritma, dan problem solving).
     - Menunjukkan kepemimpinan (*leadership*), kesabaran, dan kemampuan komunikasi teknis.

2. **Backend Developer (Kompetisi PIKMI)**
   - *Penyelenggara:* Pusat Kreativitas Mahasiswa | *Periode:* November 2024 – Februari 2025
   - *Highlights:*
     - Merancang arsitektur server-side aplikasi kompetisi berskala nasional.
     - Merancang skema basis data relasional dan endpoints REST API.
     - Berkolaborasi intensif antar-tim pengembang dalam alur Git workflow.

3. **Content Editor & Social Media (Magang)**
   - *Perusahaan:* Mandiri Digital Universe | *Periode:* Januari 2023 – Juni 2023
   - *Highlights:*
     - Meriset konten teknologi, menulis copywriting interaktif, dan memproduksi konten Reels serta Carousel grafis (`@mandiri_digiverse`).
     - Memadukan pemahaman teknis dengan keterampilan komunikasi visual.

### 4.5 Matriks Keahlian (Skills Matrix)
Dikelompokkan secara rapi dalam grid chip monospaced:
- **Core Languages:** `HTML5`, `CSS3`, `JavaScript (ES6+)`, `PHP`, `Python`, `Java`
- **Frontend Ecosystem:** `React`, `Next.js`, `Vue.js`, `Tailwind CSS`
- **Backend & Cloud:** `Laravel`, `Flask`, `Spring Boot`, `REST APIs`, `MySQL/PostgreSQL`
- **Mobile Development:** `Flutter`
- **Creative & Tools:** `Canva`, `CapCut`, `Copywriting`, `Git/GitHub`, `VS Code`
- **Soft Skills:** `Technical Mentorship`, `Cross-Team Collaboration`, `Problem Solving`

### 4.6 Pendidikan (Education)
- **Universitas Nusa Mandiri (2024 – 2028 Est.):** S1 Informatika, Fakultas Teknologi Informasi.
- **SMKS Bhinneka Nusantara (2021 – 2024):** Jurusan Rekayasa Perangkat Lunak (RPL).

### 4.7 Kontak & Saluran Komunikasi (Footer Section)
- **Email Langsung:** `garryhardyansyah23@gmail.com` (disertai tombol salin cepat)
- **Telepon / WhatsApp:** `+62 857-2152-9781`
- **Aksi Cepat:** Tautan langsung kirim WhatsApp, kirim Email, dan unduh dokumen `CV_Gary Hardyansyah.pdf`.

---

## 5. Spesifikasi Persiapan Pengembangan (Preparation Develop)

Bagian ini mendefinisikan prasyarat teknis, konfigurasi *tooling*, struktur direktori, pustaka dependensi, dan langkah konkret sebelum penulisan kode dimulai.

### 5.1 Prasyarat Lingkungan (Environment Prerequisites)
- **Runtime:** Node.js `>= 20.x` (LTS) / `v23.11.0` (Aktif terpasang di sistem pengguna)
- **Package Manager:** `npm` (v10.9.2) atau `bun` (v1.x)
- **Version Control:** `git` (v2.51.0 terpasang)
- **Target Browser Pengujian Utama:** **macOS Safari / WebKit** (sesuai *user preference*) serta Chrome/Firefox.

### 5.2 Perintah Inisialisasi Proyek (Bootstrap Command)
Proyek akan diinisialisasi langsung di direktori kerja menggunakan opsi non-interaktif:
```bash
npx create-next-app@latest . \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --use-npm
```

### 5.3 Paket Dependensi Tambahan (Dependencies)
```bash
npm install lucide-react framer-motion clsx tailwind-merge
```
- `lucide-react`: Ikon teknis garis halus (stroke 1.5px) untuk GitHub, LinkedIn, Mail, External Link, Download, dan status indikator.
- `framer-motion`: Animasi transisi halus pada *circular progress gauges* (hitung mundur/progres), *fade-in entrance*, dan efek *hover grid*.
- `clsx` & `tailwind-merge`: Utilitas `cn()` untuk penggabungan class Tailwind yang dinamis dan aman.

### 5.4 Penanganan Tipografi (Fonts Setup)
Memastikan font **Mona Sans** dan **Monaspace Neon** (atau fallback `Inter` & `JetBrains Mono`) dimuat tanpa pergeseran tata letak (*zero CLS*):
- Opsi A (Recommended Next.js Font): Menggunakan `next/font/google` untuk `Inter` & `JetBrains_Mono` sebagai basis sistem yang sangat stabil.
- Opsi B (Self-hosted GitHub Typeface): Menempatkan font variable `.woff2` resmi dari repo GitHub Mona Sans & Monaspace di dalam folder `src/app/fonts/` dan dimuat via `next/font/local`.

### 5.5 Struktur Direktori Proyek (`src/` Architecture)
```
portfolio/
├── public/
│   ├── CV_Gary_Hardyansyah.pdf      # Salinan berkas CV resmi untuk download
│   ├── favicon.ico
│   └── og-preview.png               # Banner OpenGraph (1200x630)
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root layout (Metadata, Google/Local Fonts, HTML lang)
│   │   ├── page.tsx                  # Halaman tunggal utama Bento Grid
│   │   └── globals.css               # Definisi variabel CSS tema & custom base styles
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx            # Header status bar & quick links
│   │   │   └── GridContainer.tsx     # Pembungkus bento grid bergaris 1px
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx       # Dual-tone "hi-Gary" & summary
│   │   │   ├── MetricGauges.tsx      # 3 circular progress gauges
│   │   │   ├── ProjectsBento.tsx     # Kartu showcase proyek & kompetisi
│   │   │   ├── ExperienceLog.tsx     # Riwayat pengajar & magang bergaya git commit
│   │   │   ├── SkillsMatrix.tsx      # Grid chip keahlian monospaced
│   │   │   └── ContactFooter.tsx     # Footer kontak & unduh resume
│   │   └── ui/
│   │       ├── Badge.tsx             # Status pill "#FEF8CA" + dot "#F2C756"
│   │       ├── GaugeCircle.tsx       # Komponen busur SVG progress ring
│   │       └── HairlineDivider.tsx   # Garis pemisah 1px solid "#D3D9D4"
│   ├── data/
│   │   └── resume-data.ts            # Data terpusat (selaras dengan isi CV Gary)
│   └── lib/
│       └── utils.ts                  # Helper function cn()
├── tailwind.config.ts                # Konfigurasi custom colors & fonts
├── tsconfig.json
├── package.json
└── prd.md
```

### 5.6 Konfigurasi Token Desain (`tailwind.config.ts`)
```typescript
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
        "grid-border": "#D3D9D4",
        "text-primary": "#161511",
        "text-muted": "#5A635C",
        "accent-green": "#3D7D3F",
        "badge-bg": "#FEF8CA",
        "badge-dot": "#F2C756",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
```

### 5.7 Konvensi Kode (Coding Conventions)
1. **Server Components by Default:** Semua section adalah React Server Components (RSC) untuk performa instan, kecuali komponen interaktif (`MetricGauges`, copy-to-clipboard button, dan mobile drawer) yang ditandai dengan `"use client"`.
2. **Pemisahan Data dan Tampilan:** Seluruh teks, daftar skill, dan pengalaman kerja disimpan dalam file `src/data/resume-data.ts`. Hal ini memudahkan pembaruan CV di masa mendatang tanpa menyentuh JSX.
3. **Desain Aksesibilitas:** Semua tombol dan tautan memiliki atribut `aria-label`, target tautan luar menggunakan `rel="noopener noreferrer"`.
4. **Safari Compatibility:** Menghindari penggunaan CSS property eksperimental yang belum stabil di WebKit/Safari.

---

## 6. Non-Functional Requirements & Performance Targets

1. **Kecepatan & Core Web Vitals:**
   - LCP < 1.0 detik di jaringan 4G.
   - 0 Layout Shift (CLS = 0).
   - Nilai Lighthouse Performance: 98–100.
2. **Kesesuaian Browser (Cross-Browser):**
   - Diuji dan dioptimasi sempurna pada **macOS Safari / WebKit** serta browser berbasis Chromium dan Firefox.
3. **Aksesibilitas (WCAG 2.1 AA):**
   - Rasio kontras teks `#161511` terhadap `#EAEDEC` adalah ~13:1 (jauh di atas batas minimum 4.5:1).
   - Teks sekunder `#5A635C` terhadap `#EAEDEC` memiliki rasio kontras 5.2:1 (lulus WCAG AA).

---

## 7. Rencana Tahapan Eksekusi & Pre-Dev Checklist

### 7.1 Pre-Development Checklist
- [x] Analisis desain, font, dan warna dari screenshot acuan (`Screenshot 2026-10-28 at 21.23.28.png`)
- [x] Ekstraksi dan pemetaan lengkap data CV (`CV_Gary Hardyansyah.pdf`)
- [x] Penentuan framework (Next.js 14/15 App Router + TypeScript + Tailwind)
- [x] Penyusunan spesifikasi setup & arsitektur direktori (PRD Section 5)
- [x] Inisialisasi proyek Next.js di direktori kerja
- [x] Instalasi paket dependensi (`lucide-react`, `framer-motion`, `clsx`, `tailwind-merge`)
- [x] Konfigurasi Tailwind tokens & CSS variabel tema di `globals.css`
- [x] Salin berkas `CV_Gary Hardyansyah.pdf` ke folder `public/` sebagai aset download
- [x] Pembuatan berkas data terpusat `src/data/resume-data.ts`
- [x] Pembangunan komponen-komponen antarmuka per section (Navbar, Hero, Metrics, Experience, Projects, Skills, Education, Contact)
- [x] Pengujian build statis bebas error dan pengujian visual di WebKit/Safari (Desktop & Mobile)
