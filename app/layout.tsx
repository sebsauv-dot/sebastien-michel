import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://cv-interactif-premium.vercel.app"),

  title: {
    default: "Sébastien MICHEL | Technicien Maintenance Informatique",
    template: "%s | Sébastien MICHEL",
  },

  description:
    "Portfolio de Sébastien MICHEL, Technicien Maintenance Informatique, Administrateur Systèmes & Réseaux, spécialiste Microsoft Windows, Windows Server, Microsoft 365, réseaux d'entreprise et solutions TPV.",

  keywords: [
    "Technicien informatique",
    "Maintenance informatique",
    "Administrateur systèmes",
    "Administrateur réseaux",
    "Windows",
    "Windows Server",
    "Microsoft 365",
    "Microsoft Office",
    "Support informatique",
    "TPV",
    "Caisse enregistreuse",
    "Réseaux d'entreprise",
    "Bédarieux",
    "Hérault",
    "Occitanie",
  ],

  authors: [
    {
      name: "Sébastien MICHEL",
      url: "https://cv-interactif-premium.vercel.app",
    },
  ],

  creator: "Sébastien MICHEL",

  publisher: "Sébastien MICHEL",

  applicationName: "Portfolio Sébastien MICHEL",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Sébastien MICHEL | Portfolio",

    description:
      "Plus de 30 ans d'expérience en maintenance informatique, administration des systèmes Microsoft, réseaux d'entreprise et solutions TPV.",

    url: "https://cv-interactif-premium.vercel.app",

    siteName: "Portfolio Sébastien MICHEL",

    locale: "fr_FR",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Sébastien MICHEL",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Sébastien MICHEL | Portfolio",

    description:
      "Technicien Maintenance Informatique • Administrateur Systèmes & Réseaux",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],

    apple: "/apple-touch-icon.png",

    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",

  themeColor: "#020617",

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
    >
      <body
        className="
          min-h-screen
          overflow-x-hidden
          bg-slate-950
          text-white
          antialiased
          selection:bg-cyan-500
          selection:text-white
        "
      >
        <Navbar />

        {children}

        <ScrollToTop />
      </body>
    </html>
  );
}