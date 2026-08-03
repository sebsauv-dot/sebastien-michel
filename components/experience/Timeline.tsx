"use client";

import TimelineItem from "./TimelineItem";
import { experiences } from "./experienceData";

export default function Timeline() {
  return (
    <div className="relative mt-20">

      <div className="absolute left-2 top-0 h-full w-1 rounded-full bg-blue-600/30" />

      {experiences.map((experience) => (
        <TimelineItem
          key={experience.period}
          {...experience}
        />
      ))}
    </div>
  );
}