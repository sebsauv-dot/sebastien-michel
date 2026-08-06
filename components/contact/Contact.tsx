"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
} from "lucide-react";

import Badge from "../ui/Badge";
import Title from "../ui/Title";
import GlassCard from "../ui/GlassCard";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 md:py-24 lg:py-28"
    >
      {/* Effets de fond */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute -left-40 bottom-0 h-[320px] w-[320px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute -right-40 top-20 h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-[140px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">

        <Badge>Contact</Badge>

        <Title
          title="Échangeons sur votre projet"
          subtitle="Disponible pour un poste, une mission ou un accompagnement informatique."
        />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14"
        >

          <GlassCard className="overflow-hidden p-8 md:p-12">

            {/* Photo */}

            <Image
              src="/images/hero/sebastien.png"
              alt="Sébastien MICHEL"
              width={170}
              height={170}
              className="
                mx-auto
                rounded-full
                border-4
                border-cyan-500/20
                shadow-2xl
              "
            />

            {/* Titre */}

            <h3 className="mt-8 text-center text-3xl font-black tracking-tight text-white md:text-4xl">
              Disponible pour vous accompagner
            </h3>

            {/* Texte */}

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-center
                text-lg
                leading-8
                text-slate-300
              "
            >
              Vous recherchez un technicien expérimenté en maintenance
              informatique, administration systèmes &amp; réseaux,
              Microsoft Office ou solutions d&apos;Encaissement ?

              <br />
              <br />

              Depuis plus de <strong>30 ans</strong>, j&apos;accompagne les
              entreprises avec des solutions fiables, un support réactif
              et un accompagnement de proximité.

            </p>

            {/* Coordonnées */}

            <div className="mx-auto mt-12 max-w-xl space-y-8">

              <ContactItem
                icon={<Mail className="text-cyan-400" />}
                title="Mail"
              >
                <a
                  href="mailto:seb.sauv@gmail.com?subject=Prise%20de%20contact%20depuis%20mon%20portfolio"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-cyan-400
                    transition
                    hover:text-cyan-300
                  "
                >
                  Me contacter par e-mail

                  <ExternalLink size={16} />
                </a>
              </ContactItem>

              <ContactItem
                icon={<Phone className="text-cyan-400" />}
                title="Téléphone"
              >
                06&nbsp;81&nbsp;44&nbsp;36&nbsp;32
              </ContactItem>

              <ContactItem
                icon={<MapPin className="text-cyan-400" />}
                title="Localisation"
              >
                Bédarieux • Occitanie
              </ContactItem>
                          </div>

            {/* Disponibilité */}

            <div
              className="
                mx-auto
                mt-12
                max-w-xl
                rounded-2xl
                border
                border-cyan-500/20
                bg-cyan-500/5
                p-6
                text-center
              "
            >
              <p className="text-lg font-bold text-cyan-400">
                🟢 Disponible immédiatement
              </p>

              <p className="mt-2 text-slate-300">
                CDI • CDD • Mission • Freelance
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                N&apos;hésitez pas à me contacter pour échanger
                sur votre projet ou vos besoins.
              </p>

            </div>

            {/* Boutons */}

            <div className="mt-10 flex flex-col gap-4">

              <a
                href="mailto:seb.sauv@gmail.com?subject=Prise%20de%20contact%20depuis%20mon%20portfolio"
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  px-6
                  py-4
                  font-semibold
                  text-white
                  shadow-[0_15px_40px_rgba(37,99,235,.35)]
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                "
              >
                <Mail size={20} />

                M&apos;envoyer un e-mail

              </a>

              <a
                href="/cv/Sebastien_MICHEL_CV.pdf"
                download
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-cyan-500/30
                  bg-cyan-500/10
                  px-6
                  py-4
                  font-semibold
                  text-cyan-300
                  transition-all
                  duration-300
                  hover:bg-cyan-500
                  hover:text-white
                "
              >
                <Download size={20} />

                Télécharger mon CV

              </a>

            </div>

          </GlassCard>

        </motion.div>

      </div>

    </section>
  );
}

function ContactItem({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
        {icon}
      </div>

      <div className="flex-1">

        <h4 className="font-semibold text-white">
          {title}
        </h4>

        <div className="mt-1 text-slate-400">
          {children}
        </div>

      </div>

    </div>
  );
}