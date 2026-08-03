import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Timeline from "@/components/experience/Timeline";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-950 text-white">

      <Navbar />

      <Hero />

      <About />

      <Timeline />

      <Skills />

      <Projects />

      <Contact />

      <Footer />

    </main>
  );
}