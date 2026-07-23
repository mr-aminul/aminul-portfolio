import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const siteUrl = "https://aminul-portfolio-rho.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aminul Islam — Full-Stack Engineer · Automation Specialist",
    template: "%s · Aminul Islam",
  },
  description:
    "Portfolio of Aminul Islam — full-stack engineer and automation specialist, co-founder of Inventive Lab Inc. Building operational software and multi-surface products from Dhaka, Bangladesh.",
  keywords: [
    "Aminul Islam",
    "full-stack engineer",
    "Inventive Lab",
    "OneSign",
    "portfolio",
    "Next.js",
    "TypeScript",
    "Dhaka",
  ],
  authors: [{ name: "Aminul Islam" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aminul Islam — Full-Stack Engineer · Automation Specialist",
    description:
      "Production platforms, automation, and multi-surface products.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Aminul Islam",
    images: [
      {
        url: "/projects/onesign.jpg",
        width: 1200,
        height: 630,
        alt: "Aminul Islam portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aminul Islam — Full-Stack Engineer · Automation Specialist",
    description:
      "Production platforms, automation, and multi-surface products.",
    images: ["/projects/onesign.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col font-sans"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
