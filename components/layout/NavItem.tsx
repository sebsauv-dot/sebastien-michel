"use client";

import Link from "next/link";

type Props = {
  href: string;
  label: string;
};

export default function NavItem({
  href,
  label,
}: Props) {
  return (
    <Link
      href={href}
      className="
      relative
      py-2
      text-sm
      font-medium
      text-slate-300
      transition-all
      duration-300
      hover:text-white

      after:absolute
      after:left-0
      after:-bottom-1
      after:h-[2px]
      after:w-0
      after:bg-blue-500
      after:transition-all
      after:duration-300

      hover:after:w-full
      "
    >
      {label}
    </Link>
  );
}