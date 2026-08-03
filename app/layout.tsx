import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ton-domaine.fr"),

  title: {
    default: "Sébastien MICHEL | Technicien Informatique Senior",
    template: "%s | Sébastien MICHEL",
  },

  description:
    "Portfolio interactif de Sébastien MICHEL. Plus de 30 ans d'expérience en maintenance informatique, réseaux, bureautique, support technique, solutions TPV et accompagnement des entreprises.",

  keywords: [
    "Technicien informatique",
    "Maintenance informatique",
    "Support informatique",
    "Réseaux",
    "Windows",
    "TPV",
    "Bureautique",
    "Administrateur réseaux",
    "Technicien support",
    "Hérault",
    "Occitanie",
  ],

  authors: [
    {
      name: "Sébastien MICHEL",
    },
  ],

  creator: "Sébastien MICHEL",

  publisher: "Sébastien MICHEL",

  category: "Portfolio",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Sébastien MICHEL | Technicien Informatique Senior",
    description:
      "Portfolio interactif présentant plus de 30 ans d'expérience en informatique, réseaux, maintenance, bureautique et solutions TPV.",

    url: "https://ton-domaine.fr",

    siteName: "Portfolio Sébastien MICHEL",
  },

  twitter: {
    card: "summary_large_image",

    title: "Sébastien MICHEL",

    description:
      "Portfolio interactif - Maintenance Informatique • Réseaux • TPV",

    creator: "@ton_compte",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
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
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}