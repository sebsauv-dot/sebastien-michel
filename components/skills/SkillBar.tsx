"use client";

import { motion } from "framer-motion";

type Props = {
  name: string;
  level: number;
};

export default function SkillBar({
  name,
  level,
}: Props) {
  return (
    <div className="mb-6">
      <div className="mb-2 flex justify-between">
        <span>{name}</span>
        <span>{level}%</span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-800">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
          }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
        />
      </div>
    </div>
  );
}