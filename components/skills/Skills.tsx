import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import SkillCategory from "./SkillCategory";
import { skillCategories } from "./skillsData";

export default function Skills() {
  return (
    <section
      id="competences"
      className="py-32"
    >
      <Container>

        <SectionTitle
          overline="Compétences"
          title="Expertise Technique"
          subtitle="Plus de 30 années d'expérience dans les infrastructures informatiques, les réseaux, le support et les solutions professionnelles."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              {...category}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}