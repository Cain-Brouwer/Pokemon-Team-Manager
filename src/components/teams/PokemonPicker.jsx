export default function PokemonPicker({
  members,
  searchQuery,
  pokemonData,
  onSearchChange,
  onAddMember,
}) {
  return (
    <div className="mt-4 w-full rounded-2xl border border-slate-200 bg-white p-4">
      <p className="text-sm font-bold text-slate-900 mb-3">Kies een Pokémon:</p>
      <input
        type="text"
        placeholder="Zoek Pokémon..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="mb-3 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex flex-wrap gap-2">
        {pokemonData
          .filter(
            (p) =>
              !members.includes(p.name.toLowerCase()) &&
              p.name.toLowerCase().includes(searchQuery.toLowerCase()),
          )
          .slice(0, 12)
          .map((p) => (
            <button
              key={p.name}
              type="button"
              onClick={() => onAddMember(p.name)}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:border-slate-300"
            >
              {p.name}
            </button>
          ))}
      </div>
    </div>
  );
}
