type Props = {
  value: string;
  label: string;
};

export default function Stat({
  value,
  label,
}: Props) {
  return (
    <div className="text-center">

      <h2 className="text-5xl font-black text-blue-400">
        {value}
      </h2>

      <p className="mt-3 text-slate-400">
        {label}
      </p>

    </div>
  );
}