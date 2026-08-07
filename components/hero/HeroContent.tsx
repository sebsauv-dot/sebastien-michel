"use client";

import { motion } from "framer-motion";

import HeroStats from "./HeroStats";
import HeroBadges from "./HeroBadges";
import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-none text-center lg:mx-0 lg:text-left"
    >
      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-cyan-500/20
            bg-cyan-500/10
            px-4
            py-2
            text-xs
            font-semibold
            tracking-wide
            text-cyan-300
            sm:px-5
            sm:text-sm
          "
        >
          👋 Bienvenue sur mon portfolio
        </span>
      </motion.div>

      {/* Introduction */}

      <motion.p
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15 }}
        className="mt-8 text-base font-medium text-slate-300 sm:text-lg"
      >
        
      </motion.p>

      {/* Nom */}

<motion.h1
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.25 }}
  className="
mt-3
flex
flex-col
items-center
gap-1
text-center
font-black
leading-none
tracking-tight
text-[clamp(2.3rem,9vw,5.8rem)]
sm:gap-2
lg:flex-row
lg:items-baseline
lg:text-left
"
>
  <span className="text-white">
  Sébastien
</span>

<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
  MICHEL
</span>
</motion.h1>

      {/* Métier */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mt-8 space-y-3"
      >
        <h2 className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
          Technicien Maintenance Informatique
        </h2>

        <h3 className="text-lg font-semibold text-cyan-400 sm:text-xl lg:text-2xl">
          Administrateur Systèmes &amp; Réseaux
        </h3>
      </motion.div>

      {/* Présentation */}

      {/* Présentation */}

<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.45 }}
  className="
    mx-auto
    mt-8
    max-w-xl
    sm:max-w-2xl
    text-base
    leading-8
    text-slate-400
    sm:text-lg
    lg:mx-0
    lg:leading-9
  "
>
  Depuis plus de{" "}
  <span className="font-semibold text-white">
    30 ans
  </span>
  , j&apos;accompagne les entreprises dans la maintenance informatique,
  l&apos;administration des systèmes Microsoft Windows, les infrastructures
  réseaux et les solutions professionnelles d&apos;encaissement (TPV).

  <br />
  <br />

  Mon objectif est d&apos;apporter des solutions fiables, un support
  réactif et un accompagnement de proximité.
</motion.p>

      {/* Statistiques */}

      <div className="mt-10">
        <HeroStats />
      </div>

      {/* Expertises */}

      <div className="mt-10">
        <HeroBadges />
      </div>

      {/* Boutons */}

      <div className="mt-10">
        <HeroButtons />
      </div>

    </motion.div>
  );
}