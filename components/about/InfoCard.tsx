"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type InfoCardProps = {
  icon: LucideIcon;
  title: string;
  value: string;
};

export default function InfoCard({
  icon: Icon,
  title,
  value,
}: InfoCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <Icon className="mb-4 h-8 w-8 text-blue-400" />

      <h3 className="text-sm uppercase tracking-widest text-slate-400">
        {title}
      </h3>

      <p className="mt-2 text-xl font-semibold text-white">
        {value}
      </p>
    </motion.div>
  );
}