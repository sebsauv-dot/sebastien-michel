"use client";

import ExperienceCard from "./ExperienceCard";
import { experienceData } from "./experienceData";

export default function ExperienceGrid() {
  return (
    <div className="grid gap-8">
      {experienceData.map((experience) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
        />
      ))}
    </div>
  );
}