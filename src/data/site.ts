export const site = {
  name: "Aminul Islam",
  role: "Full-Stack Engineer · Automation Specialist",
  location: "Dhaka, Bangladesh",
  email: "aminulislamborhan@gmail.com",
  phone: "+880 1632-257352",
  phoneHref: "tel:+8801632257352",
  whatsapp: "https://wa.me/8801632257352",
  availability: "Open to full-stack roles and select product engagements.",
  bio: "Full-stack engineer with hands-on experience delivering production-grade enterprise platforms, web applications, and mobile solutions. Strong in TypeScript, React, Next.js, Node.js, and AWS, with a track record of building scalable internal systems used by 500–700 employees globally — saving organizations $5,000–$10,000 annually by replacing commercial SaaS tools. Co-founder of Inventive Lab Inc (OneSign digital signage). Additional focus on AI-driven automation and Android/Flutter development.",
  avatar: "https://avatars.githubusercontent.com/u/193484955?v=4",
  resumePath: "/resume",
  links: {
    github: "https://github.com/mr-aminul",
    linkedin: "https://www.linkedin.com/in/theaminulislam/",
    lab: "https://inventivelab.bd",
    onesign: "https://onesigntv.com",
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

/**
 * Portfolio projects.
 * Order: hosted/live first (by competency), then unhosted.
 * Featured = main grid. Non-featured with image = "More work".
 */
export const projects: Project[] = [
  // ——— Hosted (live URL) — strongest first ———
  {
    title: "OneSign",
    subtitle: "Digital signage platform",
    description:
      "Inventive Lab’s flagship product — turn any TV into a remotely managed display. Live product with web admin, Android TV players, and a Flutter client; also deployed for multi-site restaurant signage.",
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
    title: "Ukilai",
    subtitle: "Law firm ERP",
    description:
      "Cases, billing, staff, and day-to-day operations for legal teams — a production ERP spanning a Next.js UI and a Go GraphQL API.",
    highlights: [
      "Owned full-stack delivery: case workflows, billing surfaces, and shared design tokens across the monorepo.",
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
    title: "Diagnostic Center",    subtitle: "Healthcare portal",
    description:
      "Multi-tenant diagnostic template with a bilingual public site (Bangla / English), patient OTP portal, and staff admin for bookings and reports.",
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
    title: "Inventive Lab",
    subtitle: "Company website",
    description:
      "Marketing site for Inventive Lab Inc — product studio behind OneSign and client systems across legal, healthcare, and capital markets.",
    highlights: [
      "Shipped a responsive Next.js marketing site for the studio brand and product narrative.",
      "Positioned OneSign and delivery capabilities for prospects and partners.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://inventivelab.bd",
    repo: "https://github.com/mr-aminul/inventivelab-website",
    year: "2026",
    image: "/projects/inventivelab.png",
    featured: true,
  },
  {
    title: "ChiliRig",
    subtitle: "Order & ops platform",
    description:
      "Order management product with cancellation flows, address validation, and Discord notifications for ops handoff.",
    highlights: [
      "Built order lifecycle surfaces with cancellation and address validation.",
      "Integrated Discord alerts so ops teams catch order events in realtime.",
    ],
    stack: ["Next.js", "TypeScript", "Vercel"],
    live: "https://chilirig.vercel.app",
    repo: "https://github.com/mr-aminul/chilirig",
    year: "2026",
    image: "/projects/chilirig-hero.png",
    featured: true,
  },
  {
    title: "Invoice Management",
    subtitle: "Invoicing & estimates",
    description:
      "Business invoicing workspace — create invoices and estimates, manage businesses, and handle credit notes in a responsive TypeScript app.",
    highlights: [
      "Shipped invoice, estimate, and credit-note flows with multi-business selection.",
      "Polished responsive forms and layout for day-to-day finance ops.",
    ],
    stack: ["React", "TypeScript", "Vite"],
    live: "https://invoice-management-system-three-chi.vercel.app",
    repo: "https://github.com/mr-aminul/invoice-management-system",
    year: "2026",
    image: "/projects/invoice-management.png",
    featured: true,
  },
  {
    title: "Bus Management System",
    subtitle: "Fleet & operations",
    description:
      "Fleet operations dashboard for routes, tickets, counters, and reporting — a TypeScript ops console for bus operators.",
    highlights: [
      "Built operations dashboard covering fleet, routes, tickets, and counters.",
      "Shipped reports and navigation shell ready for operator workflows.",
    ],
    stack: ["React", "TypeScript", "Vite"],
    live: "https://bus-mgt-system.vercel.app",
    repo: "https://github.com/mr-aminul/bus-mgt-system",
    year: "2026",
    image: "/projects/bus-mgt-login.png",
    featured: true,
  },
  {
    title: "Auth Basement",
    subtitle: "Auth starter kit",
    description:
      "Reusable React + TypeScript authentication template on Supabase Auth — sign up, sign in, password reset, and a responsive app shell.",
    highlights: [
      "Packaged auth context, protected routes, and default auth pages for reuse across clients.",
      "Sidebar/top-bar app layout with responsive drawer behavior out of the box.",
    ],
    stack: ["React", "TypeScript", "Supabase", "Vite"],
    live: "https://auth-basement.vercel.app",
    repo: "https://github.com/mr-aminul/Auth-Basement",
    year: "2026",
    image: "/projects/auth-basement.png",
    featured: true,
  },
  {
    title: "SaaS Basement",
    subtitle: "SaaS app shell",
    description:
      "Reusable SaaS starter with Supabase Auth and a top-navigation app shell — drop-in foundation for multi-client products.",
    highlights: [
      "Auth flows plus top-nav layout ready to point at any Supabase project.",
      "Shared config for brand, nav, and page headings so new apps start faster.",
    ],
    stack: ["React", "TypeScript", "Supabase", "Vite"],
    live: "https://saas-basement.vercel.app",
    repo: "https://github.com/mr-aminul/SaaS-Basement",
    year: "2026",
    image: "/projects/saas-basement.png",
    featured: true,
  },
  {
    title: "MoneyLogger",
    subtitle: "Expense tracker",
    description:
      "Personal finance app with Google sign-in, budgets, charts, CSV export, and voice input — React + Supabase.",
    highlights: [
      "Built expense CRUD, category budgets, and monthly/yearly summaries with charts.",
      "Added voice input and Google auth via Supabase for cross-device sync.",
    ],
    stack: ["React", "TypeScript", "Supabase", "Recharts"],
    live: "https://moneylogger.vercel.app",
    repo: "https://github.com/mr-aminul/moneylogger",
    year: "2026",
    image: "/projects/moneylogger.png",
    featured: true,
  },
  {
    title: "Shah Jalal Fabricators",
    subtitle: "Business website",
    description:
      "Marketing site for Shah Jalal Fabricators — company presence and services on a Vite/JS frontend deployed to Vercel.",
    highlights: [
      "Shipped a client-facing business website with Vercel deploy config.",
      "Structured web build for a production fabricators brand.",
    ],
    stack: ["JavaScript", "Vite", "Vercel"],
    live: "https://shahjalal-fabricators.vercel.app",
    repo: "https://github.com/mr-aminul/shahjalal-fabricators",
    year: "2026",
    image: "/projects/shahjalal-fabricators.png",
    featured: true,
  },
  {
    title: "CustomEcom",
    subtitle: "Ecommerce admin + storefront",
    description:
      "Open-source ecommerce admin and shop — products, orders, customers, and store settings on Next.js with shadcn/ui, plus a customer-facing storefront.",
    highlights: [
      "Built product, order, and customer management surfaces with a clean shadcn/ui shell.",
      "Shipped cart/checkout storefront alongside the admin dashboard.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    live: "https://ecommerce-sand-gamma-74.vercel.app",
    repo: "https://github.com/mr-aminul/ecommerce",
    year: "2026",
    image: "/projects/customecom.png",
    featured: true,
  },
  {
    title: "Krunch POS",
    subtitle: "Point of sale · contribution",
    description:
      "Restaurant POS and back-office workspace — contributed billing, ledger, calendar, admin users, and mobile console improvements on a TypeScript + native stack.",
    highlights: [
      "Shipped billing QA fixes, workspace/admin flows, and mobile UI polish ahead of deploy.",
      "Hardened Daily Entry / ledger saves against API body-size limits for real shift volumes.",
      "Collaborated across web and mobile surfaces used in live store operations.",
    ],
    stack: ["TypeScript", "React", "Express", "Mobile"],
    live: "https://krunch-xi.vercel.app/pos",
    repo: "https://github.com/SaifIvnaAlam/krunch-pos",
    year: "2026",
    image: "/projects/krunch-pos.png",
    featured: true,
  },
  {
    title: "QuizMaster",
    subtitle: "Interactive quiz platform",
    description:
      "University project — interactive quiz platform built with PHP and MySQL, deployed with a live Vercel demo.",
    highlights: [
      "Built quiz flows on PHP + MySQL with a deployable Vercel surface.",
      "Documented live demo for coursework presentation.",
    ],
    stack: ["PHP", "MySQL", "Vercel"],
    live: "https://quizmaster-liard-six.vercel.app",
    repo: "https://github.com/mr-aminul/QuizMaster",
    year: "2026",
    image: "/projects/quizmaster.png",
    featured: true,
  },

  // ——— Unhosted (no public live URL) — by competency ———
  {
    title: "Caliper",
    subtitle: "AI CV screening",
    description:
      "Recruiter-facing CV screening product: upload or pull CVs, score candidates against job criteria, and surface related LinkedIn profiles — React frontend with a Fastify API on AWS.",
    highlights: [
      "Designed a production architecture: React + Vite client, Fastify API, Google OAuth, AWS RDS Postgres, and S3 for CV storage.",
      "Built AI scoring against job criteria with optional Recruitee / profile-discovery integrations.",
      "Workspace provisioning, JWT auth via Google JWKS, and encrypted workspace API keys at the boundary.",
    ],
    stack: ["React", "TypeScript", "Fastify", "AWS", "PostgreSQL", "S3"],
    repo: "https://github.com/aminulnv/Caliper-CV-Screening",
    year: "2026",
    image: "/projects/caliper-login.png",
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
      "Co-founded a product studio shipping OneSign digital signage and client systems across legal, healthcare, and capital markets.",
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
          "Production apps including Ukilai (law ERP) and multi-tenant diagnostic portals.",
        contributions: [
          "Led discovery-to-deploy delivery for ops-heavy client systems.",
          "Shipped Next.js + Go GraphQL monorepos and bilingual healthcare templates ready for new tenants.",
        ],
        stack: ["Next.js", "Go", "PostgreSQL", "Prisma", "Vercel"],
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
        title: "CQMS & internal platforms",
        role: "Full-stack architecture & delivery",
        summary:
          "CQMS, OKR Management, Performance Management, and Attendance Management from scratch.",
        contributions: [
          "Shipped enterprise-grade platforms used by 500–700 employees globally.",
          "CQMS (AI-powered audit) cut audit time ~50%, doubled capacity, consolidated 4+ tools, and replaced Scorebuddy — $4,000+ annual savings.",
          "Custom builds replaced off-the-shelf SaaS, saving the organization $5,000–$10,000 per year.",
        ],
        stack: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "AWS"],
      },
      {
        title: "Caliper · BI & automation",
        role: "AI products · n8n · dashboards",
        summary:
          "AI CV screening (Caliper), leadership KPI visibility, and automation that reduced manual workload.",
        contributions: [
          "Built Caliper’s Fastify + AWS path for CV upload, scoring, and recruiter workflows.",
          "Designed BI dashboards and reporting for real-time operational health.",
          "Deployed n8n automation workflows that boosted cross-team productivity.",
        ],
        stack: ["Fastify", "AWS", "n8n", "Supabase", "Figma"],
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
