"use client";

import { Cpu } from "lucide-react";

export default function Logo() {
  return (
    <a
      href="#accueil"
      className="group flex items-center gap-4"
    >
      {/* Icône */}
      <div
        className="
          relative
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-blue-600
          via-blue-500
          to-cyan-400
          shadow-[0_15px_35px_rgba(37,99,235,.40)]
          transition-all
          duration-300
          group-hover:rotate-6
          group-hover:scale-105
        "
      >
        <Cpu
          size={30}
          className="text-white"
        />
      </div>

      {/* Texte */}
      <div>

        <h2 className="text-xl font-black tracking-wide text-white">
          Sébastien
          <span className="text-blue-400"> MICHEL</span>
        </h2>

        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
          IT • NETWORK • TPV
        </p>

      </div>

    </a>
  );
}