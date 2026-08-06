"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <motion.form
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        space-y-6
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/70
        p-8
        backdrop-blur-xl
      "
    >
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-slate-300"
        >
          Nom
        </label>

        <input
          id="name"
          type="text"
          placeholder="Votre nom"
          className="
            w-full
            rounded-xl
            border
            border-slate-700
            bg-slate-950
            px-5
            py-4
            text-white
            placeholder:text-slate-500
            outline-none
            transition-all
            duration-300
            focus:border-cyan-500
            focus:ring-2
            focus:ring-cyan-500/20
          "
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-slate-300"
        >
          Adresse e-mail
        </label>

        <input
          id="email"
          type="email"
          placeholder="nom@email.fr"
          className="
            w-full
            rounded-xl
            border
            border-slate-700
            bg-slate-950
            px-5
            py-4
            text-white
            placeholder:text-slate-500
            outline-none
            transition-all
            duration-300
            focus:border-cyan-500
            focus:ring-2
            focus:ring-cyan-500/20
          "
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="mb-2 block text-sm font-medium text-slate-300"
        >
          Sujet
        </label>

        <input
          id="subject"
          type="text"
          placeholder="Objet du message"
          className="
            w-full
            rounded-xl
            border
            border-slate-700
            bg-slate-950
            px-5
            py-4
            text-white
            placeholder:text-slate-500
            outline-none
            transition-all
            duration-300
            focus:border-cyan-500
            focus:ring-2
            focus:ring-cyan-500/20
          "
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-slate-300"
        >
          Message
        </label>

        <textarea
          id="message"
          rows={6}
          placeholder="Décrivez votre besoin..."
          className="
            w-full
            resize-none
            rounded-xl
            border
            border-slate-700
            bg-slate-950
            px-5
            py-4
            text-white
            placeholder:text-slate-500
            outline-none
            transition-all
            duration-300
            focus:border-cyan-500
            focus:ring-2
            focus:ring-cyan-500/20
          "
        />
      </div>

      <button
        type="submit"
        className="
          inline-flex
          items-center
          gap-3
          rounded-xl
          bg-gradient-to-r
          from-blue-600
          to-cyan-500
          px-8
          py-4
          font-semibold
          text-white
          shadow-[0_15px_40px_rgba(37,99,235,.35)]
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-[0_20px_50px_rgba(34,211,238,.35)]
        "
      >
        <Send size={18} />

        Envoyer le message
      </button>
    </motion.form>
  );
}