"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Expertise {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  skills: string[];
}

interface ExpertiseCardProps {
  expertise: Expertise;
}

export default function ExpertiseCard({
  expertise,
}: ExpertiseCardProps) {
  const Icon = expertise.icon;

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
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      whileHover={{
        y: -8,
        scale: 1.015,
      }}
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/70
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:shadow-[0_0_45px_rgba(34,211,238,.15)]
      "
    >
      <div className="flex h-full flex-col p-8">

        {/* Icône */}

        <div
          className="
            mb-6
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-blue-600/10
            text-cyan-400
            transition-all
            duration-300
            group-hover:bg-cyan-500
            group-hover:text-white
            group-hover:rotate-6
          "
        >
          <Icon size={32} />
        </div>

        {/* Titre */}

        <h3 className="text-2xl font-bold text-white">
          {expertise.title}
        </h3>

        {/* Description */}

        <p className="mt-4 flex-1 leading-8 text-slate-400">
          {expertise.description}
        </p>

        {/* Séparateur */}

        <div className="mt-8 border-t border-slate-800 pt-6">

          <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.20em] text-cyan-400">
            Compétences
          </h4>

          <ul className="space-y-3">

            {expertise.skills.map((skill) => (
              <motion.li
                key={skill}
                whileHover={{
                  x: 4,
                }}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  size={18}
                  className="text-cyan-400"
                />

                <span className="text-slate-300">
                  {skill}
                </span>

              </motion.li>
            ))}

          </ul>

        </div>

      </div>
    </motion.article>
  );
}