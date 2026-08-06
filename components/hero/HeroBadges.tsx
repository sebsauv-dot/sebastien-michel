"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Server,
  Laptop,
  Network,
  BriefcaseBusiness,
} from "lucide-react";

const badges = [
  {
    icon: Wrench,
    label: "Maintenance Informatique",
  },
  {
    icon: Server,
    label: "Windows & Server",
  },
  {
    icon: Laptop,
    label: "Microsoft Office",
  },
  {
    icon: Network,
    label: "Réseaux",
  },
  {
    icon: BriefcaseBusiness,
    label: "Solutions TPV",
  },
];

export default function HeroBadges() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.55,
        duration: 0.6,
      }}
      className="mt-10 flex flex-wrap gap-4"
    >
      {badges.map((badge, index) => {
        const Icon = badge.icon;

        return (
          <motion.div
            key={badge.label}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.65 + index * 0.08,
            }}
            whileHover={{
              y: -4,
              scale: 1.05,
            }}
            className="
              group
              flex
              items-center
              gap-3
              rounded-full
              border
              border-blue-500/20
              bg-slate-900/70
              px-5
              py-3
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-cyan-400/60
              hover:bg-blue-500/10
              hover:shadow-[0_0_20px_rgba(34,211,238,.25)]
            "
          >
            <Icon
              size={18}
              className="
                text-cyan-400
                transition-transform
                duration-300
                group-hover:rotate-6
                group-hover:scale-110
              "
            />

            <span className="text-sm font-semibold text-slate-200">
              {badge.label}
            </span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}