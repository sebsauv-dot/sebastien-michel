"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface HeroExpertise {
  id: string;
  label: string;
  title: string;
  description: string;
  skills: string[];
}

interface HeroInteractiveCardProps {
  expertise: HeroExpertise;
}

export default function HeroInteractiveCard({
  expertise,
}: HeroInteractiveCardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={expertise.id}
        initial={{
          opacity: 0,
          x: -20,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        exit={{
          opacity: 0,
          x: 20,
        }}
        transition={{
          duration: 0.35,
        }}
        className="
          mt-10
          rounded-3xl
          border
          border-blue-500/20
          bg-slate-900/70
          p-6
          backdrop-blur-xl
        "
      >
        <h3 className="text-xl font-bold text-white">
          {expertise.title}
        </h3>

        <p className="mt-3 text-slate-400 leading-7">
          {expertise.description}
        </p>

        <div className="mt-6 space-y-3">
          {expertise.skills.map((skill) => (
            <div
              key={skill}
              className="flex items-center gap-3"
            >
              <CheckCircle2
                size={18}
                className="text-cyan-400"
              />

              <span className="text-slate-300">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}