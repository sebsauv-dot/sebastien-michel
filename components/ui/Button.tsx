"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300",
    {
      "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105":
        variant === "primary",

      "bg-cyan-500 text-slate-950 hover:bg-cyan-400 hover:scale-105":
        variant === "secondary",

      "border border-blue-500 text-blue-400 hover:bg-blue-500/10":
        variant === "outline",

      "text-slate-300 hover:text-white":
        variant === "ghost",
    },
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}