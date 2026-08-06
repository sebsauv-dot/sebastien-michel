import GlassCard from "../ui/GlassCard";
import SkillBar from "./SkillBar";

type Skill = {
  name: string;
  level: number;
};

type Props = {
  title: string;
  skills: Skill[];
};

export default function SkillCategory({
  title,
  skills,
}: Props) {
  return (
    <GlassCard className="p-8 h-full">

      <h3 className="mb-8 text-2xl font-bold text-white">
        {title}
      </h3>

      <div className="space-y-7">

        {skills.map((skill) => (
          <SkillBar
            key={skill.name}
            {...skill}
          />
        ))}

      </div>

    </GlassCard>
  );
}