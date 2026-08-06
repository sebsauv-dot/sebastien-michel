import { LucideIcon } from "lucide-react";

interface IconBadgeProps {
  icon: LucideIcon;
  text: string;
}

export default function IconBadge({
  icon: Icon,
  text,
}: IconBadgeProps) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        rounded-full
        border
        border-blue-500/20
        bg-slate-900/70
        px-5
        py-3
        backdrop-blur-xl
      "
    >
      <Icon
        size={18}
        className="text-cyan-400"
      />

      <span className="text-sm font-medium text-slate-200">
        {text}
      </span>
    </div>
  );
}