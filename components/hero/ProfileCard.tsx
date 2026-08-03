"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  Monitor,
  Network,
  Server,
  ShieldCheck,
} from "lucide-react";

export default function ProfileCard() {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
        rotateX: 5,
        rotateY: -5,
      }}
      transition={{
        duration: 0.35,
      }}
      className="relative h-[650px] w-[450px] overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_40px_100px_rgba(0,0,0,.45)]"
    >
      {/* Halo lumineux */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />

      {/* Photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/sebastien.png"
          alt="Sébastien MICHEL"
          fill
          priority
          className="object-cover object-top"
        />
      </div>

      {/* Dégradé */}
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />

      {/* Informations */}
      <div className="absolute bottom-0 left-0 right-0 p-8">

        <h2 className="text-3xl font-bold text-white">
          Sébastien MICHEL
        </h2>

        <p className="mt-2 text-slate-300">
          Technicien Informatique
        </p>

        <div className="mt-8 flex flex-wrap gap-3">

          <span className="flex items-center gap-2 rounded-full bg-blue-500/15 px-4 py-2 text-sm text-blue-300">
            <Monitor size={16} />
            Windows
          </span>

          <span className="flex items-center gap-2 rounded-full bg-blue-500/15 px-4 py-2 text-sm text-blue-300">
            <Server size={16} />
            Maintenance Informatique
          </span>

          <span className="flex items-center gap-2 rounded-full bg-blue-500/15 px-4 py-2 text-sm text-blue-300">
            <Network size={16} />
            Réseaux
          </span>
          
          <span className="flex items-center gap-2 rounded-full bg-blue-500/15 px-4 py-2 text-sm text-blue-300">
            <ShieldCheck size={16} />
            Bureautique
          </span>

          <span className="flex items-center gap-2 rounded-full bg-blue-500/15 px-4 py-2 text-sm text-blue-300">
            <ShieldCheck size={16} />
            TPV
          </span>

        </div>

      </div>
    </motion.div>
  );
}