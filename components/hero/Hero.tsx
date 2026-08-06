"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <Section
      id="home"
      className="relative overflow-hidden pt-28 md:pt-36 lg:pt-40"
    >
      <HeroBackground />

      <Container>
        <div className="relative z-10 grid min-h-[750px] items-center gap-16 lg:grid-cols-2">

          <HeroContent />

          <HeroImage />

        </div>
      </Container>

    </Section>
  );
}