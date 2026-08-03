"use client";

import { motion } from "framer-motion";

type Props = {
  period: string;
  company: string;
  location: string;
  title: string;
  description: string;
  missions: string[];
  technologies: string[];
};

export default function ExperienceCard({
  period,
  company,
  location,
  title,
  description,
  missions,
  technologies,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      <span className="text-sm font-semibold text-cyan-400">
        {period}
      </span>

      <h3 className="mt-2 text-3xl font-bold text-white">
        {company}
      </h3>

      <p className="text-slate-400">{location}</p>

      <h4 className="mt-4 text-xl font-semibold text-blue-300">
        {title}
      </h4>

      <p className="mt-5 leading-8 text-slate-400">
        {description}
      </p>

      <div className="mt-8">
        <h5 className="mb-3 font-semibold text-white">
          Missions
        </h5>

        <ul className="space-y-2">
          {missions.map((mission) => (
            <li
              key={mission}
              className="flex items-center gap-3 text-slate-300"
            >
              <div className="h-2 w-2 rounded-full bg-blue-400" />
              {mission}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300 border border-blue-500/30"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}