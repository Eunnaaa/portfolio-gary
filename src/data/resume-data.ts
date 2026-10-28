export interface MetricItem {
  number: string;
  unit: string;
  label: string;
  sublabel: string;
  progressPercent: number;
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
  image?: string;
  imageType?: "landscape" | "portrait";
  gallery?: string[];
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
  shortGreeting: "Gary Hardyansyah",
  headline: "Junior Fullstack Developer & Mahasiswa Informatika",
  roleIdentifier: "fullstack-systems-engineer/",
  location: "Bekasi, Indonesia",
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
    githubUrl: "https://github.com/Eunnaaa",
    instagramUrl: "https://www.instagram.com/garyhrdynsyh/",
    linkedinUrl: "https://www.linkedin.com/in/garyhardyansyah/",
    cvDownloadUrl: "/CV_Gary_Hardyansyah.pdf",
  },
  bio: {
    summary:
      "Mahasiswa Informatika semester 5 di Universitas Nusa Mandiri dengan fondasi kuat di bidang Software Development",
    subtext:
      "Sebagai Junior Software Engineer, saya fokus membangun aplikasi, web dan sistem yang andal, efisien, serta mudah dikembangkan. Memecahkan masalah nyata melalui penerapan praktik software engineering modern.",
  },

  metrics: [
    {
      number: "4+",
      unit: "Years",
      label: "Code Foundation",
      sublabel: "Pengalaman Sejak SMK hingga sekarang",
      progressPercent: 75,
    },
    {
      number: "7+",
      unit: "Stacks",
      label: "Frameworks & Libraries",
      sublabel:  "React, Laravel, Next, Springboot, etc.",
      progressPercent: 88,
    },
    {
      number: "10+",
      unit: "Projects",
      label: "Work",
      sublabel: "Handling project beginner level",
      progressPercent: 92,
    },
  ] as MetricItem[],

  experiences: [
    {
      role: "Pengajar Freelance",
      institution: "SMKS Bhinneka Nusantara",
      location: "Bekasi, Indonesia",
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
      role: "Backend Developer (Kompetisi)",
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
      id: "kedai-ku",
      title: "Kedai-Ku (Point of Sale & CRM)",
      category: "Multi-Tenant SaaS / F&B POS",
      status: "Production Ready",
      statusType: "live",
      image: "/projects/kedai-ku.png",
      imageType: "landscape",
      description:
        "Platform Point of Sale multi-tenant modern yang dirancang untuk mengelola seluruh transaksi kasir, manajemen inventaris, operasional dapur, CRM loyalitas, dan pembukuan keuangan bisnis ritel serta F&B secara offline maupun online.",
      architecturePoints: [
        "Arsitektur modern Next.js 15, React 19, TypeScript, dan shadcn UI",
        "Type-safe data layer dengan Drizzle ORM dan PostgreSQL Supabase",
        "Sistem otentikasi multi-tenant terisolasi berbasis Better Auth",
      ],
      tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Drizzle ORM", "Supabase", "Better Auth"],
      links: [
        { label: "project-details/", href: "#contact", type: "docs" },
      ],
    },
    {
      id: "padelhub",
      title: "PadelHub (Court Reservation Platform)",
      category: "Sports Booking & Venue ERP",
      status: "Production Ready",
      statusType: "live",
      image: "/projects/padelhub.png",
      imageType: "landscape",
      description:
        "Platform reservasi lapangan padel digital yang memfasilitasi para pengguna untuk mencari serta memesan jadwal bermain secara langsung dan mempermudah pihak pengelola venue mengurus operasional bisnis harian.",
      architecturePoints: [
        "Integrasi monolitik modern Laravel dengan antarmuka interaktif Vue via Inertia.js",
        "Sistem penjadwalan dan reservasi real-time terstruktur",
        "Manajemen basis data relasional PostgreSQL dengan penataan Tailwind CSS",
      ],
      tags: ["Laravel", "Vue.js", "Inertia.js", "Tailwind CSS", "PostgreSQL"],
      links: [
        { label: "project-details/", href: "#contact", type: "docs" },
      ],
    },
    {
      id: "bank-sampah",
      title: "Si Bank Sampah (Community Waste ERP)",
      category: "Environmental ERP & Community Web",
      status: "Active Deployment",
      statusType: "live",
      image: "/projects/sibank-sampah.png",
      imageType: "landscape",
      description:
        "Platform sistem web operasional lingkungan rukun warga untuk memfasilitasi pencatatan setoran timbangan petugas lapangan, pemeriksaan saldo mandiri warga, manajemen katalog harga komoditas, dan rekapitulasi laporan bulanan.",
      architecturePoints: [
        "Tumpukan teknologi modern TanStack Start, React, dan TypeScript berbasis Vite",
        "Drizzle ORM untuk query data setoran dan saldo warga secara type-safe",
        "Penyimpanan cloud terintegrasi dengan PostgreSQL Supabase",
      ],
      tags: ["TanStack Start", "React", "TypeScript", "Drizzle ORM", "Vite", "Supabase"],
      links: [
        { label: "project-details/", href: "#contact", type: "docs" },
      ],
    },
    {
      id: "eventku",
      title: "EventKu (Event Booking & QR Ticket)",
      category: "Mobile App & Event Ticketing",
      status: "Production Ready",
      statusType: "live",
      image: "/projects/eventku.png",
      imageType: "portrait",
      description:
        "Aplikasi pemesanan dan manajemen event berbasis Flutter dan Google Firebase yang memungkinkan pengguna menemukan berbagai seminar edukasi, memesan tiket instan ber-QR code, serta mengawasi data kehadiran peserta secara real-time.",
      architecturePoints: [
        "Aplikasi cross-platform dibangun dengan Flutter dan bahasa Dart",
        "Backend real-time serverless bertenaga Google Firebase & Auth",
        "Sistem validasi tiket instan ber-QR code terintegrasi",
      ],
      tags: ["Flutter", "Dart", "Google Firebase", "QR Code Scanner", "Mobile"],
      links: [
        { label: "project-details/", href: "#contact", type: "docs" },
      ],
    },
    {
      id: "uang-ku",
      title: "UangKu (Personal Finance & Offline Sync)",
      category: "iOS Mobile App & Offline-First",
      status: "Production Ready",
      statusType: "live",
      image: "/projects/uang-ku.png",
      imageType: "portrait",
      gallery: [
        "/projects/uangku2.png",
        "/projects/uang-ku.png",
        "/projects/uangku3.png",
      ],
      description:
        "Aplikasi pencatatan keuangan personal iOS mewah dan elegan untuk mencatat pengeluaran, pemasukan, transfer saldo, serta pemantauan anggaran harian secara cepat dan aman dengan kapabilitas sinkronisasi data luring yang andal.",
      architecturePoints: [
        "Mobile client dibangun dengan React Native, Expo, dan SQLite lokal",
        "Backend performa tinggi dengan Bun, ElysiaJS, PostgreSQL, dan Drizzle ORM",
        "Mekanisme sinkronisasi data luring (offline-first) yang mulus dan cepat",
      ],
      tags: ["React Native", "Expo", "SQLite Lokal", "TypeScript", "Bun", "ElysiaJS", "Drizzle ORM"],
      links: [
        { label: "project-details/", href: "#contact", type: "docs" },
      ],
    },
  ] as ProjectItem[],

  skills: [
    {
      category: "Programming Languages",
      skills: [
        { name: "JavaScript", level: "Advanced" },
        { name: "Golang", level: "Advanced" },
        { name: "Dart", level: "Advance" },
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
        { name: "React Native", level: "Proficient" },
        { name: "Next.js", level: "Proficient" },
        { name: "Laravel", level: "Proficient" },
        { name: "Vue.js", level: "Intermediate" },
        { name: "Express.js", level: "Proficient" },
        { name: "Elysia.js", level: "Proficient" },
        { name: "Flask", level: "Intermediate" },
        { name: "Spring Boot", level: "Foundational" },
        { name: "Flutter", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Advanced" },
      ],
    },
    {
      category: "Databases & Architecture",
      skills: [
        { name: "MySQL / PostgreSQL", level: "Proficient" },
        { name: "RESTful API Design", level: "Advanced" },
        { name: "Server-Side Architecture", level: "Proficient" },
        { name: "Git & GitHub Workflow", level: "Advanced" },
      ],
    },
    {
      category: "Design, Content & Tools",
      skills: [
        { name: "Canva", level: "Advanced" },
        { name: "CapCut ", level: "Proficient" },
        { name: "Copywriting", level: "Proficient" },
        { name: "Content Research", level: "Advanced" },
      ],
    },
  ] as SkillCategory[],

  education: [
    {
      degree: "S1 Informatika",
      institution: "Universitas Nusa Mandiri",
      period: "2024 – 2028",
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
