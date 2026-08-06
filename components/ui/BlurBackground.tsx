export default function BlurBackground() {
  return (
    <>
      <div className="absolute inset-0 -z-20 bg-slate-950" />

      <div className="absolute left-1/3 top-10 -z-10 h-[700px] w-[700px] rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />
    </>
  );
}