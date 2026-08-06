"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

import TechnologiesGrid from "./TechnologiesGrid";

export default function Technologies() {
  return (
    <Section
      id="technologies"
      className="relative overflow-hidden py-24"
    >
      {/* Halo principal */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[180px]" />

      {/* Halo gauche */}
      <div className="absolute -left-40 bottom-10 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Halo droit */}
      <div className="absolute -right-40 top-20 h-[300px] w-[300px] rounded-full bg-indigo-500/10 blur-[120px]" />

      <Container>
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
            duration: 0.6,
          }}
        >
          <Heading
            center
            title="Technologies maîtrisées"
            subtitle="Plus de 30 années d'expérience dans les environnements Microsoft, réseaux, infrastructures, cloud et support informatique."
          />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          className="mt-16"
        >
          <TechnologiesGrid />
        </motion.div>
      </Container>
    </Section>
  );
}