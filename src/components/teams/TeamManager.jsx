import PokemonPicker from "./PokemonPicker.jsx";

export default function TeamManager({
  team,
  searchQuery,
  pokemonData,
  onSearchChange,
  onRemoveMember,
  onAddMember,
}) {
  return (
    <div className="mt-4 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <h4 className="text-sm font-bold text-slate-900">Team Pokémon ({team.members.length} / 6)</h4>
      <div className="mt-3 flex flex-wrap gap-2">
        {team.members.map((poke, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm capitalize"
          >
            {poke}
            <button
              type="button"
              onClick={() => onRemoveMember(team.id, idx)}
              className="ml-1 text-red-500 hover:text-red-700 font-bold"
              aria-label={`Verwijder ${poke}`}
            >
              ×
            </button>
          </span>
        ))}
        {team.members.length < 6 && (
          <PokemonPicker
            members={team.members}
            searchQuery={searchQuery}
            pokemonData={pokemonData}
            onSearchChange={onSearchChange}
            onAddMember={(name) => onAddMember(team.id, name)}
          />
        )}
      </div>
    </div>
  );
}
