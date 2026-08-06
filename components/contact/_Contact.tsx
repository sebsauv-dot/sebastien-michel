"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Download,
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
      {/* Halo */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute -left-40 bottom-0 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="absolute -right-40 top-20 h-[300px] w-[300px] rounded-full bg-cyan-400/10 blur-[120px]" />

      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <Badge>Contact</Badge>

        <Title
          title="Échangeons sur votre projet"
          subtitle="Disponible pour un poste, une mission ou un accompagnement informatique."
        />

        <div className="mx-auto mt-16 max-w-3xl">

          {/* Présentation */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="h-full p-6 md:p-8 lg:p-10">

              <h3 className="text-2xl font-bold text-white md:text-3xl">
                 Mes coordonnées
              </h3>

              <p className="mt-5 text-base leading-7 text-slate-300 md:text-lg md:leading-8">
                 Vous souhaitez échanger au sujet d&apos;un poste,
                 d&apos;une mission ou d&apos;un projet informatique ?

                  <br />
                  <br />

                  
                Retrouvez ci-dessous toutes mes coordonnées.
                Je suis disponible pour répondre rapidement à vos demandes
              </p>

              <div className="mt-10 space-y-8">

                <div className="flex items-start gap-4 md:gap-5">

  <div className="flex-shrink-0 rounded-xl bg-cyan-500/10 p-2.5 md:p-3">
    <Mail className="text-cyan-400" />
  </div>

  <div className="min-w-0">

    <h4 className="font-semibold text-white">
      Mail
    </h4>

    <a
      href="mailto:seb.sauv@gmail.com?subject=Prise%20de%20contact%20depuis%20mon%20portfolio"
      className="
        mt-1
        inline-block
        text-sm
        text-cyan-400
        transition
        hover:text-cyan-300
        md:text-base
      "
    >
      Me contacter par e-mail
    </a>

  </div>

</div>

                <ContactItem
                  icon={<Phone className="text-cyan-400" />}
                  title="Téléphone"
                  value="06 81 44 36 32"
                />

                <ContactItem
                  icon={<MapPin className="text-cyan-400" />}
                  title="Localisation"
                  value="Bédarieux • Occitanie"
                />

              </div>

              <a
                href="/cv/CV-Sebastien-Michel.pdf"
                download
                className="
                  mt-10
                  flex
                  w-full
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
                  sm:w-auto
                "
              >
                <Download size={18} />

                Télécharger mon CV

              </a>

                        </GlassCard>

          </motion.div>

          {/* Carte de contact */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-10">

              <div>

                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  Disponible pour vous accompagner
                </h3>

                <p className="mt-5 text-base leading-7 text-slate-300 md:text-lg md:leading-8">

                  Vous recherchez un technicien expérimenté en maintenance informatique,
                  administration systèmes et réseaux, Microsoft Office ou solutions d&apos;Encaissement ?

                <br />
                <br />

                Grâce à plus de 30 années d&apos;expérience, je mets mes compétences au
                service des entreprises afin d&apos;apporter des solutions fiables,
                un accompagnement de proximité et un support réactif.

</p>

                <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">

                  <p className="text-center text-sm uppercase tracking-[0.25em] text-cyan-400">
                    Disponible
                  </p>

                  <h4 className="mt-3 text-center text-xl font-bold text-white">
                    CDI • CDD • Mission • Freelance
                  </h4>

                  <p className="mt-4 text-center leading-7 text-slate-400">
                    N&apos;hésitez pas à me contacter.
                    
                  </p>

                </div>

              </div>

              <div className="mt-10 space-y-4">

                <a
                  href="mailto:seb.sauv@gmail.com?subject=Prise%20de%20contact%20depuis%20votre%20portfolio"
                  className="
                    flex
                    w-full
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
                    w-full
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

      </div>

    </section>
  );
}

function ContactItem({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4 md:gap-5">

      <div className="flex-shrink-0 rounded-xl bg-cyan-500/10 p-2.5 md:p-3">
        {icon}
      </div>

      <div className="min-w-0">

        <h4 className="font-semibold text-white">
          {title}
        </h4>

        <p className="mt-1 break-words text-sm text-slate-400 md:text-base">
          {value}
        </p>

      </div>

    </div>
  );
}