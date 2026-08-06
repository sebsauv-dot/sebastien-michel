"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="#home"
      className="group flex items-center gap-4"
    >
      <Image
        src="/images/logo-sm.png"
        alt="Logo Sébastien MICHEL"
        width={52}
        height={52}
        priority
        className="
          rounded-xl
          transition-transform
          duration-300
          group-hover:scale-110
        "
      />

      <div className="hidden sm:block">

        <h1
          className="
            text-lg
            font-extrabold
            tracking-wide
            text-white
            transition-colors
            duration-300
            group-hover:text-cyan-400
          "
        >
          Sébastien MICHEL
        </h1>

        <p className="text-xs text-slate-400">
          Maintenance Informatique • Réseaux • TPV
        </p>

      </div>

    </Link>
  );
}