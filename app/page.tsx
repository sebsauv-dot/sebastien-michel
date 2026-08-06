import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Expertise from "@/components/expertise/Expertise";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-950 text-white">
      {/* ================= HERO ================= */}
      <Hero />

      {/* ================= À PROPOS ================= */}
      <About />

      {/* ================= EXPÉRIENCES ================= */}
      <Experience />

      {/* ================= EXPERTISE ================= */}
      <Expertise />

      {/* ================= CONTACT ================= */}
      <Contact />

      {/* ================= FOOTER ================= */}
      <Footer />
    </main>
  );
}