type Props = {
  children: React.ReactNode;
};

export default function Tag({
  children,
}: Props) {
  return (
    <span
      className="
      rounded-full
      border
      border-blue-500/20
      bg-blue-500/10
      px-4
      py-2
      text-sm
      text-blue-200
      transition-all
      duration-300
      hover:border-cyan-400/40
      hover:bg-cyan-500/15
      "
    >
      {children}
    </span>
  );
}