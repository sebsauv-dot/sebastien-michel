"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Network,
  CreditCard,
  ShieldCheck,
  Headphones,
  Cloud,
} from "lucide-react";

const expertises = [
  {
    icon: Monitor,
    title: "Maintenance",
    subtitle: "Postes & serveurs",
  },
  {
    icon: Network,
    title: "Réseaux",
    subtitle: "LAN • VPN • Wi-Fi",
  },
  {
    icon: CreditCard,
    title: "Solutions TPV",
    subtitle: "Encaissement",
  },
  {
    icon: Cloud,
    title: "Microsoft 365",
    subtitle: "Exchange • Teams",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité",
    subtitle: "Sauvegarde",
  },
  {
    icon: Headphones,
    title: "Support",
    subtitle: "Assistance",
  },
];

export default function ExpertiseBar() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-6">
      {expertises.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.08,
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="
              group
              rounded-[28px]
              border
              border-white/10
              bg-white/5
              p-6
              backdrop-blur-2xl
              transition-all
              duration-300
              hover:border-blue-500/40
              hover:bg-white/10
              hover:shadow-[0_20px_60px_rgba(37,99,235,.25)]
            "
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-600/25">
              <Icon
                size={28}
                className="text-white"
              />
            </div>

            <h3 className="mt-6 text-lg font-bold text-white">
              {item.title}
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              {item.subtitle}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}