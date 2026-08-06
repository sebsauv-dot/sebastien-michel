"use client";

import { LucideIcon } from "lucide-react";

import GlassCard from "../ui/GlassCard";

type Props = {
  icon: LucideIcon;
  value: string;
  title: string;
  description: string;
};

export default function AdvantageCard({
  icon: Icon,
  value,
  title,
  description,
}: Props) {
  return (
    <GlassCard className="h-full p-8">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500">
        <Icon
          size={30}
          className="text-white"
        />
      </div>

      <h2 className="mt-8 text-5xl font-black text-blue-400">
        {value}
      </h2>

      <h3 className="mt-4 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-5 leading-8 text-slate-300">
        {description}
      </p>
    </GlassCard>
  );
}