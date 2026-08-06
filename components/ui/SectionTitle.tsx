"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  center?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  center = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={center ? "mx-auto max-w-3xl text-center" : ""}
    >
      <span className="font-semibold uppercase tracking-[0.25em] text-blue-400">
        Portfolio Professionnel
      </span>

      <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-400">
        {subtitle}
      </p>
    </motion.div>
  );
}