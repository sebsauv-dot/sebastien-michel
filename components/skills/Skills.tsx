"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import SkillsGrid from "./SkillsGrid";

export default function Skills() {
  return (
    <Section
      id="skills"
      className="relative overflow-hidden"
    >
      {/* Halo */}

      <div
        className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          h-[600px]
          w-[600px]
          rounded-full
          bg-blue-600/10
          blur-[180px]
          -z-10
        "
      />

      <Container>

        <SectionTitle
          center
          title="Compétences"
          subtitle="Des compétences acquises au cours de plus de 30 années d'expérience dans les environnements informatiques professionnels."
        />

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
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-20"
        >
          <SkillsGrid />
        </motion.div>

      </Container>

    </Section>
  );
}