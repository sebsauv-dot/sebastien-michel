"use client";

import { Download } from "lucide-react";

export default function DownloadCVButton() {
  return (
    <a
      href="/cv/Sebastien_MICHEL_CV.pdf"
      download
      className="
        inline-flex
        items-center
        gap-2
        rounded-xl
        bg-blue-600
        px-5
        py-3
        font-semibold
        text-white
        transition
        duration-300
        hover:bg-blue-700
      "
    >
      <Download size={18} />

      Télécharger CV
    </a>
  );
}