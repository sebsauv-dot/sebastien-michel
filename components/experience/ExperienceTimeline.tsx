"use client";

import { experienceData } from "./experienceData";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
  return (
    <div className="relative mx-auto max-w-6xl">

      {/* Ligne centrale */}

      <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent md:left-1/2 md:-translate-x-1/2" />

      <div className="space-y-16">

        {experienceData.map((experience, index) => (
          <div
            key={experience.id}
            className={`
              relative flex
              ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }
            `}
          >
            {/* Point sur la timeline */}

            <div
              className="
                absolute
                left-6
                top-10
                z-20
                h-5
                w-5
                rounded-full
                border-4
                border-slate-950
                bg-blue-500
                md:left-1/2
                md:-translate-x-1/2
              "
            />

            {/* Carte */}

            <div className="ml-16 w-full md:ml-0 md:w-[46%]">
              <ExperienceCard experience={experience} />
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}