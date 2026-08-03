"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  GraduationCap,
  Monitor,
} from "lucide-react";

import InfoCard from "./InfoCard";

export default function About() {
  return (
    <section
      id="parcours"
      className="mx-auto max-w-7xl px-6 py-28 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-blue-400 font-semibold">
          À propos
        </span>

        <h2 className="mt-3 text-5xl font-black text-white">
          Plus de 30 ans
          <br />
          d'expérience informatique
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
          Passionné par l'informatique depuis toujours,
          j'accompagne les entreprises dans
          l'installation, la maintenance et
          l'évolution de leurs infrastructures.
          Mon expérience couvre les réseaux,
          la maintenance informatique et bureautique, les solutions
          d'encaissement, la relation client et
          le support technique.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <InfoCard
          icon={Briefcase}
          title="Expérience"
          value="30 années"
        />

        <InfoCard
          icon={Monitor}
          title="Spécialité"
          value="Infrastructure IT"
        />

        <InfoCard
          icon={GraduationCap}
          title="Formation"
          value="Administrateur Réseaux"
        />

        <InfoCard
          icon={MapPin}
          title="Localisation"
          value="Bédarieux (34)"
        />

      </div>
    </section>
  );
}