"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import ExpertiseGrid from "./ExpertiseGrid";

export default function Expertise() {
  return (
    <Section
      id="expertise"
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
          bottom-10
          h-[320px]
          w-[320px]
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
          top-20
          h-[320px]
          w-[320px]
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
            title="Domaines d'expertise"
            subtitle="Plus de 30 années d'expérience dans la maintenance informatique, l'administration systèmes & réseaux, Microsoft Office, les solutions professionnelles d'encaissement et le support utilisateurs."
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
          <ExpertiseGrid />
        </motion.div>

      </Container>
    </Section>
  );
}