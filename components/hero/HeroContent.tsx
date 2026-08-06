"use client";

import { motion } from "framer-motion";

import HeroStats from "./HeroStats";
import HeroBadges from "./HeroBadges";
import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl"
    >
      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-blue-300">
          👋 Bienvenue sur mon portfolio
        </span>
      </motion.div>

      {/* Introduction */}

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15 }}
        className="mt-8 text-lg font-medium text-slate-300"
      >
        Bonjour, je suis
      </motion.p>

      {/* Nom */}

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="
          mt-3
          text-5xl
          font-black
          tracking-tight
          text-white
          sm:text-6xl
          lg:text-7xl
        "
      >
        Sébastien
        <br />

        <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
          MICHEL
        </span>
      </motion.h1>

      {/* Métier */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mt-8 space-y-2"
      >
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Technicien Maintenance Informatique
        </h2>

        <h3 className="text-xl font-semibold text-cyan-400 sm:text-2xl">
          Administrateur Systèmes &amp; Réseaux
        </h3>
      </motion.div>

      {/* Présentation */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="
          mt-8
          max-w-2xl
          text-lg
          leading-9
          text-slate-400
        "
      >
        Depuis plus de{" "}
        <span className="font-semibold text-white">
          30 ans
        </span>
        , j&apos;accompagne les entreprises dans la maintenance informatique,
        l&apos;administration des systèmes Windows, les infrastructures réseaux
        et les solutions professionnelles d&apos;encaissement (TPV).
        Mon objectif est d&apos;apporter des solutions fiables, un support
        réactif et un accompagnement de proximité.
      </motion.p>

      {/* Statistiques */}

      <div className="mt-12">
        <HeroStats />
      </div>

      {/* Expertises */}

      <div className="mt-12">
        <HeroBadges />
      </div>

      {/* Boutons */}

      <div className="mt-12">
        <HeroButtons />
      </div>
    </motion.div>
  );
}