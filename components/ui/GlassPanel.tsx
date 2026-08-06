type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassPanel({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        rounded-[32px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-3xl
        shadow-[0_30px_80px_rgba(0,0,0,.35)]
        p-10
        ${className}
      `}
    >
      {children}
    </div>
  );
}