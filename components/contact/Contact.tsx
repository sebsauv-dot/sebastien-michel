"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Download,
  Loader2,
} from "lucide-react";

import Badge from "../ui/Badge";
import Title from "../ui/Title";
import GlassCard from "../ui/GlassCard";

import { sendContactMail } from "@/lib/email";

export default function Contact() {
  const [form, setForm] = useState({
    from_name: "",
    reply_to: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setSuccess(false);
    setError("");

    if (
      !form.from_name ||
      !form.reply_to ||
      !form.subject ||
      !form.message
    ) {
      setError("Merci de compléter tous les champs.");
      return;
    }

    setLoading(true);

    try {
      await sendContactMail(form);

      setSuccess(true);

      setForm({
        from_name: "",
        reply_to: "",
        subject: "",
        message: "",
      });
    } catch {
      setError(
        "Une erreur est survenue lors de l'envoi du message."
      );
    } finally {
      setLoading(false);
    }
  };

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

        <div className="mt-14 grid gap-8 md:mt-20 lg:grid-cols-2 lg:gap-10">

          {/* Coordonnées */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <GlassCard className="h-full p-6 md:p-8 lg:p-10">

              <h3 className="text-2xl font-bold text-white md:text-3xl">
                Restons en contact
              </h3>

              <p className="mt-5 text-base leading-7 text-slate-300 md:text-lg md:leading-8">
                Vous recherchez un technicien expérimenté,
                autonome et orienté satisfaction client ?
                Je serai ravi d&apos;échanger avec vous afin
                d&apos;étudier vos besoins et de mettre mes
                compétences à votre service.
              </p>

              <div className="mt-10 space-y-8">

                {/* Email */}

                <div className="flex items-start gap-4 md:gap-5">

                  <div className="flex-shrink-0 rounded-xl bg-cyan-500/10 p-2.5 md:p-3">
                    <Mail className="text-cyan-400" />
                  </div>

                  <div>

                    <h4 className="font-semibold text-white">
                      Adresse e-mail
                    </h4>

                    <a
                      href="mailto:seb.sauv@gmail.com"
                      className="mt-1 inline-block break-all text-sm text-cyan-400 transition hover:text-cyan-300 md:text-base"
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
                href="/cv/Sebastien_MICHEL_CV.pdf"
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

          {/* Formulaire */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <GlassCard className="p-6 md:p-8 lg:p-10">

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >                <input
                  type="text"
                  name="from_name"
                  value={form.from_name}
                  onChange={handleChange}
                  placeholder="Nom"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-white outline-none transition focus:border-cyan-500 md:py-4"
                />

                <input
                  type="email"
                  name="reply_to"
                  value={form.reply_to}
                  onChange={handleChange}
                  placeholder="Adresse e-mail"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-white outline-none transition focus:border-cyan-500 md:py-4"
                />

                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Sujet"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-white outline-none transition focus:border-cyan-500 md:py-4"
                />

                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Votre message..."
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-cyan-500"
                />

                {error && (
                  <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    {error}
                  </div>
                )}

                {success && (
                  <div className="rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-300">
                    ✅ Votre message a été envoyé avec succès.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
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
                    py-3.5
                    font-semibold
                    shadow-[0_15px_40px_rgba(37,99,235,.35)]
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                    md:px-8
                    md:py-4
                  "
                >
                  {loading ? (
                    <>
                      <Loader2
                        size={20}
                        className="animate-spin"
                      />

                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={18} />

                      Envoyer le message
                    </>
                  )}
                </button>

              </form>

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