import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sébastien MICHEL | Technicien Informatique Senior",
  description:
    "CV de Sébastien MICHEL - 30 ans d'expérience en Informatique, Réseaux, Bureautique, Maintenance et solutions d'encaissement.",
  keywords: [
    "Technicien informatique",
    "Bureautique",
    "Réseau",
    "Maintenance informatique",
    "Support Client",
    "TPV",
    "Administrateur système",
  ],
  authors: [{ name: "Sébastien MICHEL" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}