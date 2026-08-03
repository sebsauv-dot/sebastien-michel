"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

import HeroBackground from "./HeroBackground";
import MouseGlow from "./MouseGlow";
import TypingTitle from "./TypingTitle";
import ScrollIndicator from "./ScrollIndicator";
import AnimatedCounter from "./AnimatedCounter";
import ProfileCard from "./ProfileCard";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <HeroBackground />
      <MouseGlow />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-20 px-6 pt-32 pb-20 lg:grid-cols-2 lg:px-8">

        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
        >
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            CV Interactif Premium
          </span>

          <h1 className="mt-8 text-6xl font-black leading-none text-white lg:text-7xl">
            {profile.firstname}
            <br />
            {profile.lastname}
          </h1>

          <TypingTitle />

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            {profile.description}
          </p>

          <div className="mt-12 flex flex-wrap gap-4">

            <a
              href="#experience"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-500"
            >
              Découvrir mon parcours
            </a>

            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 px-8 py-4 text-white transition-all duration-300 hover:border-blue-500 hover:bg-white/5"
            >
              Télécharger le CV
            </a>

          </div>

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">

            <AnimatedCounter
              value={30}
              label="Années d'expérience"
            />

            <AnimatedCounter
              value={500}
              label="Clients"
            />

            <AnimatedCounter
              value={1000}
              label="Interventions"
            />

          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{
            opacity: 0,
            x: 80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="flex justify-center"
        >
          <ProfileCard />
        </motion.div>

      </div>

      <ScrollIndicator />
    </section>
  );
}