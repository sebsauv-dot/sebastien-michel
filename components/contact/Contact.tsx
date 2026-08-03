"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
} from "lucide-react";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />
      </div>

      <Container>

        <SectionTitle
          overline="Contact"
          title="Échangeons sur votre projet"
          subtitle="Disponible pour un poste en maintenance informatique, réseaux, support technique ou solutions TPV."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 grid gap-8 lg:grid-cols-2"
        >

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">

            <h3 className="text-3xl font-bold text-white">
              Restons en contact
            </h3>

            <p className="mt-5 leading-8 text-slate-300">
              Je suis disponible pour échanger sur une opportunité
              professionnelle ou un projet informatique.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">
                <Mail className="text-blue-400" />
                <span className="text-slate-200">
                  seb.sauv@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-blue-400" />
                <span className="text-slate-200">
                  06.81.44.36.32
                </span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-blue-400" />
                <span className="text-slate-200">
                  Bédarieux (Hérault)
                </span>
              </div>

            </div>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">

            <h3 className="text-2xl font-bold text-white">
              Retrouvez-moi
            </h3>

            <div className="mt-8 space-y-4">

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/10 p-5 transition hover:border-blue-500/50 hover:bg-blue-500/10"
              >
                <div className="flex items-center gap-4">
                  <Linkedin className="text-blue-400" />
                  <span>LinkedIn</span>
                </div>
              </a>

              <a
                href="https://github.com/sebsauv-dot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/10 p-5 transition hover:border-blue-500/50 hover:bg-blue-500/10"
              >
                <div className="flex items-center gap-4">
                  <Github className="text-blue-400" />
                  <span>GitHub</span>
                </div>
              </a>

            </div>

          </div>

        </motion.div>

      </Container>
    </section>
  );
}