export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="flex flex-col items-center gap-6">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />

        <h1 className="text-xl font-semibold tracking-[0.25em] text-white">
          SM IT SOLUTIONS
        </h1>
      </div>
    </main>
  );
}