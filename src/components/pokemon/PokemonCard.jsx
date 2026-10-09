export default function PokemonCard({pokemon}) {
    return <div className="rounded-2xl border border-slate-200 bg-white p-3 transition-colors hover:border-slate-300">
        <div className="relative rounded-xl bg-slate-100 p-6">
            <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="mx-auto aspect-3/2 w-full object-contain"
            />
            <button
                type="button"
                aria-label={`Favorite ${pokemon.name}`}
                className="absolute right-3 top-3 flex size-7 items-center justify-center rounded-full bg-white text-sm text-slate-400 shadow-sm transition-colors hover:text-amber-400"
            >
                ☆
            </button>
        </div>
        <h2 className="mt-3 text-base font-semibold text-slate-900">{pokemon.name}</h2>
        <ul className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500">
                {pokemon.types.map(
                    (type) => <li key={type.type.name}>{type.type.name}<span aria-hidden="true" className="not-last:hidden">&nbsp;/&nbsp;</span></li>
                )}
        </ul>
    </div>
}