"use client";

import { motion } from "framer-motion";

type Props = {
  period: string;
  company: string;
  position: string;
  description: string;
  technologies: string[];
};

export default function TimelineItem({
  period,
  company,
  position,
  description,
  technologies,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative pl-14 pb-16"
    >
      <div className="absolute left-0 top-2 h-5 w-5 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />

      <span className="text-blue-400 font-semibold">
        {period}
      </span>

      <h3 className="mt-2 text-3xl font-bold">
        {company}
      </h3>

      <h4 className="mt-2 text-xl text-slate-300">
        {position}
      </h4>

      <p className="mt-6 leading-8 text-slate-400">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}