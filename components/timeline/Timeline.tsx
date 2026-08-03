import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import { experiences } from "@/data/experience";

import TimelineItem from "./TimelineItem";
import TimelineLine from "./TimelineLine";

export default function Timeline() {
  return (
    <section
      id="parcours"
      className="py-32"
    >
      <Container>

        <SectionTitle
          overline="Parcours"
          title="30 années d'expérience professionnelle"
          subtitle="Une carrière construite autour des systèmes, des réseaux, de la maintenance informatique et de l'accompagnement des entreprises."
        />

        <div className="relative mt-20">

          <TimelineLine />

          {experiences.map((experience) => (
            <TimelineItem
              key={`${experience.company}-${experience.period}`}
              {...experience}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}