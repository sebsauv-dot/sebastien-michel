"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Skill {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  skills: string[];
}

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({
  skill,
}: SkillCardProps) {
  const Icon = skill.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="
        group
        h-full
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/70
        p-8
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-blue-500/40
        hover:shadow-[0_0_40px_rgba(37,99,235,.15)]
      "
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
        <Icon size={32} />
      </div>

      <h3 className="text-2xl font-bold text-white">
        {skill.title}
      </h3>

      <p className="mt-4 leading-7 text-slate-400">
        {skill.description}
      </p>

      <div className="mt-8 space-y-3">
        {skill.skills.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <CheckCircle2
              size={18}
              className="text-cyan-400"
            />

            <span className="text-slate-300">
              {item}
            </span>
          </div>
        ))}
      </div>
    </motion.article>
  );
}