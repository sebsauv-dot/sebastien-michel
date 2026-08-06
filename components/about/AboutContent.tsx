"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { aboutData } from "./aboutData";

export default function AboutContent() {
  return (
    <div className="grid items-center gap-16 lg:grid-cols-2">
      {/* Texte */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
          {aboutData.subtitle}
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          {aboutData.title}
        </h2>

        <p className="mt-8 whitespace-pre-line text-lg leading-8 text-slate-400">
          {aboutData.description}
        </p>
      </motion.div>

      {/* Compétences */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        className="grid gap-5 sm:grid-cols-2"
      >
        {aboutData.points.map((point) => (
          <div
            key={point}
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-slate-800
              bg-slate-900/70
              p-5
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-blue-500/40
              hover:bg-slate-900
            "
          >
            <CheckCircle2
              className="text-cyan-400"
              size={22}
            />

            <span className="font-medium text-slate-200">
              {point}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}