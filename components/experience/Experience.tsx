"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import ExperienceTimeline from "./ExperienceTimeline";

export default function Experience() {
  return (
    <Section
      id="experience"
      className="relative overflow-hidden py-28"
    >
      {/* Halo principal */}

      <div
        className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          h-[700px]
          w-[700px]
          rounded-full
          bg-cyan-500/10
          blur-[180px]
          -z-10
        "
      />

      {/* Halo gauche */}

      <div
        className="
          absolute
          -left-40
          bottom-0
          h-[350px]
          w-[350px]
          rounded-full
          bg-blue-600/10
          blur-[120px]
          -z-10
        "
      />

      {/* Halo droit */}

      <div
        className="
          absolute
          -right-40
          top-40
          h-[300px]
          w-[300px]
          rounded-full
          bg-cyan-400/10
          blur-[120px]
          -z-10
        "
      />

      <Container>

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <SectionTitle
            center
            title="Expériences Professionnelles"
            subtitle="Plus de 30 années d'expérience dans la maintenance informatique, l'administration systèmes & réseaux, les solutions professionnelles d'encaissement, le support utilisateurs et l'accompagnement des entreprises."
          />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-24"
        >
          <ExperienceTimeline />
        </motion.div>

      </Container>
    </Section>
  );
}