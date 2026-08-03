import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
};

export default function Button({
  href,
  children,
  primary = false,
}: Props) {
  return (
    <Link
      href={href}
      className={
        primary
          ? "rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500"
          : "rounded-xl border border-white/15 px-8 py-4 transition hover:border-blue-500"
      }
    >
      {children}
    </Link>
  );
}