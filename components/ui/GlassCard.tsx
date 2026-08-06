import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        `
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/70
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-blue-500/30
        hover:shadow-[0_0_40px_rgba(37,99,235,.15)]
        `,
        className
      )}
    >
      {children}
    </div>
  );
}