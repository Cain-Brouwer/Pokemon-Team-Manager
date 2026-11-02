export default function TeamPanel({
  team,
  searchQuery,
  pokemonData,
  setSearchQuery,
  onUpdateTeam,
}) {
  const results = pokemonData
    .filter(
      (pokemon) =>
        !team.members.includes(pokemon.name.toLowerCase()) &&
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .slice(0, 12);

  return (
    <div className="mt-4 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <h4 className="text-sm font-bold text-slate-900">Team Pokémon ({team.members.length} / 6)</h4>
      <div className="mt-3 flex flex-wrap gap-2">
        {team.members.map((poke, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm capitalize"
          >
            {poke}
            <button
              type="button"
              onClick={() =>
                onUpdateTeam(team.id, { members: team.members.filter((_, i) => i !== index) })
              }
              className="ml-1 text-red-500 hover:text-red-700 font-bold"
              aria-label={`Verwijder ${poke}`}
            >
              ×
            </button>
          </span>
        ))}
        {team.members.length < 6 && (
          <div className="mt-4 w-full rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-bold text-slate-900 mb-3">Kies een Pokémon:</p>
            <input
              type="text"
              placeholder="Zoek Pokémon..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mb-3 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex flex-wrap gap-2">
              {results.map((pokemon) => (
                <button
                  key={pokemon.name}
                  type="button"
                  onClick={() =>
                    onUpdateTeam(team.id, {
                      members: [...team.members, pokemon.name.toLowerCase()],
                    })
                  }
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:border-slate-300"
                >
                  {pokemon.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
