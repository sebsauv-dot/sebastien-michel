"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950">
      {/* Halo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-3">

          {/* Présentation */}
          <div>

            <div className="flex items-center gap-5">

              <Image
                src="/images/logo-sm.png"
                alt="Logo Sébastien MICHEL"
                width={72}
                height={72}
                className="rounded-2xl"
              />

              <div>
                <h3 className="text-3xl font-black text-white">
                  Sébastien MICHEL
                </h3>

                <p className="text-cyan-400">
                  Maintenance informatique • Réseaux • TPV
                </p>
              </div>

            </div>

            <p className="mt-8 leading-8 text-slate-400">
              Plus de 30 ans d&apos;expérience dans la maintenance
              informatique, l&apos;administration des systèmes Microsoft,
              les réseaux d&apos;entreprise, Microsoft Office et les
              solutions professionnelles d&apos;encaissement.
            </p>

            <a
              href="/cv/Sebastien_MICHEL_CV.pdf"
              download
              className="
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-cyan-500/30
                bg-cyan-500/10
                px-6
                py-3
                font-semibold
                text-cyan-300
                transition-all
                duration-300
                hover:bg-cyan-500
                hover:text-white
              "
            >
              <Download size={18} />
              Télécharger mon CV
            </a>

          </div>

          {/* Navigation */}
          <div>

            <h4 className="mb-6 text-xl font-bold text-white">
              Navigation
            </h4>

            <ul className="space-y-4">

              <li>
                <Link href="#home" className="transition hover:text-cyan-400">
                  Accueil
                </Link>
              </li>

              <li>
                <Link href="#about" className="transition hover:text-cyan-400">
                  À propos
                </Link>
              </li>

              <li>
                <Link href="#experience" className="transition hover:text-cyan-400">
                  Expérience
                </Link>
              </li>

              <li>
                <Link href="#expertise" className="transition hover:text-cyan-400">
                  Expertise
                </Link>
              </li>

              <li>
                <Link href="#contact" className="transition hover:text-cyan-400">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h4 className="mb-6 text-xl font-bold text-white">
              Contact
            </h4>

            <div className="space-y-5">

              <a
                href="mailto:seb.sauv@gmail.com"
                className="flex items-center gap-4 text-slate-300 transition hover:text-cyan-400"
              >
                <Mail size={20} className="text-cyan-400" />
                Mail
              </a>

              <a
                href="tel:+33681443632"
                className="flex items-center gap-4 text-slate-300 transition hover:text-cyan-400"
              >
                <Phone size={20} className="text-cyan-400" />
                06&nbsp;81&nbsp;44&nbsp;36&nbsp;32
              </a>

              <div className="flex items-center gap-4 text-slate-300">
                <MapPin size={20} className="text-cyan-400" />
                Bédarieux • Occitanie
              </div>

              <div className="flex gap-4 pt-4">

                <a
                  href="https://www.linkedin.com/in/sebastienmichel423b22187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-full
                    border
                    border-slate-700
                    p-3
                    transition-all
                    duration-300
                    hover:border-cyan-400
                    hover:bg-cyan-500/10
                  "
                >
                  <Linkedin className="text-cyan-400" />
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-full
                    border
                    border-slate-700
                    p-3
                    transition-all
                    duration-300
                    hover:border-cyan-400
                    hover:bg-cyan-500/10
                  "
                >
                  <Github className="text-cyan-400" />
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Bas de page */}

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">

          <p>
            © {year} Sébastien MICHEL • Tous droits réservés.
          </p>

          <p className="mt-3">
            Développé sous Next.js • React • TypeScript • Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}