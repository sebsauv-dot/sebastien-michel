"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "Parcours", href: "#parcours" },
  { label: "Compétences", href: "#competences" },
  { label: "Expertise", href: "#realisations" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto mt-5 flex h-16 w-[95%] max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/60 px-8 shadow-[0_20px_60px_rgba(0,0,0,.25)] backdrop-blur-2xl">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 font-bold text-white shadow-lg">
            SM
          </div>

          <div className="hidden lg:block">
            <p className="text-sm font-semibold text-white">
              Sébastien MICHEL
            </p>

            <p className="text-xs text-slate-400">
              Maintenance • Réseaux • TPV
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-slate-300 transition duration-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Bouton CV */}
        <a
          href="/cv/CV-Sebastien-Michel.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-500"
        >
          <Download size={17} />
          Télécharger le CV
        </a>

      </div>
    </motion.header>
  );
}