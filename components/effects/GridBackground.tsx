export default function GridBackground() {
  return (
    <>
      <div className="fixed inset-0 -z-50 bg-slate-950" />

      <div
        className="
          fixed
          inset-0
          -z-40
          opacity-20

          bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)]

          bg-[size:60px_60px]
        "
      />

      <div
        className="
          fixed
          left-1/2
          top-0
          -z-30
          h-[900px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-blue-600/10
          blur-[180px]
        "
      />

      <div
        className="
          fixed
          right-0
          bottom-0
          -z-30
          h-[700px]
          w-[700px]
          rounded-full
          bg-cyan-500/10
          blur-[180px]
        "
      />
    </>
  );
}