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
      className="relative overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40"
    >
      <HeroBackground />

      <Container>
        <div
  className="
    relative
    z-10
    grid
    grid-cols-1
    min-h-[550px]
    sm:min-h-[650px]
    items-center
    gap-12
    md:gap-16
    lg:min-h-[700px]
    xl:min-h-[750px]
    lg:grid-cols-[1.45fr_0.95fr]
  "
>
          <HeroContent />

          <HeroImage />
        </div>
      </Container>
    </Section>
  );
}