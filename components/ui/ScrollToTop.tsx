"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            y: 20,
          }}
          transition={{
            duration: 0.25,
          }}
          onClick={scrollTop}
          aria-label="Retour en haut"
          className="
            fixed
            bottom-8
            right-8
            z-50
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-cyan-500/30
            bg-slate-900/80
            text-cyan-400
            shadow-[0_0_25px_rgba(34,211,238,.25)]
            backdrop-blur-xl
            transition-all
            duration-300
            hover:scale-110
            hover:border-cyan-400
            hover:bg-cyan-500
            hover:text-white
          "
        >
          <ChevronUp size={26} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}