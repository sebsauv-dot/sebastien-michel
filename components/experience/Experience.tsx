import Timeline from "./Timeline";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-8 py-32"
    >
      <span className="font-semibold text-blue-400">
        Expérience
      </span>

      <h2 className="mt-4 text-5xl font-black">
        Mon parcours professionnel
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
        Plus de trente années consacrées à l'informatique,
        à la maintenance, aux infrastructures réseaux,
        au support utilisateurs et à la relation client.
      </p>

      <Timeline />
    </section>
  );
}