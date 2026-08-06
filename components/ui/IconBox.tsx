import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
};

export default function IconBox({
  icon: Icon,
}: Props) {
  return (
    <div
      className="
      flex
      h-16
      w-16
      items-center
      justify-center
      rounded-2xl
      bg-gradient-to-br
      from-blue-600
      to-cyan-500
      shadow-[0_15px_35px_rgba(37,99,235,.35)]
      "
    >
      <Icon
        size={30}
        className="text-white"
      />
    </div>
  );
}