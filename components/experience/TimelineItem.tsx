"use client";

import { motion } from "framer-motion";
import { Building2, CalendarDays, ChevronRight } from "lucide-react";

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
    <motion.article
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="group relative pl-16"
    >
      {/* Point */}
      <div className="absolute left-[30px] top-10 z-10 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-slate-950 bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,.8)] transition-all duration-500 group-hover:scale-125 group-hover:bg-cyan-400" />

      {/* Carte */}
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(37,99,235,.20)]">

        {/* Bandeau */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 px-8 py-6">

          <div className="flex items-center gap-3">
            <Building2 className="text-blue-400" size={22} />

            <div>
              <h3 className="text-2xl font-bold text-white">
                {company}
              </h3>

              <p className="mt-1 text-slate-300">
                {position}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            <CalendarDays size={16} />
            {period}
          </div>

        </div>

        {/* Contenu */}
        <div className="p-8">

          <p className="leading-8 text-slate-300">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-slate-900/40 px-4 py-2 text-sm text-slate-200 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/15 hover:text-white"
              >
                {tech}
              </span>
            ))}

          </div>

          <div className="mt-8 flex items-center gap-2 text-blue-400">

            <ChevronRight size={18} />

            <span className="text-sm font-medium uppercase tracking-wider">
              Expérience professionnelle
            </span>

          </div>

        </div>

      </div>
    </motion.article>
  );
}