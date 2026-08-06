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
    label: "Solutions Encaissement",
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

const SIZE = 560;
const PHOTO_SIZE = 400;
const RADIUS = 220;

export default function HeroImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.92,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
      }}
      className="flex items-center justify-center"
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          w-[340px]
          h-[340px]
          sm:w-[430px]
          sm:h-[430px]
          lg:w-[560px]
          lg:h-[560px]
        "
      >
        {/* Halo principal */}

        <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-[120px]" />

        {/* Halo secondaire */}

        <div className="absolute inset-8 rounded-full bg-blue-600/10 blur-[90px]" />

        {/* Halo intérieur */}

        <div className="absolute inset-16 rounded-full bg-cyan-400/10 blur-[60px]" />

        {/* Anneau externe */}

        <div className="absolute inset-2 rounded-full border border-cyan-500/10" />

        {/* Anneau central */}

        <div className="absolute inset-10 rounded-full border border-cyan-400/20" />

        {/* Anneau photo */}

        <div
          className="
            absolute
            inset-[70px]
            rounded-full
            border
            border-cyan-400/30
            bg-gradient-to-br
            from-slate-900
            via-slate-950
            to-slate-900
            shadow-[0_0_80px_rgba(34,211,238,.20)]
          "
        />

        {/* Photo */}

        <div className="absolute inset-0 flex items-center justify-center">

          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              overflow-hidden
              rounded-full
              border-4
              border-slate-800
              shadow-2xl
              shadow-cyan-500/30
            "
          >
            <Image
              src="/images/hero/sebastien.png"
              alt="Sébastien MICHEL"
              width={PHOTO_SIZE}
              height={PHOTO_SIZE}
              priority
              className="
                rounded-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />
          </motion.div>

        </div>
                {/* ==============================
             BADGES (Desktop uniquement)
        ============================== */}

        <div className="hidden lg:block">

          {badges.map((badge, index) => {
            const angle =
              ((360 / badges.length) * index - 90) *
              (Math.PI / 180);

            const x = Math.cos(angle) * RADIUS;
            const y = Math.sin(angle) * RADIUS;

            const Icon = badge.icon;

            return (
              <motion.div
                key={badge.label}
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 0.6 + index * 0.08,
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
                    border-cyan-500/30
                    bg-slate-900/80
                    px-4
                    py-2.5
                    text-sm
                    font-semibold
                    text-cyan-200
                    backdrop-blur-xl
                    shadow-xl
                    transition-all
                    duration-300
                    hover:border-cyan-300
                    hover:bg-cyan-500/15
                    hover:shadow-[0_0_30px_rgba(34,211,238,.35)]
                  "
                >
                  <Icon
                    size={18}
                    className="text-cyan-300"
                  />

                  <span>{badge.label}</span>

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* ==============================
             POINT LUMINEUX
        ============================== */}

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
            className="
              absolute
              h-5
              w-5
              rounded-full
              bg-cyan-400
              shadow-[0_0_30px_#22d3ee]
            "
            style={{
              left: "50%",
              top: "18px",
              transform: "translateX(-50%)",
            }}
          />
        </motion.div>
                {/* =====================================
            BADGES VERSION MOBILE / TABLETTE
        ====================================== */}

        <div
          className="
            absolute
            -bottom-24
            left-1/2
            flex
            w-full
            max-w-md
            -translate-x-1/2
            flex-wrap
            justify-center
            gap-3
            px-4
            lg:hidden
          "
        >
          {badges.map((badge) => {
            const Icon = badge.icon;

            return (
              <motion.div
                key={badge.label}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.45,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-cyan-500/25
                  bg-slate-900/80
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  text-cyan-200
                  backdrop-blur-xl
                  shadow-lg
                "
              >
                <Icon
                  size={15}
                  className="text-cyan-300"
                />

                <span>{badge.label}</span>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </motion.div>
  );
}