"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, LucideIcon } from "lucide-react";

type Project = {
  icon: LucideIcon;
  title: string;
  description: string;
  technologies: string[];
};

export default function ProjectCard({
  icon: Icon,
  title,
  description,
  technologies,
}: Project) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -10,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-2xl
        transition-all
        duration-500
        hover:border-blue-500/40
        hover:bg-white/10
        hover:shadow-[0_25px_80px_rgba(37,99,235,.18)]
      "
    >
      {/* Halo */}
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue-500/10 blur-[80px] transition-all duration-700 group-hover:scale-125" />

      {/* Icône */}
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-600/30">
        <Icon size={30} className="text-white" />
      </div>

      {/* Titre */}
      <h3 className="mt-8 text-2xl font-bold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-5 leading-8 text-slate-300">
        {description}
      </p>

      {/* Technologies */}
      <div className="mt-8 flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              border
              border-white/10
              bg-slate-900/40
              px-4
              py-2
              text-sm
              text-slate-200
              transition-all
              duration-300
              hover:border-blue-500/50
              hover:bg-blue-500/15
              hover:text-white
            "
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Bas de carte */}
      <div className="mt-8 flex items-center gap-2 text-blue-400">
        <ArrowUpRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />

        <span className="text-sm font-semibold uppercase tracking-wider">
          Domaine d'expertise
        </span>
      </div>
    </motion.article>
  );
}