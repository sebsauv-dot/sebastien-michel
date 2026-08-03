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

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 pt-28 pb-20 lg:grid-cols-[1fr_.85fr] lg:px-8">

        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400"
          >
            Disponible • France • Mobilité Occitanie
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="
              mt-6
              bg-gradient-to-r
              from-white
              via-white
              to-blue-300
              bg-clip-text
              text-5xl
              font-black
              leading-tight
              tracking-tight
              text-transparent
              lg:text-6xl
            "
          >
            {profile.firstname}
            <br />
            {profile.lastname}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            <TypingTitle />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-8 max-w-2xl text-lg leading-9 text-slate-300"
          >
            Plus de{" "}
            <span className="font-bold text-blue-400">
              30 années d'expérience
            </span>{" "}
            dans la maintenance informatique, les réseaux,
            les solutions d'encaissement, la bureautique
            et le support technique auprès des entreprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#experience"
              className="rounded-2xl bg-blue-600 px-7 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-500"
            >
              Découvrir mon parcours
            </a>

            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/15 px-7 py-3 text-white transition-all duration-300 hover:border-blue-500 hover:bg-white/5"
            >
              Télécharger le CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
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
          </motion.div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.9,
            duration: 0.8,
          }}
          className="flex justify-center lg:justify-end"
        >
          <ProfileCard />
        </motion.div>

      </div>

      <ScrollIndicator />
    </section>
  );
}