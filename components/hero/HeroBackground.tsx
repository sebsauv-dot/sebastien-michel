"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Halo principal */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-600/15
          blur-[180px]
        "
      />

      {/* Halo secondaire */}

      <motion.div
        animate={{
          x: [-30, 30, -30],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-0
          top-20
          h-96
          w-96
          rounded-full
          bg-cyan-500/10
          blur-[150px]
        "
      />

      {/* Grille */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.06]
        "
        style={{
          backgroundImage: `
            linear-gradient(to right,#ffffff 1px,transparent 1px),
            linear-gradient(to bottom,#ffffff 1px,transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Dégradé */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-slate-950/20
          via-slate-950
          to-slate-950
        "
      />

    </div>
  );
}