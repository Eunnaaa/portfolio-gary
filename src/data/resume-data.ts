export interface MetricItem {
  number: string;
  unit: string;
  label: string;
  sublabel: string;
  progressPercent: number; // For SVG gauge arc
}

export interface ExperienceItem {
  role: string;
  institution: string;
  location: string;
  period: string;
  badge?: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  status: string;
  statusType: "live" | "competition" | "internal";
  description: string;
  architecturePoints: string[];
  tags: string[];
  links?: {
    label: string;
    href: string;
    type: "github" | "live" | "docs";
  }[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level?: string }[];
}

export const RESUME_DATA = {
  name: "Gary Hardyansyah",
  shortGreeting: "Gary",
  headline: "Junior Fullstack Developer & Mahasiswa Informatika",
  roleIdentifier: "fullstack-systems-engineer/",
  location: "Jakarta, Indonesia",
  timezone: "UTC+7 (WIB)",
  availability: {
    status: "Open for Opportunities",
    text: "Tersedia untuk Magang, Full-time, & Proyek Freelance",
    badgeLabel: "Available for Hire",
  },
  contact: {
    email: "garryhardyansyah23@gmail.com",
    phone: "0857-2152-9781",
    whatsappUrl: "https://wa.me/6285721529781?text=Halo%20Gary,%20saya%20tertarik%20dengan%20portfolio%20Anda",
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    cvDownloadUrl: "/CV_Gary_Hardyansyah.pdf",
  },
  bio: {
    summary:
      "Mahasiswa Informatika semester 5 di Universitas Nusa Mandiri dengan fondasi kuat dari Rekayasa Perangkat Lunak (RPL). Memiliki keahlian terintegrasi mulai dari perancangan arsitektur server-side & RESTful API hingga antarmuka web modern dengan Next.js & Laravel.",
    subtext:
      "Berpengalaman nyata sebagai instruktur teknis coding di SMK kejuruan dan Backend Developer pada kompetisi nasional. Disiplin, komunikatif, dan berdedikasi membangun perangkat lunak yang andal.",
  },

  // 3 Circular Metrics inspired by the GitHub Universe countdown gauges
  metrics: [
    {
      number: "3+",
      unit: "Years",
      label: "RPL & Code Foundation",
      sublabel: "Sejak SMK RPL (2021) hingga S1",
      progressPercent: 75,
    },
    {
      number: "7+",
      unit: "Stacks",
      label: "Frameworks & Libraries",
      sublabel: "Laravel, React, Next, Flask, etc.",
      progressPercent: 88,
    },
    {
      number: "100+",
      unit: "Siswa",
      label: "Bimbingan & Mentorship",
      sublabel: "Praktik Kejuruan Siswa RPL",
      progressPercent: 92,
    },
  ] as MetricItem[],

  experiences: [
    {
      role: "Pengajar Freelance (Informatika & Praktik Kejuruan RPL)",
      institution: "SMKS Bhinneka Nusantara",
      location: "Bogor, Indonesia",
      period: "Feb 2025 – Jul 2026",
      badge: "Mentorship",
      description:
        "Memimpin pembelajaran mata pelajaran Informatika dan memfasilitasi laboratorium praktik kejuruan untuk siswa kelas 11 Rekayasa Perangkat Lunak.",
      highlights: [
        "Menyampaikan materi fundamental web development, logika algoritma, dan pemrograman terstruktur.",
        "Membimbing siswa dalam penugasan proyek coding nyata di laboratorium komputer.",
        "Mengasah keterampilan leadership, kesabaran mentoring, dan komunikasi teknis yang mudah dipahami.",
      ],
      tags: ["Teaching", "Web Dev Mentoring", "Algorithms", "Software Engineering"],
    },
    {
      role: "Backend Developer (Kompetisi PIKMI)",
      institution: "Pusat Kreativitas Mahasiswa",
      location: "Jakarta, Indonesia",
      period: "Nov 2024 – Feb 2025",
      badge: "Competition",
      description:
        "Bertanggung jawab atas arsitektur backend dan infrastruktur data pada kompetisi mahasiswa tingkat nasional.",
      highlights: [
        "Merancang arsitektur server-side dan endpoints REST API yang modular serta aman.",
        "Membuat skema database relasional teroptimasi untuk integritas data transaksi tinggi.",
        "Berkolaborasi aktif dengan tim frontend dan UI/UX melalui Git version control.",
      ],
      tags: ["RESTful API", "Database Architecture", "Server-Side", "Git Collaboration"],
    },
    {
      role: "Content Editor (Magang)",
      institution: "Mandiri Digital Universe",
      location: "Jakarta, Indonesia",
      period: "Jan 2023 – Jun 2023",
      badge: "Media & Growth",
      description:
        "Mengelola produksi media digital, konten edukasi teknologi, dan copywriting untuk kanal media sosial @mandiri_digiverse.",
      highlights: [
        "Memproduksi aset grafis edukatif (flyer, carousel, reels) yang meningkatkan interaksi audiens.",
        "Melakukan riset topik tren teknologi dan menyusun copywriting yang komunikatif dan persuasif.",
        "Mengembangkan kepekaan desain visual, estetika tata letak, dan komunikasi publik.",
      ],
      tags: ["Content Research", "Visual Communication", "Copywriting", "Social Strategy"],
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: "pikmi-backend",
      title: "PIKMI Core Server & API Engine",
      category: "Backend Architecture",
      status: "Competition Finalist",
      statusType: "competition",
      description:
        "Infrastruktur backend dan layanan data terpusat yang dirancang untuk platform kompetisi mahasiswa nasional, berfokus pada kecepatan response dan keamanan API.",
      architecturePoints: [
        "Desain REST API standar industri dengan enkripsi token autentikasi.",
        "Optimasi query database relasional untuk respon request di bawah 100ms.",
        "Dokumentasi API terstruktur untuk integrasi mulus dengan tim frontend.",
      ],
      tags: ["PHP/Laravel", "REST API", "Database Design", "Postman", "Git"],
      links: [
        { label: "architecture/", href: "#", type: "docs" },
        { label: "repository/", href: "#", type: "github" },
      ],
    },
    {
      id: "rpl-learning-lab",
      title: "RPL Vocational Practical Modules",
      category: "Education & Tooling",
      status: "Active Production",
      statusType: "live",
      description:
        "Kompilasi kurikulum modul praktikum interaktif dan sistem latihan pemrograman berbasis proyek nyata yang digunakan oleh siswa kelas 11 Rekayasa Perangkat Lunak.",
      architecturePoints: [
        "Materi terstruktur dari HTML/CSS modern, JavaScript DOM, hingga pengantar backend.",
        "Studi kasus pembuatan aplikasi web mini dari nol sampai siap publish.",
        "Panduan debugging dan clean-code best practices untuk siswa pemula.",
      ],
      tags: ["Informatika", "Curriculum Design", "HTML/CSS/JS", "Mentoring"],
      links: [
        { label: "modules/", href: "#", type: "docs" },
      ],
    },
    {
      id: "neo-fullstack-starter",
      title: "Next.js & Spring/Laravel Enterprise Stack",
      category: "Fullstack Exploration",
      status: "Open Source",
      statusType: "live",
      description:
        "Arsitektur referensi modern yang menggabungkan Next.js App Router pada sisi frontend dengan backend modular bertenaga Spring Boot / Laravel.",
      architecturePoints: [
        "Server-Side Rendering (SSR) & Server Components untuk performa SEO maksimal.",
        "Type-safe API contract antara client dan backend endpoint.",
        "Sistem desain modular Bento Grid dengan Tailwind CSS.",
      ],
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Spring Boot", "Laravel"],
      links: [
        { label: "source/", href: "#", type: "github" },
        { label: "demo/", href: "#", type: "live" },
      ],
    },
  ] as ProjectItem[],

  skills: [
    {
      category: "Programming Languages",
      skills: [
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "PHP", level: "Proficient" },
        { name: "Python", level: "Intermediate" },
        { name: "Java", level: "Intermediate" },
        { name: "HTML5 & CSS3", level: "Advanced" },
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "React", level: "Proficient" },
        { name: "Next.js (App Router)", level: "Proficient" },
        { name: "Laravel", level: "Proficient" },
        { name: "Vue.js", level: "Intermediate" },
        { name: "Flask", level: "Intermediate" },
        { name: "Spring Boot", level: "Foundational" },
        { name: "Flutter", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Advanced" },
      ],
    },
    {
      category: "Databases & Architecture",
      skills: [
        { name: "MySQL / Relational DB", level: "Proficient" },
        { name: "RESTful API Design", level: "Advanced" },
        { name: "Server-Side Architecture", level: "Proficient" },
        { name: "Git & GitHub Workflow", level: "Advanced" },
      ],
    },
    {
      category: "Design, Content & Tools",
      skills: [
        { name: "Canva Pro", level: "Advanced" },
        { name: "CapCut Video Editing", level: "Proficient" },
        { name: "Technical Copywriting", level: "Proficient" },
        { name: "Content Research", level: "Advanced" },
        { name: "VS Code & CLI Tools", level: "Advanced" },
      ],
    },
  ] as SkillCategory[],

  education: [
    {
      degree: "S1 Informatika",
      institution: "Universitas Nusa Mandiri",
      period: "2024 – 2028 (Perkiraan Lulus)",
      status: "Mahasiswa Aktif (Semester 5)",
      notes: "Fakultas Teknologi Informasi, fokus pada rekayasa perangkat lunak dan arsitektur sistem.",
    },
    {
      degree: "Rekayasa Perangkat Lunak (RPL)",
      institution: "SMKS Bhinneka Nusantara",
      period: "2021 – 2024",
      status: "Lulus",
      notes: "Dasar kejuruan mendalam: algoritma pemrograman, basis data, dan pengembangan web & mobile.",
    },
  ],
};
