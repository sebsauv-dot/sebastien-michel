"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "30+",
    label: "Années d'expérience",
  },
  {
    value: "1000+",
    label: "Interventions",
  },
  {
    value: "500+",
    label: "Clients accompagnés",
  },
  {
    value: "100%",
    label: "Implication",
  },
];

export default function AboutStats() {
  return (
    <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.1,
          }}
          className="
            rounded-3xl
            border
            border-slate-800
            bg-slate-900/70
            p-8
            text-center
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-blue-500/40
          "
        >
          <div className="text-5xl font-bold text-cyan-400">
            {stat.value}
          </div>

          <div className="mt-4 text-slate-400">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}