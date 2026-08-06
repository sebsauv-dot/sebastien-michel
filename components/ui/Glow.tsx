interface GlowProps {
  className?: string;
}

export default function Glow({
  className,
}: GlowProps) {
  return (
    <div
      className={`absolute rounded-full bg-blue-600/10 blur-[150px] ${className}`}
    />
  );
}