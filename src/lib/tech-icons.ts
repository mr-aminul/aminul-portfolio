import type { SimpleIcon } from "simple-icons";
import {
  siAndroid,
  siCss,
  siExpress,
  siFigma,
  siFlutter,
  siGo,
  siGraphql,
  siHtml5,
  siJavascript,
  siKotlin,
  siMysql,
  siN8n,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPhp,
  siPostgresql,
  siPrisma,
  siPython,
  siReact,
  siSqlite,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVite,
} from "simple-icons";

export type TechIconData = {
  title: string;
  hex: string;
  path: string;
};

function fromSimple(icon: SimpleIcon): TechIconData {
  return { title: icon.title, hex: icon.hex, path: icon.path };
}

/** Official-style AWS mark (24×24), kept local because simple-icons no longer ships AWS. */
const awsIcon: TechIconData = {
  title: "AWS",
  hex: "FF9900",
  path: "M18.75 11.47c0 .66-.09 1.2-.28 1.63-.19.43-.46.76-.81.99-.35.23-.76.34-1.24.34-.48 0-.89-.11-1.24-.34-.35-.23-.62-.56-.81-.99-.19-.43-.28-.97-.28-1.63 0-.65.09-1.19.28-1.62.19-.43.46-.76.81-.99.35-.23.76-.34 1.24-.34.48 0 .89.11 1.24.34.35.23.62.56.81.99.19.43.28.97.28 1.62zm-1.45 0c0-.41-.04-.74-.13-.99-.09-.25-.24-.37-.46-.37-.22 0-.37.12-.46.37-.09.25-.13.58-.13.99 0 .42.04.75.13 1 .09.25.24.37.46.37.22 0 .37-.12.46-.37.09-.25.13-.58.13-1zm3.79 2.84h-1.3l1.52-4.42h1.47l1.52 4.42h-1.36l-.25-.8h-1.35zm.68-1.93.48-1.54h-.02l.47 1.54zm-16.1 1.93L3.53 9.89h1.5l1.24 3.54h.02l1.25-3.54h1.45l-2.06 4.42zm6.34 0h-1.35V9.89h1.35zm.84-3.69c0-.23.08-.41.25-.55.16-.14.38-.21.64-.21.18 0 .37.03.56.08.19.05.36.12.5.21l.4-1.08a3.2 3.2 0 0 0-.66-.22 3.5 3.5 0 0 0-.74-.08c-.58 0-1.04.15-1.37.44-.33.29-.5.7-.5 1.22 0 .45.12.82.37 1.1.25.28.67.52 1.26.72.41.14.68.27.81.4.13.13.2.29.2.49 0 .21-.09.37-.26.49-.17.12-.4.18-.69.18-.22 0-.45-.04-.69-.11-.24-.08-.47-.18-.69-.32l-.44 1.08c.27.16.57.29.91.38.34.09.68.14 1.01.14.63 0 1.13-.15 1.49-.45.36-.3.54-.71.54-1.24 0-.47-.13-.85-.4-1.14-.27-.29-.7-.54-1.3-.75-.46-.16-.75-.3-.88-.41-.12-.11-.19-.25-.19-.43 0-.17.08-.31.23-.41.16-.11.36-.16.61-.16.2 0 .4.03.6.09.2.06.37.14.5.24l.41-1.05a3 3 0 0 0-.52-.2 2.9 2.9 0 0 0-.63-.08c-.53 0-.95.13-1.25.4-.3.26-.45.62-.45 1.07zM22.16 2.3 12.57.04a.8.8 0 0 0-.54 0L2.44 2.3a.54.54 0 0 0-.4.55l1.37 16.1c.04.35.26.65.58.79l7.4 3.2c.2.09.43.09.63 0l7.4-3.2c.32-.14.54-.44.58-.79L22.56 2.85a.54.54 0 0 0-.4-.55zm-1.6 3.28-9.67 14.3a.27.27 0 0 1-.45 0L4.5 11.1a.54.54 0 0 1 .1-.7l1.2-.98a.54.54 0 0 1 .7.05l3.9 3.95 8.25-12.2a.54.54 0 0 1 .76-.1l1.05.8c.24.18.29.52.1.76z",
};

const catalog: Record<string, TechIconData> = {
  typescript: fromSimple(siTypescript),
  javascript: fromSimple(siJavascript),
  python: fromSimple(siPython),
  java: fromSimple(siOpenjdk),
  openjdk: fromSimple(siOpenjdk),
  kotlin: fromSimple(siKotlin),
  react: fromSimple(siReact),
  "next.js": fromSimple(siNextdotjs),
  nextjs: fromSimple(siNextdotjs),
  "node.js": fromSimple(siNodedotjs),
  nodejs: fromSimple(siNodedotjs),
  "express.js": fromSimple(siExpress),
  express: fromSimple(siExpress),
  go: fromSimple(siGo),
  graphql: fromSimple(siGraphql),
  postgresql: fromSimple(siPostgresql),
  postgres: fromSimple(siPostgresql),
  supabase: fromSimple(siSupabase),
  mysql: fromSimple(siMysql),
  sqlite: fromSimple(siSqlite),
  prisma: fromSimple(siPrisma),
  aws: awsIcon,
  vercel: fromSimple(siVercel),
  android: fromSimple(siAndroid),
  "android tv": fromSimple(siAndroid),
  flutter: fromSimple(siFlutter),
  n8n: fromSimple(siN8n),
  figma: fromSimple(siFigma),
  vite: fromSimple(siVite),
  "tailwind css": fromSimple(siTailwindcss),
  tailwindcss: fromSimple(siTailwindcss),
  html5: fromSimple(siHtml5),
  html: fromSimple(siHtml5),
  css3: fromSimple(siCss),
  css: fromSimple(siCss),
  php: fromSimple(siPhp),
};

/** Normalize labels like "AWS (EC2, S3...)" or "Next.js API Routes" to an icon. */
export function resolveTechIcon(label: string): TechIconData | null {
  const lower = label.trim().toLowerCase();

  if (catalog[lower]) return catalog[lower];
  if (lower.startsWith("aws")) return catalog.aws;
  if (lower.includes("android")) return catalog.android;
  if (lower.includes("next.js") || lower.includes("nextjs")) {
    return catalog["next.js"];
  }
  if (lower.includes("node")) return catalog["node.js"];
  if (lower.includes("express")) return catalog.express;
  if (lower.includes("tailwind")) return catalog["tailwind css"];
  if (lower.includes("postgres")) return catalog.postgresql;
  if (lower.includes("ai-driven") || lower.includes("workflow")) {
    return catalog.n8n;
  }
  if (lower.includes("illustrator") || lower.includes("adobe xd")) {
    return null;
  }

  const first = lower.split(/[/(]/)[0]?.trim();
  if (first && catalog[first]) return catalog[first];

  return null;
}
