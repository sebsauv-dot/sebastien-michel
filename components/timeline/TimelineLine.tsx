"use client";

import { motion } from "framer-motion";

export default function TimelineLine() {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      className="absolute left-5 top-0 w-[3px] rounded-full bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent"
    />
  );
}