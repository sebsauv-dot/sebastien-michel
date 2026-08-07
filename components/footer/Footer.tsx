"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Download,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const iconClass = `
    flex
    h-14
    w-14
    items-center
    justify-center
    rounded-full
    border
    border-slate-700
    text-cyan-400
    transition-all
    duration-300
    hover:scale-110
    hover:border-cyan-400
    hover:bg-cyan-500/10
    hover:shadow-[0_0_25px_rgba(34,211,238,.35)]
  `;

  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950">

      {/* Halo */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* Présentation */}

          <div>

            <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:text-left">

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
                  Maintenance informatique • Réseaux • Solutions TPV
                </p>

              </div>

            </div>

            <p className="mt-8 text-center leading-8 text-slate-400 sm:text-left">

              Plus de 30 ans d&apos;expérience dans la maintenance informatique,
              l&apos;administration des systèmes Microsoft,
              les infrastructures réseaux,
              Microsoft 365
              et les solutions professionnelles
              d&apos;encaissement.

            </p>

            <a
              href="/cv/Sebastien_MICHEL_CV.pdf"
              download
              className="
                mt-8
                mx-auto
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
                sm:mx-0
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
                href="mailto:seb.sauv@gmail.com?subject=Prise%20de%20contact%20depuis%20mon%20portfolio"
                className="flex items-center gap-4 text-slate-300 transition hover:text-cyan-400"
              >
                <Mail
                  size={20}
                  className="text-cyan-400"
                />

                Me contacter par e-mail

              </a>

              <a
                href="tel:+33681443632"
                className="flex items-center gap-4 text-slate-300 transition hover:text-cyan-400"
              >
                <Phone
                  size={20}
                  className="text-cyan-400"
                />

                06&nbsp;81&nbsp;44&nbsp;36&nbsp;32

              </a>

              <div className="flex items-center gap-4 text-slate-300">

                <MapPin
                  size={20}
                  className="text-cyan-400"
                />

                Bédarieux • Occitanie

              </div>

              <p className="pt-4 text-sm text-slate-400">
                Retrouvez-moi également sur
              </p>

              <div className="flex justify-center gap-6 sm:justify-start">

                <a
                  href="https://www.linkedin.com/in/sebastienmichel423b22187/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={iconClass}
                >
                  <Linkedin size={28} />
                </a>

                <a
                  href="mailto:seb.sauv@gmail.com?subject=Prise%20de%20contact%20depuis%20mon%20portfolio"
                  aria-label="Envoyer un e-mail"
                  className={iconClass}
                >
                  <Mail size={28} />
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Bas de page */}

        <div
          className="
            mt-12
            border-t
            border-slate-800
            pt-8
            text-center
          "
        >

          <p className="text-sm text-slate-500">
            © {year} Sébastien MICHEL • Tous droits réservés.
          </p>

          <p className="mt-3 text-sm text-slate-500">
            Conçu et développé par Sébastien MICHEL
          </p>

          <p className="mt-2 text-xs text-slate-600">
            Next.js • React • TypeScript • Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
}