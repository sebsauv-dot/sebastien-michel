"use client";

import { motion } from "framer-motion";

const technologies = [
  "Windows",
  "Windows Server",
  "Microsoft 365",
  "Active Directory",
  "TCP/IP",
  "VPN",
  "Wi-Fi",
  "TPV",
  "NcRetail",
  "Konica Minolta",
  "Triumph Adler",
  "Support",
  "Maintenance",
  "Microsoft Office",
  "TeamViewer",
  "AnyDesk",
];

export default function TechMarquee() {
  const items = [...technologies, ...technologies];

  return (
    <section className="overflow-hidden border-y border-white/10 bg-slate-950/50 py-8">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 28,
          ease: "linear",
        }}
      >
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="rounded-full border border-blue-500/20 bg-white/5 px-6 py-3 text-sm font-medium text-slate-200"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  );
}