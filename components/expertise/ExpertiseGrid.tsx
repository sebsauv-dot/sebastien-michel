"use client";

import { motion } from "framer-motion";

import ExpertiseCard from "./ExpertiseCard";
import { expertiseData } from "./expertiseData";

export default function ExpertiseGrid() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        grid
        gap-8
        md:grid-cols-2
        xl:grid-cols-3
        2xl:gap-10
      "
    >
      {expertiseData.map((expertise) => (
        <ExpertiseCard
          key={expertise.id}
          expertise={expertise}
        />
      ))}
    </motion.div>
  );
}