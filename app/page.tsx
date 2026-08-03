import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/hero/Hero";

import About from "@/components/about/About";

import { Timeline } from "@/components/timeline";

import Skills from "@/components/skills/Skills";

// Les sections ci-dessous seront ajoutées au fur et à mesure
// import Projects from "@/components/projects/Projects";
// import Contact from "@/components/contact/Contact";
// import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-[var(--background)] text-white">

      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Pourquoi moi */}
      <About />

      {/* Parcours professionnel */}
      <Timeline />

      {/* Compétences */}
      <Skills />

      {/*
      ======================================
      V1 - À venir aujourd'hui
      ======================================

      <Projects />

      <Contact />

      <Footer />

      */}

    </main>
  );
}