type Props = {
  title: string;
  subtitle: string;
};

export default function Title({
  title,
  subtitle,
}: Props) {
  return (
    <>
      <h2
        className="
          mt-6
          bg-gradient-to-r
          from-white
          via-white
          to-blue-300
          bg-clip-text
          text-5xl
          font-black
          leading-tight
          text-transparent
          lg:text-6xl
        "
      >
        {title}
      </h2>

      <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
        {subtitle}
      </p>
    </>
  );
}