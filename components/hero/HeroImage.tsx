"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  Monitor,
  Receipt,
  Users,
  Wrench,
} from "lucide-react";

const badges = [
  {
    label: "Maintenance informatique",
    icon: Wrench,
  },
  {
    label: "Microsoft Office",
    icon: Briefcase,
  },
  {
    label: "Windows",
    icon: Monitor,
  },
  {
    label: "Solutions TPV",
    icon: Receipt,
  },
  {
    label: "Support Utilisateurs",
    icon: Users,
  },
  {
    label: "Support Bureautique",
    icon: Award,
  },
];

const SIZE = 620;
const PHOTO_SIZE = 330;
const RADIUS = 255;

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center"
    >
      <div
        className="relative"
        style={{
          width: SIZE,
          height: SIZE,
        }}
      >
        {/* Halo lumineux */}
        <div className="absolute inset-0 rounded-full bg-blue-600/10 blur-3xl" />

        {/* Anneau extérieur */}
        <div className="absolute inset-2 rounded-full border border-blue-500/10" />

        {/* Anneau central */}
        <div className="absolute inset-12 rounded-full border border-blue-500/20" />

        {/* Anneau photo */}
        <div className="absolute inset-[95px] rounded-full border-2 border-blue-500/30 bg-gradient-to-br from-slate-900 to-slate-950 shadow-[0_0_80px_rgba(37,99,235,.25)]" />

        {/* PHOTO */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            transition={{
              duration: 0.3,
            }}
            className="overflow-hidden rounded-full border-4 border-slate-800 shadow-2xl shadow-blue-500/20"
          >
            <Image
              src="/images/hero/avatar-placeholder.png"
              alt="Sébastien MICHEL"
              width={PHOTO_SIZE}
              height={PHOTO_SIZE}
              priority
              className="rounded-full object-cover"
            />
          </motion.div>
        </div>

        {/* ==============================
             BADGES AUTOUR DU CERCLE
           ============================== */}

        {badges.map((badge, index) => {
          const angle =
            ((360 / badges.length) * index - 90) * (Math.PI / 180);

          const x = Math.cos(angle) * RADIUS;
          const y = Math.sin(angle) * RADIUS;

          const Icon = badge.icon;

          return (
            <motion.div
              key={badge.label}
              initial={{
                opacity: 0,
                scale: 0.6,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.7 + index * 0.1,
                duration: 0.5,
              }}
              whileHover={{
                scale: 1.08,
                y: -6,
              }}
              className="absolute left-1/2 top-1/2 z-30"
              style={{
                marginLeft: x,
                marginTop: y,
              }}
            >
              <div
                className="
                  flex
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  gap-2
                  whitespace-nowrap
                  rounded-full
                  border
                  border-blue-500/30
                  bg-slate-900/90
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-blue-300
                  shadow-xl
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-cyan-300
                  hover:bg-blue-500/20
                  hover:text-cyan-200
                  hover:shadow-[0_0_25px_rgba(34,211,238,.30)]
                "
              >
                <Icon
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-6"
                />

                <span>{badge.label}</span>
              </div>
            </motion.div>
          );
        })}

        {/* Point lumineux */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0"
        >
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-5 w-5 rounded-full bg-cyan-400 shadow-[0_0_25px_#22d3ee]"
            style={{
              left: "50%",
              top: "25px",
              transform: "translateX(-50%)",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}