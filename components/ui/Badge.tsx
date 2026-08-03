type Props = {
  children: React.ReactNode;
};

export default function Badge({
  children,
}: Props) {
  return (
    <span
      className="
      rounded-full
      border
      border-blue-500/30
      bg-blue-500/10
      px-4
      py-2
      text-sm
      text-blue-300
      "
    >
      {children}
    </span>
  );
}