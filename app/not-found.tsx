"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl text-center"
      >
        <h1 className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-8xl font-black text-transparent">
          404
        </h1>

        <h2 className="mt-8 text-4xl font-bold">
          Page introuvable
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              px-8
              py-4
              font-semibold
              transition-all
              duration-300
              hover:scale-105
            "
          >
            <Home size={20} />
            Retour à l&apos;accueil
          </Link>

          <button
            type="button"
            onClick={() => history.back()}
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-xl
              border
              border-slate-700
              px-8
              py-4
              font-semibold
              transition-all
              duration-300
              hover:border-cyan-500
              hover:text-cyan-400
            "
          >
            <ArrowLeft size={20} />
            Page précédente
          </button>
        </div>
      </motion.div>
    </main>
  );
}