export default function PokemonCard({pokemon}) {
    return <div className="rounded-2xl border border-slate-200 bg-white p-3 transition-colors hover:border-slate-300">
        <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="aspect-square w-full rounded-xl bg-slate-100 object-contain"
        />
        <h2 className="mt-3 text-base font-semibold text-slate-900">{pokemon.name}</h2>
        <ul className="mt-1 flex flex-wrap gap-x-2 gap-y-1">
                {pokemon.types.map(
                    (type) => <li key={type.type.name} className="text-sm text-slate-500">{type.type.name}</li>
                )}
        </ul>
    </div>
}