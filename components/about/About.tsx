"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import AboutContent from "./AboutContent";
import AboutStats from "./AboutStats";

export default function About() {
  return (
    <Section
      id="about"
      className="relative overflow-hidden"
    >
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/5 blur-[150px]" />

      <Container>
        <AboutContent />

        <AboutStats />
      </Container>
    </Section>
  );
}