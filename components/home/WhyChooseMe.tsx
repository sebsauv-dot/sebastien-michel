"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Network,
  CreditCard,
  Headphones,
} from "lucide-react";

const cards = [
  {
    icon: Monitor,
    title: "30 ans d'expérience",
    text: "Maintenance informatique, diagnostic, réparation et évolution des infrastructures.",
  },
  {
    icon: Network,
    title: "Réseaux d'entreprise",
    text: "Installation, optimisation, sécurisation et maintenance des réseaux professionnels.",
  },
  {
    icon: CreditCard,
    title: "Solutions TPV",
    text: "Installation, maintenance et assistance sur les systèmes d'encaissement.",
  },
  {
    icon: Headphones,
    title: "Support technique",
    text: "Accompagnement des utilisateurs sur site et à distance avec une forte réactivité.",
  },
];

export default function WhyChooseMe() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Mon engagement
          </span>

          <h2 className="mt-4 text-4xl font-black text-white lg:text-5xl">
            Pourquoi me faire confiance&nbsp;?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Depuis plus de 30 ans, j&apos;accompagne les entreprises dans la
            maintenance informatique, les réseaux, les solutions TPV
            et le support utilisateur avec une approche orientée qualité,
            disponibilité et satisfaction client.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                className="group rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/10"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white">
                  {card.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {card.text}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}