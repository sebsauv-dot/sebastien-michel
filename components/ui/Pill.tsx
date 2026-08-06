interface PillProps {
  children: React.ReactNode;
}

export default function Pill({
  children,
}: PillProps) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-blue-500/20
        bg-blue-500/10
        px-4
        py-2
        text-sm
        font-medium
        text-blue-300
      "
    >
      {children}
    </span>
  );
}