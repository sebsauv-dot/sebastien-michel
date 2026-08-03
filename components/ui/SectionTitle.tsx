type Props = {
  overline: string;
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  overline,
  title,
  subtitle,
}: Props) {
  return (
    <div className="max-w-3xl">

      <span className="font-semibold uppercase tracking-[0.35em] text-blue-400">
        {overline}
      </span>

      <h2 className="mt-5 text-5xl font-black leading-tight lg:text-6xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-8 text-xl leading-9 text-slate-400">
          {subtitle}
        </p>
      )}

    </div>
  );
}