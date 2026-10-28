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
  tagline?: string;
  role?: string;
  timeline?: string;
  problemStatement?: string;
  solution?: string;
  features?: { title: string; description: string }[];
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
      tagline:
        "Platform Point of Sale modern untuk bisnis ritel & F&B dengan arsitektur multi-tenant, transaksi kasir instan, dan inventaris terintegrasi.",
      role: "Fullstack Developer & System Architect",
      timeline: "2024 - 2025",
      description:
        "Platform Point of Sale multi-tenant modern yang dirancang untuk mengelola seluruh transaksi kasir, manajemen inventaris, operasional dapur, CRM loyalitas, dan pembukuan keuangan bisnis ritel serta F&B secara offline maupun online.",
      problemStatement:
        "Banyak pelaku usaha ritel dan F&B terbebani oleh sistem POS konvensional yang kaku, lisensi per-outlet yang mahal, antrean kasir lambat saat jam sibuk, serta minimnya isolasi data saat mengelola banyak cabang secara bersamaan.",
      solution:
        "Kedai-Ku dibangun dengan arsitektur modern Next.js 15, Drizzle ORM, dan PostgreSQL Supabase. Menggunakan isolasi multi-tenant yang aman berbasis Better Auth, alur kasir berkecepatan tinggi dengan pintasan keyboard, manajemen dapur (KDS) real-time, dan pemotongan stok bahan baku otomatis.",
      features: [
        {
          title: "Multi-Tenant Data Isolation",
          description: "Pemisahan basis data dan hak akses antar gerai/toko secara aman dengan enkripsi sesi Better Auth dan Drizzle ORM.",
        },
        {
          title: "High-Speed Cashier (POS)",
          description: "Antarmuka transaksi kasir kilat dengan dukungan shortcut keyboard, pemindai barcode, dan pencetakan struk termal otomatis.",
        },
        {
          title: "Kitchen Display System (KDS)",
          description: "Layar monitor pesanan real-time di dapur dengan indikator durasi masak dan status penyajian hidangan instan.",
        },
        {
          title: "Automated Recipe & Inventory",
          description: "Pelacakan stok bahan baku yang berkurang secara otomatis dan akurat setiap kali menu makanan/minuman terjual.",
        },
        {
          title: "Customer CRM & Loyalty Points",
          description: "Pencatatan riwayat transaksi pelanggan setia serta akumulasi poin rewards untuk mendongkrak retensi belanja.",
        },
        {
          title: "Financial Analytics & Close Register",
          description: "Visualisasi omzet harian, laba kotor/bersih, dan audit rekonsiliasi kas kasir (close register) otomatis tanpa selisih.",
        },
      ],
      architecturePoints: [
        "Arsitektur modern Next.js 15 App Router, React 19, TypeScript, dan antarmuka shadcn UI",
        "Type-safe data layer dengan Drizzle ORM dan PostgreSQL Supabase terindeks tinggi",
        "Sistem otentikasi multi-tenant terisolasi berbasis Better Auth dengan proteksi peran berlapis",
        "Desain antarmuka responsif dan aksesibel sesuai standar WCAG AA dengan Tailwind CSS",
      ],
      tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Drizzle ORM", "Supabase", "Better Auth", "shadcn UI"],
      links: [
        { label: "project-details/", href: "/projects/kedai-ku", type: "docs" },
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
      tagline:
        "Platform reservasi lapangan padel digital yang memadukan pengalaman booking pemain real-time dengan tata kelola venue olahraga terpadu.",
      role: "Fullstack Developer",
      timeline: "2024",
      description:
        "Platform reservasi lapangan padel digital yang memfasilitasi para pengguna untuk mencari serta memesan jadwal bermain secara langsung dan mempermudah pihak pengelola venue mengurus operasional bisnis harian.",
      problemStatement:
        "Ledakan tren olahraga padel menyebabkan pengelola venue kewalahan menerima pemesanan via chat manual. Jadwal sering tumpang tindih (double-booking), pembayaran sulit terlacak, dan pendataan sewa alat olahraga berantakan.",
      solution:
        "PadelHub menyatukan arsitektur monolitik Laravel dengan interaktivitas Vue via Inertia.js. Sistem menghadirkan grid pemilihan lapangan real-time dengan kunci jadwal transaksional (concurrency lock), invoice digital otomatis, dan integrasi kasir sewa raket.",
      features: [
        {
          title: "Interactive Slot Grid Booking",
          description: "Pemilihan slot waktu dan lapangan secara visual dengan pencegahan bentrok jadwal pemesanan secara otomatis.",
        },
        {
          title: "Multi-Court Venue Management",
          description: "Pengaturan jadwal operasional, penyesuaian tarif dinamis (peak hours vs reguler), serta jadwal perawatan lapangan berkala.",
        },
        {
          title: "Digital Invoicing & Check-in Pass",
          description: "Penerbitan kode reservasi dan invoice digital yang siap diverifikasi di resepsionis lapangan dalam hitungan detik.",
        },
        {
          title: "Community Matchmaking",
          description: "Fasilitas mempertemukan pemain untuk bermain bersama berdasarkan tingkat keahlian (skill level) dan preferensi jam main.",
        },
        {
          title: "Equipment Rental & F&B Add-ons",
          description: "Modul pemesanan sewa raket, bola, dan minuman olahraga yang langsung tergabung ke dalam rincian tagihan reservasi.",
        },
        {
          title: "Venue Occupancy Analytics",
          description: "Dashboard analitik tingkat okupansi lapangan per jam dan laporan rekapitulasi pendapatan harian pemilik venue.",
        },
      ],
      architecturePoints: [
        "Integrasi monolitik modern Laravel 11 dengan antarmuka interaktif Vue 3 via Inertia.js",
        "Sistem kontrol konkurensi PostgreSQL untuk memastikan tidak terjadi reservasi ganda pada slot yang sama",
        "Penataan antarmuka responsif Tailwind CSS dengan tata letak adaptif mobile dan desktop",
        "Arsitektur database relasional PostgreSQL yang dinormalisasi untuk kecepatan pencarian jadwal",
      ],
      tags: ["Laravel", "Vue.js", "Inertia.js", "Tailwind CSS", "PostgreSQL", "RESTful API"],
      links: [
        { label: "project-details/", href: "/projects/padelhub", type: "docs" },
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
      tagline:
        "Platform web operasional lingkungan rukun warga untuk tata kelola setoran timbangan sampah, saldo mandiri warga, dan transparansi daur ulang.",
      role: "Fullstack Engineer",
      timeline: "2024",
      description:
        "Platform sistem web operasional lingkungan rukun warga untuk memfasilitasi pencatatan setoran timbangan petugas lapangan, pemeriksaan saldo mandiri warga, manajemen katalog harga komoditas, dan rekapitulasi laporan bulanan.",
      problemStatement:
        "Pencatatan bank sampah di lingkungan warga sebelumnya dilakukan secara manual menggunakan buku kas fisik, memicu lambatnya pembaruan saldo tabungan warga, risiko salah hitung timbangan petugas, serta susahnya menyusun laporan audit RW.",
      solution:
        "Si Bank Sampah dibangun menggunakan tumpukan teknologi modern TanStack Start, React, dan TypeScript berbasis Vite. Memfasilitasi input setoran lapangan kilat dengan kalkulasi nilai rupiah otomatis sesuai katalog komoditas terkini, serta portal cek saldo mandiri warga yang transparan.",
      features: [
        {
          title: "Field Weighing Fast Entry",
          description: "Antarmuka timbangan petugas lapangan yang gesit untuk mencatat berbagai kategori sampah (plastik, kertas, logam, jelantah).",
        },
        {
          title: "Dynamic Commodity Catalog",
          description: "Pengelolaan daftar harga beli komoditas per kilogram yang fleksibel disesuaikan dengan fluktuasi harga pengepul.",
        },
        {
          title: "Citizen Self-Service Portal",
          description: "Akses mandiri bagi warga untuk memeriksa riwayat setoran sampah, akumulasi saldo tabungan, dan mutasi penarikan dana.",
        },
        {
          title: "Automated Math Calculations",
          description: "Kalkulasi matematis bobot timbangan ke konversi rupiah secara real-time tanpa celah kesalahan kalkulator manual.",
        },
        {
          title: "Monthly Environmental Audit Report",
          description: "Rekapitulasi berkala volume tonase sampah yang berhasil didaur ulang serta laporan buku kas umum untuk pengurus RW.",
        },
        {
          title: "Role-Based Administrative Access",
          description: "Pembagian peran hierarkis untuk Pengurus RW, Petugas Penimbang Lapangan, Bendahara, dan Warga Lingkungan.",
        },
      ],
      architecturePoints: [
        "Tumpukan teknologi modern TanStack Start, React 19, dan TypeScript bertenaga Vite",
        "Type-safe database layer dengan Drizzle ORM untuk query data setoran dan saldo warga secara instan",
        "Penyimpanan cloud terintegrasi dengan PostgreSQL Supabase yang andal dan aman",
        "Optimistic UI updates untuk pengalaman pencatatan data timbangan yang responsif tanpa lag",
      ],
      tags: ["TanStack Start", "React", "TypeScript", "Drizzle ORM", "Vite", "Supabase", "Tailwind CSS"],
      links: [
        { label: "project-details/", href: "/projects/bank-sampah", type: "docs" },
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
      gallery: [
        "/projects/eventku2.png",
        "/projects/eventku.png",
        "/projects/eventku3.png",
      ],
      tagline:
        "Aplikasi mobile pemesanan tiket seminar edukasi dan workshop berbasis Flutter dengan tiket digital ber-QR code dan pemindai kehadiran instan.",
      role: "Mobile Application Engineer",
      timeline: "2024",
      description:
        "Aplikasi pemesanan dan manajemen event berbasis Flutter dan Google Firebase yang memungkinkan pengguna menemukan berbagai seminar edukasi, memesan tiket instan ber-QR code, serta mengawasi data kehadiran peserta secara real-time.",
      problemStatement:
        "Panitia seminar sering menghadapi antrean panjang di pintu masuk karena verifikasi tiket kertas manual yang lambat dan rentan duplikasi, sementara peserta membutuhkan tempat terpusat untuk menyimpan tiket digital tanpa khawatir hilang.",
      solution:
        "EventKu dibangun menggunakan Flutter lintas platform dengan backend Firebase. Mengintegrasikan generator QR Code tiket unik anti-duplikasi di aplikasi pengguna dan pemindai kamera real-time bagi panitia yang dapat memvalidasi kehadiran dalam tempo di bawah satu detik.",
      features: [
        {
          title: "Curated Event Discovery",
          description: "Penjelajahan seminar teknologi, bisnis, dan edukasi dengan filter tanggal, kategori topik, dan status ketersediaan kursi.",
        },
        {
          title: "Instant Encrypted QR Ticket",
          description: "Penerbitan tiket digital langsung ke ponsel dengan barcode/QR code berenkripsi unik untuk keamanan tiket maksimal.",
        },
        {
          title: "High-Speed Camera Scanner",
          description: "Pemindai tiket kamera berkecepatan tinggi bagi panitia acara di pintu masuk untuk validasi check-in instan.",
        },
        {
          title: "Live Attendance Dashboard",
          description: "Pemantauan kuota kursi tersisa dan jumlah peserta yang telah hadir di lokasi secara real-time bagi administrator.",
        },
        {
          title: "Saved Events & Notification Reminders",
          description: "Fitur simpan daftar seminar favorit serta notifikasi pengingat jadwal otomatis sebelum event diselenggarakan.",
        },
        {
          title: "Digital Receipt & Order History",
          description: "Arsip riwayat pemesanan tiket yang rapi dan dapat diakses kembali kapan saja bahkan saat offline.",
        },
      ],
      architecturePoints: [
        "Aplikasi mobile lintas platform dibangun menggunakan Flutter dan bahasa pemrograman Dart",
        "Backend real-time serverless bertenaga Google Firebase (Firestore, Authentication, dan Cloud Functions)",
        "Sistem validasi tiket instan ber-QR code dengan enkripsi payload anti-duplikasi tiket",
        "Arsitektur antarmuka responsif 60fps dengan transisi halus dan pengalaman pengguna mobile yang modern",
      ],
      tags: ["Flutter", "Dart", "Google Firebase", "QR Code Scanner", "Mobile Development", "Cross-Platform"],
      links: [
        { label: "project-details/", href: "/projects/eventku", type: "docs" },
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
      tagline:
        "Aplikasi pencatatan keuangan personal iOS mewah dan elegan dengan arsitektur offline-first, sinkronisasi cloud kilat, dan analitik anggaran komprehensif.",
      role: "Mobile Engineer & Backend Architect",
      timeline: "2024 - 2025",
      description:
        "Aplikasi pencatatan keuangan personal iOS mewah dan elegan untuk mencatat pengeluaran, pemasukan, transfer saldo, serta pemantauan anggaran harian secara cepat dan aman dengan kapabilitas sinkronisasi data luring yang andal.",
      problemStatement:
        "Aplikasi pencatatan finansial umumnya lambat dibuka saat berada di area bersinyal buruk atau offline, sementara pengguna butuh mencatat pengeluaran secara cepat saat di kasir sebelum lupa rincian transaksinya.",
      solution:
        "UangKu menerapkan paradigma offline-first menggunakan React Native, Expo, dan SQLite lokal di ponsel pengguna, dihubungkan ke backend performa tinggi bertenaga Bun dan ElysiaJS. Transaksi tersimpan instan di perangkat lokal dan disinkronkan secara mulus ke cloud saat jaringan internet tersedia.",
      features: [
        {
          title: "Offline-First Local SQLite",
          description: "Pencatatan transaksi instan tanpa jeda jaringan (sub-2ms) langsung ke basis data SQLite lokal di dalam perangkat.",
        },
        {
          title: "Multi-Wallet & Bank Accounts",
          description: "Pengelompokan kantong keuangan, rekening bank (BCA, Mandiri, dll.), dan e-wallet (GoPay, OVO) dalam satu dashboard rapi.",
        },
        {
          title: "Inflow vs Outflow Visual Analytics",
          description: "Visualisasi perbandingan pemasukan versus pengeluaran bulanan dengan diagram interaktif yang bersih dan mudah dipahami.",
        },
        {
          title: "Category Budgeting & Limit Alerts",
          description: "Penetapan batas pengeluaran per pos anggaran (makanan, transportasi, hiburan) dengan peringatan visual saat mendekati batas.",
        },
        {
          title: "Automated Cloud Sync Engine",
          description: "Mekanisme background sync cerdas yang mendeteksi jaringan internet dan menyelaraskan mutasi data ke cloud secara aman.",
        },
        {
          title: "Premium iOS Design & Haptics",
          description: "Estetika tipografi dan visual iOS modern, kompatibel Dynamic Island, dengan umpan balik getaran haptik responsif.",
        },
      ],
      architecturePoints: [
        "Aplikasi klien mobile dibangun dengan React Native, Expo Framework, dan SQLite lokal terenkripsi",
        "Backend performa tinggi dengan runtime Bun, mikro-framework ElysiaJS, PostgreSQL, dan Drizzle ORM",
        "Mekanisme sinkronisasi data luring (offline-first sync queue) yang tahan konflik dan cepat",
        "Type-safety menyeluruh dari skema basis data lokal, API backend, hingga state antarmuka mobile",
      ],
      tags: ["React Native", "Expo", "SQLite Lokal", "TypeScript", "Bun", "ElysiaJS", "Drizzle ORM", "iOS Development"],
      links: [
        { label: "project-details/", href: "/projects/uang-ku", type: "docs" },
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
      category: "Softskills & etc",
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
