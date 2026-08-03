"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-32 border-t border-white/10 bg-slate-950">

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-3">

          {/* Présentation */}
          <div>

            <h3 className="text-2xl font-bold text-white">
              Sébastien MICHEL
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              Technicien Maintenance Informatique, Réseaux,
              Bureautique et Solutions TPV.
            </p>

          </div>

          {/* Navigation */}
          <div>

            <h3 className="text-lg font-semibold text-white">
              Navigation
            </h3>

            <div className="mt-6 flex flex-col gap-3">

              <Link href="#accueil" className="text-slate-400 hover:text-blue-400">
                Accueil
              </Link>

              <Link href="#parcours" className="text-slate-400 hover:text-blue-400">
                À propos
              </Link>

              <Link href="#experience" className="text-slate-400 hover:text-blue-400">
                Expérience
              </Link>

              <Link href="#competences" className="text-slate-400 hover:text-blue-400">
                Compétences
              </Link>

              <Link href="#realisations" className="text-slate-400 hover:text-blue-400">
                Domaines d'expertise
              </Link>

              <Link href="#contact" className="text-slate-400 hover:text-blue-400">
                Contact
              </Link>

            </div>

          </div>

          {/* Réseaux */}
          <div>

            <h3 className="text-lg font-semibold text-white">
              Me contacter
            </h3>

            <div className="mt-6 flex gap-4">

              <a
                href="mailto:ton.email@exemple.fr"
                className="rounded-xl border border-white/10 p-3 hover:border-blue-500 hover:bg-blue-500/10"
              >
                <Mail size={22} />
              </a>

              <a
                href="https://github.com/sebsauv-dot"
                target="_blank"
                className="rounded-xl border border-white/10 p-3 hover:border-blue-500 hover:bg-blue-500/10"
              >
                <Github size={22} />
              </a>

              <a
                href="#"
                className="rounded-xl border border-white/10 p-3 hover:border-blue-500 hover:bg-blue-500/10"
              >
                <Linkedin size={22} />
              </a>

            </div>

          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 lg:flex-row">

          <p className="text-sm text-slate-500">
            © {year} Sébastien MICHEL — Tous droits réservés.
          </p>

          <a
            href="#accueil"
            className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm text-slate-300 transition hover:border-blue-500 hover:bg-blue-500/10"
          >
            <ArrowUp size={18} />
            Retour en haut
          </a>

        </div>

      </div>

    </footer>
  );
}