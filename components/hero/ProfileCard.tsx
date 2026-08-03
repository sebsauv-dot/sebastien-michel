"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Monitor,
  Network,
  Server,
  Receipt,
} from "lucide-react";

export default function ProfileCard() {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.35 }}
      className="w-full max-w-[460px]"
    >
      {/* Photo */}
      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,.45)] backdrop-blur-2xl">

        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 z-10" />

        <Image
          src="/images/sebastien.png"
          alt="Sébastien MICHEL"
          width={460}
          height={620}
          priority
          className="h-auto w-full object-cover object-top"
        />
      </div>

      {/* Informations */}
      <div className="mt-8 text-center">

        <h2 className="text-4xl font-black text-white">
          Sébastien MICHEL
        </h2>

        <p className="mt-3 text-lg text-slate-300">
          Technicien Maintenance Informatique
        </p>

        <p className="mt-2 text-slate-400">
          Réseaux • Support Technique • Solutions TPV
        </p>

      </div>

      {/* Badges */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">

        <span className="flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
          <Monitor size={16} />
          Windows
        </span>

        <span className="flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
          <Server size={16} />
          Maintenance
        </span>

        <span className="flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
          <Network size={16} />
          Réseaux
        </span>

        <span className="flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
          <Receipt size={16} />
          TPV
        </span>

      </div>
    </motion.div>
  );
}