type Props = {
  position?: "center" | "left" | "right";
};

export default function Halo({
  position = "center",
}: Props) {
  const positions = {
    center: "left-1/2 -translate-x-1/2",
    left: "-left-40",
    right: "-right-40",
  };

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">

      <div
        className={`
          absolute
          top-20
          ${positions[position]}
          h-[650px]
          w-[650px]
          rounded-full
          bg-blue-500/10
          blur-[180px]
        `}
      />

    </div>
  );
}