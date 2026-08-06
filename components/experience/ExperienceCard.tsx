"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  CheckCircle2,
} from "lucide-react";

interface Experience {
  id: number;
  icon: React.ElementType;
  company: string;
  location: string;
  period: string;
  title: string;
  description: string;
  technologies: string[];
  missions: string[];
}

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  const Icon = experience.icon;

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
        overflow-hidden
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/70
        p-8
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:shadow-[0_0_45px_rgba(34,211,238,.15)]
      "
    >
      {/* Header */}

      <div className="flex items-start gap-5">

        <div
          className="
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
          <Icon size={30} />
        </div>

        <div className="flex-1">

          <h3 className="text-2xl font-bold text-white">
            {experience.title}
          </h3>

          <p className="mt-1 text-lg font-semibold text-cyan-400">
            {experience.company}
          </p>

          <div className="mt-4 flex flex-wrap gap-5 text-sm text-slate-400">

            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {experience.period}
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} />
              {experience.location}
            </div>

          </div>

        </div>

      </div>

      {/* Description */}

      <p className="mt-8 leading-8 text-slate-300">
        {experience.description}
      </p>

      {/* Missions */}

      <div className="mt-10">

        <h4 className="mb-5 text-lg font-semibold text-white">
          Missions principales
        </h4>

        <div className="grid gap-4 md:grid-cols-2">

          {experience.missions.map((mission) => (
            <div
              key={mission}
              className="flex items-center gap-3"
            >
              <CheckCircle2
                size={18}
                className="text-cyan-400"
              />

              <span className="text-slate-300">
                {mission}
              </span>

            </div>
          ))}

        </div>

      </div>

      {/* Technologies */}

      <div className="mt-10">

        <h4 className="mb-5 text-lg font-semibold text-white">
          Environnement technique
        </h4>

        <div className="flex flex-wrap gap-3">

          {experience.technologies.map((technology) => (
            <motion.span
              key={technology}
              whileHover={{
                scale: 1.05,
              }}
              className="
                rounded-full
                border
                border-cyan-500/20
                bg-cyan-500/10
                px-4
                py-2
                text-sm
                font-medium
                text-cyan-300
                transition-all
                duration-300
              "
            >
              {technology}
            </motion.span>
          ))}

        </div>

      </div>

    </motion.article>
  );
}