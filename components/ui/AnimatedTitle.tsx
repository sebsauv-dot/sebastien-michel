"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export default function AnimatedTitle({
  children,
}: Props) {
  return (
    <motion.h1
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        bg-gradient-to-r
        from-white
        via-white
        to-blue-300
        bg-clip-text
        text-5xl
        font-black
        leading-tight
        text-transparent
        lg:text-7xl
      "
    >
      {children}
    </motion.h1>
  );
}