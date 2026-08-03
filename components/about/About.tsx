"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  GraduationCap,
  Monitor,
  CheckCircle2,
} from "lucide-react";

import InfoCard from "./InfoCard";

const services = [
  "Maintenance informatique",
  "Réseaux d'entreprise",
  "Support technique",
  "Solutions TPV",
  "Conseil & Déploiement",
  "Formation utilisateurs",
];

export default function About() {
  return (
    <section
      id="parcours"
      className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8"
    >
      {/* Halo */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="font-semibold uppercase tracking-[0.25em] text-blue-400">
          À PROPOS
        </span>

        <h2 className="mt-5 bg-gradient-to-r from-white via-white to-blue-300 bg-clip-text text-5xl font-black leading-tight text-transparent lg:text-6xl">
          Plus de 30 ans
          <br />
          d'expertise informatique
        </h2>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
          J'accompagne les entreprises dans l'installation, la maintenance
          et l'évolution de leurs infrastructures informatiques.
          Mon expertise couvre les réseaux, les postes de travail,
          les solutions d'encaissement, la bureautique et le support
          technique avec un objectif simple : assurer un système fiable,
          performant et durable.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1.3fr_.7fr]">

        {/* Carte Expertise */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
        >
          <h3 className="text-2xl font-bold text-white">
            Domaines d'intervention
          </h3>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">

            {services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/10"
              >
                <CheckCircle2
                  size={20}
                  className="text-blue-400"
                />

                <span className="text-slate-200">
                  {service}
                </span>
              </div>
            ))}

          </div>
        </motion.div>

        {/* Statistiques */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="grid gap-6"
        >
          <InfoCard
            icon={Briefcase}
            title="Expérience"
            value="30+ années"
          />

          <InfoCard
            icon={Monitor}
            title="Expertise"
            value="Maintenance Informatique, Bureautique • Réseaux • TPV"
          />

          <InfoCard
            icon={GraduationCap}
            title="Diplôme"
            value="Administrateur Réseaux"
          />

          <InfoCard
            icon={MapPin}
            title="Secteur"
            value="Occitanie"
          />
        </motion.div>

      </div>
    </section>
  );
}