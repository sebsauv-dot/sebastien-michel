"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  value: string;
};

export default function InfoCard({
  icon: Icon,
  title,
  value,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: .35,
      }}
      className="
        group
        rounded-[30px]
        border
        border-white/10
        bg-white/5
        p-7
        backdrop-blur-2xl
        transition-all
        duration-500
        hover:border-blue-500/40
      "
    >
      <div className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        bg-gradient-to-br
        from-blue-600
        to-cyan-500
      ">
        <Icon
          className="text-white"
          size={28}
        />
      </div>

      <h3 className="mt-6 text-sm uppercase tracking-[0.2em] text-slate-400">
        {title}
      </h3>

      <p className="mt-3 text-xl font-bold text-white">
        {value}
      </p>
    </motion.div>
  );
}