"use client";

import { motion } from "framer-motion";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import SkillCategory from "./SkillCategory";
import { skillCategories } from "./skillsData";

export default function Skills() {
  return (
    <section
      id="competences"
      className="relative overflow-hidden py-32"
    >
      {/* Halo d'arrière-plan */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-40 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[170px]" />
        <div className="absolute right-10 bottom-0 h-[300px] w-[300px] rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      <Container>

        <SectionTitle
          overline="Expertise"
          title="Compétences Techniques"
          subtitle="Plus de 30 années d'expérience dans la maintenance informatique, les réseaux, les infrastructures, le support technique et les solutions professionnelles."
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
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="mt-20 grid gap-8 lg:grid-cols-3"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
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
                delay: index * 0.12,
              }}
              viewport={{
                once: true,
              }}
            >
              <SkillCategory {...category} />
            </motion.div>
          ))}
        </motion.div>

      </Container>
    </section>
  );
}