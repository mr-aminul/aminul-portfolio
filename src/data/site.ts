export const site = {
  name: "Aminul Islam",
  shortName: "Aminul",
  role: "Full-Stack Engineer · Automation Specialist",
  headline: "Production platforms, automation, and multi-surface products.",
  location: "Dhaka, Bangladesh",
  email: "aminulislamborhan@gmail.com",
  phone: "+880 1632-257352",
  phoneHref: "tel:+8801632257352",
  whatsapp: "https://wa.me/8801632257352",
  availability: "Open to full-stack roles and select product engagements.",
  tagline:
    "Enterprise systems, digital signage, and full-stack products — shipped end to end.",
  bioShort:
    "Co-founder of Inventive Lab and the engineer behind OneSign. I build platforms hundreds of employees rely on — and products that live on web, mobile, and TV.",
  bio: "Full-stack engineer with hands-on experience delivering production-grade enterprise platforms, web applications, and mobile solutions. Strong in TypeScript, React, Next.js, Node.js, and AWS, with a track record of building scalable internal systems used by 500–700 employees globally — saving organizations $5,000–$10,000 annually by replacing commercial SaaS tools. Co-founder of Inventive Lab Inc (OneSign digital signage). Additional focus on AI-driven automation and Android/Flutter development.",
  avatar: "https://avatars.githubusercontent.com/u/193484955?v=4",
  resumePath: "/resume",
  links: {
    github: "https://github.com/mr-aminul",
    linkedin: "https://www.linkedin.com/in/theaminulislam/",
    lab: "https://inventivelab.bd",
    onesign: "https://onesigntv.com",
    labDemo: "https://inventivelab-website.vercel.app",
  },
} as const;

export const stack = {
  languages: ["TypeScript", "JavaScript", "Python", "Java", "Kotlin"],
  frontend: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  backend: ["Node.js", "Express.js", "Next.js API Routes", "REST APIs", "Go", "GraphQL"],
  data: ["PostgreSQL", "Supabase", "MySQL"],
  cloud: ["AWS (EC2, S3, RDS, Lambda)", "Vercel"],
  platforms: ["Android (Java/Kotlin)", "Android TV", "Flutter"],
  automation: ["n8n", "AI-driven workflows"],
  design: ["Figma", "Adobe XD", "Illustrator"],
} as const;

export const capabilities = [
  {
    title: "Enterprise platforms",
    detail:
      "Design and ship internal systems used by hundreds of employees — OKRs, quality, performance, and attendance — with measurable cost and time savings.",
  },
  {
    title: "Full-stack product delivery",
    detail:
      "TypeScript, React, Next.js, Node.js, PostgreSQL/Supabase, AWS, plus Android/Flutter and TV players when the product needs more than a browser.",
  },
  {
    title: "AI & automation",
    detail:
      "n8n and AI-assisted workflows that cut manual ops, consolidate tools, and give leadership clearer KPI visibility.",
  },
  {
    title: "Multi-surface products",
    detail:
      "Web consoles, investor portals, mobile apps, and digital signage fleets — architecture through UI/UX, backend, and deploy.",
  },
] as const;

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  stack: string[];
  live?: string;
  repo?: string;
  year: string;
  image?: string;
  featured?: boolean;
};

/** Personal / Inventive Lab / client work shown in the main portfolio. */
export const projects: Project[] = [
  {
    title: "OneSign",
    subtitle: "Digital signage platform",
    description:
      "Inventive Lab’s flagship product — turn any TV into a remotely managed display. Live at onesigntv.com; also deployed for UK restaurant-chain signage with web admin + Android TV players.",
    highlights: [
      "Built a full-stack signage platform: Next.js console, Kotlin Android TV player, Flutter client, and Supabase backend with realtime playlist sync.",
      "Device pairing with anonymous TV auth, pairing codes, RLS-scoped ownership, and fleet monitoring.",
      "Live product powering remote, real-time control of displays — including multi-site restaurant deployments.",
    ],
    stack: ["Next.js", "Supabase", "Kotlin", "Android TV", "Flutter", "TypeScript"],
    live: "https://onesigntv.com",
    repo: "https://github.com/Inventive-Lab-Inc/onesign",
    year: "2025–2026",
    image: "/projects/onesign.jpg",
    featured: true,
  },
  {
    title: "CDBL Investor Portal",
    subtitle: "Capital markets platform",
    description:
      "Lead developer for Tech4Time on a multi-module platform for Central Depository Bangladesh Limited (CDBL) — investor, data, document, nominee, and client management plus a companion Android app.",
    highlights: [
      "Owned end-to-end delivery across Investor Portal, Data Portal, Document Management, Nominee Management, and Client Management.",
      "Full stack from system architecture and Figma UX through React/Next.js, Node.js on AWS, and PostgreSQL.",
      "Shipped a companion Android app (Java/Kotlin) integrated with the web platform.",
    ],
    stack: ["TypeScript", "React", "Next.js", "Node.js", "AWS", "PostgreSQL", "Kotlin"],
    year: "2026",
    image: "/projects/cdbl-investor-portal.png",
    featured: true,
  },
  {
    title: "Ukilai",
    subtitle: "Law firm ERP",
    description:
      "Cases, billing, staff, and day-to-day operations for legal teams — a production ERP spanning Next.js UI and a Go GraphQL API.",
    highlights: [
      "Owned full-stack delivery: case workflows, billing surfaces, and shared design tokens across clients.",
      "Split concerns with a Go + GraphQL API so legal ops data stays consistent for staff and partners.",
      "Shipped a deployable Vercel frontend used as the live product surface for firm operations.",
    ],
    stack: ["Next.js", "Go", "GraphQL", "TypeScript"],
    live: "https://ukilai.vercel.app",
    repo: "https://github.com/mr-aminul/law-erp",
    year: "2025–2026",
    image: "/projects/ukilai.png",
    featured: true,
  },
  {
    title: "Diagnostic Center",
    subtitle: "Healthcare portal",
    description:
      "Multi-tenant diagnostic template with a bilingual public site, patient OTP portal, and staff admin for bookings and reports.",
    highlights: [
      "Designed multi-tenant structure so clinics can run branded public + staff experiences from one codebase.",
      "Built patient OTP access and staff admin for bookings, reports, and operational handoff.",
      "Shipped Bangla/English UX so front-desk and patient flows work for local teams.",
    ],
    stack: ["Next.js", "Prisma", "PostgreSQL", "TypeScript"],
    live: "https://diagnostic-center-website-omega.vercel.app",
    repo: "https://github.com/mr-aminul/diagnostic-center-website",
    year: "2025–2026",
    image: "/projects/diagnostic-center.jpg",
    featured: true,
  },
  {
    title: "Auto-Logistic Commerce",
    subtitle: "E-commerce + courier automation",
    description:
      "Full e-commerce platform with browsing, recipes, cart, payments, and automated dispatch via Pathao, Steadfast, and REDX courier APIs.",
    highlights: [
      "Integrated three courier APIs to eliminate manual order processing for the client.",
      "Shipped product catalog, cart, and payment-gateway flows in a single Next.js stack.",
    ],
    stack: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"],
    year: "2025",
    featured: true,
  },
  {
    title: "Invoice Management",
    subtitle: "Billing ops",
    description:
      "Invoice and billing management system for day-to-day financial operations — create, track, and close invoices without spreadsheet chaos.",
    highlights: [
      "Modeled invoice lifecycle UI for create → send → track → settle workflows.",
    ],
    stack: ["Next.js", "TypeScript"],
    live: "https://invoice-management-system-three-chi.vercel.app",
    repo: "https://github.com/mr-aminul/invoice-management-system",
    year: "2025",
    image: "/projects/invoice-management.png",
  },
  {
    title: "Auth Basement",
    subtitle: "Auth starter",
    description:
      "Reusable Supabase auth template with protected routes, app shell, and client-ready env setup.",
    highlights: [
      "Packaged sign-in, session handling, and protected routes as a reusable foundation.",
    ],
    stack: ["React", "Supabase", "Vite", "TypeScript"],
    live: "https://auth-basement.vercel.app",
    repo: "https://github.com/mr-aminul/Auth-Basement",
    year: "2025",
    image: "/projects/auth-basement.png",
  },
  {
    title: "SaaS Basement",
    subtitle: "SaaS starter",
    description:
      "Top-nav SaaS shell with auth, layout primitives, and a clean path from template to product.",
    highlights: [
      "Shipped a reusable app shell so new SaaS products start with navigation, auth, and layout already solved.",
    ],
    stack: ["React", "Supabase", "Vite"],
    live: "https://saas-basement.vercel.app",
    repo: "https://github.com/mr-aminul/SaaS-Basement",
    year: "2025",
    image: "/projects/saas-basement.png",
  },
  {
    title: "Inventive Lab",
    subtitle: "Company site",
    description:
      "Brand and product presence for Inventive Lab Inc — the studio behind OneSign and client systems.",
    highlights: [
      "Built the public marketing site for the studio and product lineup.",
    ],
    stack: ["Next.js", "TypeScript"],
    live: "https://inventivelab-website.vercel.app",
    repo: "https://github.com/mr-aminul/inventivelab-website",
    year: "2025",
    image: "/projects/inventivelab.png",
  },
  {
    title: "QuizMaster",
    subtitle: "Interactive learning",
    description:
      "University quiz platform with PHP + MySQL locally and a live SQLite-backed Vercel demo.",
    highlights: [
      "Delivered quiz creation and attempt flows for classroom use.",
    ],
    stack: ["PHP", "MySQL", "SQLite"],
    live: "https://quizmaster-liard-six.vercel.app",
    repo: "https://github.com/mr-aminul/QuizMaster",
    year: "2025",
    image: "/projects/quizmaster.png",
  },
  {
    title: "Verdana Plant Shop",
    subtitle: "Commerce landing",
    description:
      "Premium indoor plant delivery landing with cart, filters, checkout, and newsletter.",
    highlights: [
      "Shipped a complete storefront landing experience in vanilla HTML/CSS/JS.",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://verdana-plant-shop.vercel.app",
    repo: "https://github.com/mr-aminul/verdana-plant-shop",
    year: "2025",
    image: "/projects/verdana-plant-shop.png",
  },
  {
    title: "Chilirig",
    subtitle: "Product experience",
    description:
      "Polished TypeScript product demo focused on interaction quality and a clean live deploy.",
    highlights: [
      "Built and deployed a self-contained product UI as a public demo.",
    ],
    stack: ["TypeScript"],
    live: "https://chilirig.vercel.app",
    repo: "https://github.com/mr-aminul/chilirig",
    year: "2025",
    image: "/projects/chilirig.jpg",
  },
];

export type ExperienceRole = {
  company: string;
  period: string;
  role: string;
  summary: string;
  contributions: {
    title: string;
    role: string;
    summary: string;
    contributions: string[];
    stack: string[];
  }[];
};

export const experience: ExperienceRole[] = [
  {
    company: "Inventive Lab Inc",
    period: "2025 — Present",
    role: "Co-Founder · Full-Stack Engineer",
    summary:
      "Co-founded a product studio shipping OneSign digital signage and client systems across legal, healthcare, billing, and commerce.",
    contributions: [
      {
        title: "OneSign",
        role: "Founding engineer · product ownership",
        summary:
          "Flagship digital signage at onesigntv.com — web console, Android TV player, and mobile client for remote screen fleets.",
        contributions: [
          "Led monorepo delivery: Next.js dashboard, Supabase backend, Kotlin TV player, and Flutter client.",
          "Implemented TV pairing, device ownership, RLS, and realtime playlist sync.",
          "Deployed for multi-site restaurant and retail screens with resilient media playback.",
        ],
        stack: ["Next.js", "Supabase", "Kotlin", "Android TV", "Flutter"],
      },
      {
        title: "Client systems",
        role: "End-to-end ownership",
        summary:
          "Production apps including Ukilai (law ERP), diagnostic portals, and billing tools.",
        contributions: [
          "Led discovery-to-deploy delivery for ops-heavy client systems.",
          "Built auth/SaaS foundations to shorten time-to-first-feature on new engagements.",
        ],
        stack: ["Next.js", "Go", "PostgreSQL", "Supabase", "Vercel"],
      },
    ],
  },
  {
    company: "NEXT Ventures",
    period: "August 2025 — Present",
    role: "Automation & Software Engineer",
    summary:
      "Architected and delivered enterprise internal platforms used by 500–700 employees globally — replacing commercial SaaS and cutting audit/ops cost.",
    contributions: [
      {
        title: "Internal platforms",
        role: "Full-stack architecture & delivery",
        summary:
          "OKR Management, CQMS, Performance Management, and Attendance Management from scratch.",
        contributions: [
          "Shipped four enterprise-grade platforms used by 500–700 employees globally.",
          "CQMS (AI-powered audit) cut audit time ~50%, doubled capacity, consolidated 4+ tools, and replaced Scorebuddy — $4,000+ annual savings.",
          "Custom builds replaced off-the-shelf SaaS, saving the organization $5,000–$10,000 per year.",
        ],
        stack: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "AWS"],
      },
      {
        title: "BI, AI & automation",
        role: "Dashboards & n8n workflows",
        summary:
          "Leadership visibility into KPIs plus AI-powered automation that reduced manual workload.",
        contributions: [
          "Designed BI dashboards and reporting for real-time operational health.",
          "Deployed n8n automation workflows that boosted cross-team productivity.",
          "Owned full lifecycles: architecture, Figma UX, frontend, backend, and AWS deploy.",
        ],
        stack: ["n8n", "Supabase", "AWS", "Figma"],
      },
    ],
  },
  {
    company: "NEXT Ventures",
    period: "April 2025 — July 2025",
    role: "Data, Automation & Research Specialist",
    summary:
      "Drove internal-tool adoption and automated enablement workflows across the organization.",
    contributions: [
      {
        title: "Enablement & automation",
        role: "Adoption · n8n · BI",
        summary:
          "Technical enablement, certification automation, and training performance dashboards.",
        contributions: [
          "Increased adoption of internal tools by 50% within four months.",
          "Automated certification, feedback, and progress monitoring with n8n — saving 10+ hours per week.",
          "Built BI dashboards that enabled 2× faster evaluation of learning effectiveness.",
        ],
        stack: ["n8n", "BI dashboards", "Internal tools"],
      },
    ],
  },
  {
    company: "Pathao Limited",
    period: "May 2024 — April 2025",
    role: "Senior Executive, Project Management",
    summary:
      "Led CX process automation and reporting that informed product and tech decisions.",
    contributions: [
      {
        title: "CX automation & insights",
        role: "Process · dashboards · strategy",
        summary:
          "Fare adjustment, complaint resolution, and courier/driver strategic initiatives.",
        contributions: [
          "Streamlined fare adjustment and complaint workflows — turnaround from days to minutes.",
          "Built dashboards and reporting pipelines from user behaviour and support tickets.",
          "Contributed to driver onboarding automation and dynamic commission model design.",
        ],
        stack: ["Process automation", "Dashboards", "CX ops"],
      },
    ],
  },
  {
    company: "Pathao Limited",
    period: "January 2021 — April 2024",
    role: "L&D · CX · Training & Quality",
    summary:
      "Progressive roles across learning & development, customer experience, and quality — knowledge bases, dashboards, and training programs.",
    contributions: [
      {
        title: "Earlier Pathao roles",
        role: "Junior Executive TQM → Senior Executive L&D",
        summary:
          "Designed knowledge bases, data dashboards, and training across product, ops, and CX.",
        contributions: [
          "Drove quality improvements across customer-facing channels.",
          "Recognized Employee of the Month (6×) and Top Performer for CX and process improvement.",
        ],
        stack: ["Training", "Quality", "Knowledge management"],
      },
    ],
  },
  {
    company: "Genex Infosys Limited",
    period: "December 2019 — January 2021",
    role: "Customer Service Officer",
    summary:
      "Customer service foundation that informed later CX automation and quality work.",
    contributions: [
      {
        title: "Customer service",
        role: "Support operations",
        summary: "Front-line customer support at Genex Infosys.",
        contributions: [
          "Built operational fluency in high-volume customer support environments.",
        ],
        stack: ["Customer support"],
      },
    ],
  },
];

export const education = [
  {
    institution: "Southeast University",
    credential: "BSc, Computer Science & Engineering (CSE)",
    year: "2026",
    result: "CGPA 3.40",
  },
  {
    institution: "Milestone College",
    credential: "HSC – Science",
    year: "2019",
    result: "GPA 5.00",
  },
  {
    institution: "Navy Anchorage School, Dhaka",
    credential: "SSC – Science",
    year: "2017",
    result: "GPA 4.95",
  },
] as const;

export const certifications = [
  "Claude Code in Action — Anthropic · May 2026",
  "OKR Certified Professional — OKR Mentors · September 2025",
  "IELTS Academic 7.0",
] as const;

export const achievements = [
  "Hall of Excellence (2×) — NEXT Ventures for CQMS and QC system transformation.",
  "Exceptional Performer of the Year 2025 — NEXT Ventures.",
  "Employee of the Month (6×) and Top Performer — Pathao Limited.",
] as const;

export const nav = [
  { label: "Home", href: "#top" },
  { label: "Projects", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#connect" },
] as const;
