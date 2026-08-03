"use client";

import { motion } from "framer-motion";

import TimelineItem from "./TimelineItem";
import { experiences } from "./experienceData";

export default function Timeline() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8"
    >
      {/* En-tête */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <span className="font-semibold uppercase tracking-[0.25em] text-blue-400">
          PARCOURS
        </span>

        <h2 className="mt-5 bg-gradient-to-r from-white via-white to-blue-300 bg-clip-text text-5xl font-black text-transparent lg:text-6xl">
          Mon expérience
          <br />
          professionnelle
        </h2>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
          Plus de trois décennies d'expérience dans la maintenance
          informatique, les réseaux, les solutions d'encaissement,
          le support technique et l'accompagnement des entreprises.
        </p>
      </motion.div>

      {/* Halo */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[170px]" />
      </div>

      {/* Ligne verticale */}
      <div className="absolute left-10 top-[310px] hidden h-[calc(100%-320px)] w-px bg-gradient-to-b from-blue-500 via-cyan-400/40 to-transparent lg:block" />

      {/* Expériences */}
      <div className="relative space-y-10">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.period}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
            }}
            viewport={{
              once: true,
            }}
          >
            <TimelineItem {...experience} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}