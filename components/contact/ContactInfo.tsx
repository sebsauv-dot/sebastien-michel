"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
} from "lucide-react";

import { contactData } from "./contactData";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <h2 className="text-4xl font-bold text-white">
        Restons en contact
      </h2>

      <p className="text-lg leading-8 text-slate-400">
        {contactData.description}
      </p>

      <div className="space-y-6">

        <div className="flex items-center gap-5">
          <div className="rounded-2xl bg-blue-600/10 p-4">
            <Mail className="text-blue-400" />
          </div>

          <div>
            <p className="text-sm text-slate-400">
              Email
            </p>

            <p className="text-lg font-semibold text-white">
              {contactData.email}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="rounded-2xl bg-blue-600/10 p-4">
            <Phone className="text-blue-400" />
          </div>

          <div>
            <p className="text-sm text-slate-400">
              Téléphone
            </p>

            <p className="text-lg font-semibold text-white">
              {contactData.phone}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="rounded-2xl bg-blue-600/10 p-4">
            <MapPin className="text-blue-400" />
          </div>

          <div>
            <p className="text-sm text-slate-400">
              Localisation
            </p>

            <p className="text-lg font-semibold text-white">
              {contactData.city}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="rounded-2xl bg-blue-600/10 p-4">
            <Linkedin className="text-blue-400" />
          </div>

          <div>
            <p className="text-sm text-slate-400">
              LinkedIn
            </p>

            <a
              href={contactData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-cyan-400 hover:text-cyan-300"
            >
              Voir mon profil
            </a>
          </div>
        </div>

      </div>

      <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">
        <p className="font-semibold text-blue-300">
          {contactData.availability}
        </p>
      </div>
    </motion.div>
  );
}