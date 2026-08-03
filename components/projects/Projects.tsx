"use client";

import { motion } from "framer-motion";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import ProjectCard from "./ProjectCard";
import { projects } from "./projectsData";

export default function Projects() {
  return (
    <section
      id="realisations"
      className="relative overflow-hidden py-32"
    >
      {/* Halo */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        <div
          className="
            absolute
            left-1/2
            top-40
            h-[700px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-blue-500/10
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            right-0
            bottom-0
            h-[300px]
            w-[300px]
            rounded-full
            bg-cyan-500/10
            blur-[120px]
          "
        />

      </div>

      <Container>

        <SectionTitle
          overline="Expertise"
          title="Domaines d'expertise"
          subtitle="Au fil de mon parcours, j'ai développé une expertise complète dans la maintenance informatique, les infrastructures réseaux, les solutions professionnelles et la gestion de la relation client."
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
            duration: .8,
          }}
          viewport={{
            once: true,
          }}
          className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * .08,
              }}
              viewport={{
                once: true,
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

      </Container>
    </section>
  );
}