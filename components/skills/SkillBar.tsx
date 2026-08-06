"use client";

import { motion } from "framer-motion";

type Props = {
  name: string;
  level: number;
};

export default function SkillBar({
  name,
  level,
}: Props) {
  return (
    <div>

      <div className="mb-3 flex items-center justify-between">

        <span className="font-medium text-slate-200">
          {name}
        </span>

        <span className="font-bold text-blue-400">
          {level}%
        </span>

      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-800">

        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: `${level}%`,
          }}
          transition={{
            duration: 1.3,
          }}
          viewport={{
            once: true,
          }}
          className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-blue-600
            via-blue-500
            to-cyan-400
          "
        />

      </div>

    </div>
  );
}