"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        `
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
      `,
        className
      )}
    >
      {children}
    </span>
  );
}