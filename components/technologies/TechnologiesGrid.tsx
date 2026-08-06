"use client";

import { technologiesData } from "./technologiesData";
import TechnologyCard from "./TechnologyCard";

export default function TechnologiesGrid() {
  return (
    <div
      className="
        grid
        gap-8
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      {technologiesData.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
        />
      ))}
    </div>
  );
}