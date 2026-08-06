"use client";

import { motion } from "framer-motion";

import Badge from "../ui/Badge";
import Title from "../ui/Title";

import AdvantageCard from "./AdvantageCard";
import { advantages } from "./advantagesData";

export default function Advantages() {
  return (
    <section className="relative py-36">

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <Badge>Pourquoi moi ?</Badge>

        <Title
          title="Pourquoi travailler avec moi ?"
          subtitle="Au-delà des compétences techniques, j'apporte une expérience de terrain, une forte capacité d'adaptation et un véritable sens du service."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {advantages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.08,
              }}
              viewport={{
                once: true,
              }}
            >
              <AdvantageCard {...item} />
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}