"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";

import Button from "@/components/ui/Button";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.8,
        duration: 0.6,
      }}
      className="mt-12 flex flex-wrap gap-4"
    >
      <Button
        href="/cv/Sebastien_MICHEL_CV.pdf"
        variant="primary"
        className="group"
      >
        <Download
          size={20}
          className="mr-2 transition-transform duration-300 group-hover:-translate-y-0.5"
        />

        Télécharger mon CV
      </Button>

      <Button
        href="#contact"
        variant="outline"
        className="group"
      >
        <Mail
          size={20}
          className="mr-2 transition-transform duration-300 group-hover:translate-x-1"
        />

        Me contacter
      </Button>
    </motion.div>
  );
}