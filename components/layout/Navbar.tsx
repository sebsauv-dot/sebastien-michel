"use client";

import Link from "next/link";
import { Download } from "lucide-react";

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "Parcours", href: "#parcours" },
  { label: "Compétences", href: "#competences" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-5 flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-8 backdrop-blur-xl">

        <Link
          href="/"
          className="text-xl font-bold tracking-[0.2em] text-white"
        >
          SM
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition-all duration-300 hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/cv/CV-Sebastien-Michel.pdf"
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-blue-500"
        >
          <Download size={18} />
          CV
        </a>

      </div>
    </header>
  );
}