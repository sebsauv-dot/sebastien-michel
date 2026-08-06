"use client";

import Link from "next/link";

interface NavLinkProps {
  href: string;
  label: string;
}

export default function NavLink({
  href,
  label,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className="
        text-slate-300
        transition
        duration-300
        hover:text-cyan-400
      "
    >
      {label}
    </Link>
  );
}