type Props = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: Props) {
  return (
    <input
      {...props}
      className="
      w-full
      rounded-2xl
      border
      border-white/10
      bg-white/5
      px-5
      py-4
      text-white
      outline-none
      transition
      placeholder:text-slate-500
      focus:border-blue-500
      "
    />
  );
}