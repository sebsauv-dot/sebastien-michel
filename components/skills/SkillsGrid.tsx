"use client";

import SkillCard from "./SkillCard";
import { skillsData } from "./skillsData";

export default function SkillsGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {skillsData.map((skill) => (
        <SkillCard
          key={skill.id}
          skill={skill}
        />
      ))}
    </div>
  );
}