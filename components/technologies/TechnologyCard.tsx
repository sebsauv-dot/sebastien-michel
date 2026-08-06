"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Technology {
  id: number;
  icon: React.ElementType;
  title: string;
  items: string[];
}

interface TechnologyCardProps {
  technology: Technology;
}

export default function TechnologyCard({
  technology,
}: TechnologyCardProps) {
  const Icon = technology.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="
        group
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
      {/* Icône */}

      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
        <Icon size={32} />
      </div>

      {/* Titre */}

      <h3 className="mb-6 text-2xl font-bold text-white">
        {technology.title}
      </h3>

      {/* Liste */}

      <ul className="space-y-3">
        {technology.items.map((item) => (
          <li
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
          </li>
        ))}
      </ul>
    </motion.article>
  );
}