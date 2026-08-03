import ExperienceCard from "./ExperienceCard";

type Props = {
  period: string;
  company: string;
  location: string;
  title: string;
  description: string;
  missions: string[];
  technologies: string[];
};

export default function TimelineItem(props: Props) {
  return (
    <div className="relative pl-16 pb-20">

      <div className="absolute left-0 top-10 h-5 w-5 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />

      <ExperienceCard {...props} />

    </div>
  );
}