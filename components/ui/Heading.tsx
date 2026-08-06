interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function Heading({
  title,
  subtitle,
  center = false,
}: HeadingProps) {
  return (
    <div
      className={
        center
          ? "mx-auto mb-16 max-w-3xl text-center"
          : "mb-16"
      }
    >
      <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 text-lg leading-8 text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}