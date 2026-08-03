"use client";

import { motion } from "framer-motion";

type Props = {
  value: number;
  label: string;
};

export default function AnimatedCounter({ value, label }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <h3 className="text-4xl font-bold text-blue-400">
        {value}+
      </h3>

      <p className="mt-2 text-slate-300">
        {label}
      </p>
    </motion.div>
  );
}