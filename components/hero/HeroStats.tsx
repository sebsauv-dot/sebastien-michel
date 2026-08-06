"use client";

import { motion } from "framer-motion";
import { Briefcase, MonitorCog, Server } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: "30+",
    label: "Années d'expérience",
  },
  {
    icon: MonitorCog,
    value: "500+",
    label: "Interventions réalisées",
  },
  {
    icon: Server,
    value: "100%",
    label: "Passion informatique",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-3">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7 + index * 0.15,
            }}
            whileHover={{
              y: -6,
            }}
            className="
              rounded-2xl
              border
              border-blue-500/20
              bg-slate-900/70
              p-6
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-cyan-400/40
              hover:shadow-[0_0_25px_rgba(34,211,238,.20)]
            "
          >
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-blue-500/10 p-3 text-cyan-400">
                <Icon size={26} />
              </div>

              <div>
                <h3 className="text-3xl font-black text-white">
                  {stat.value}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  {stat.label}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}