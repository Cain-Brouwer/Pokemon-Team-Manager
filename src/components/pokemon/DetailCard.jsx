export default function DetailCard({ pokemon, species }) {
  return (
    <div
      className="rounded-2xl border border-slate-200
     bg-white p-3 transition-colors hover:border-slate-300"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative rounded-xl bg-slate-100 p-6 sm:w-1/2">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="mx-auto aspect-3/2 w-full object-contain"
          />
        </div>
        <div className="sm:w-1/2">
          <h2 className="text-base font-semibold text-slate-900">{pokemon.name}</h2>
          <ul className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500">
            {pokemon.types.map((type, index) => (
              <li key={type.type.name}>
                {type.type.name}
                {index < pokemon.types.length - 1 && (
                  <span aria-hidden="true" className="not-last:hidden">
                    &nbsp;/&nbsp;
                  </span>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-slate-600">
            {species.flavor_text_entries[0].flavor_text
              .replace(/\n/g, " ")
              .replace(/\f/g, " ")
              .toLowerCase()}
          </p>
        </div>
      </div>
    </div>
  );
}
