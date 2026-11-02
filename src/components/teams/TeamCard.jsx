import TeamManager from "./TeamManager.jsx";

export default function TeamCard({
  team,
  index,
  isEditing,
  isOpen,
  searchQuery,
  pokemonData,
  onRemove,
  onToggleManage,
  onStartEdit,
  onSaveEdit,
  onRename,
  onSearchChange,
  onRemoveMember,
  onAddMember,
}) {
  return (
    <div className="py-5">
      <div className="flex items-center gap-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-600">
          {index + 1}
        </span>
        <div className="flex-1">
          {isEditing ? (
            <input
              type="text"
              value={team.name}
              onChange={(e) => onRename(team.id, e.target.value)}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-base font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <h3 className="text-base font-semibold text-slate-900">{team.name}</h3>
          )}
          <p className="text-sm text-slate-500">{team.members.length} / 6 Pokemon</p>
          {team.members.length > 0 && (
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {team.members.map((poke, i) => (
                <li
                  key={i}
                  className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 capitalize"
                >
                  {poke}
                </li>
              ))}
            </ul>
          )}
        </div>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${team.members.length === 6 ? "bg-blue-50 text-blue-700" : "bg-slate-100 text-slate-600"}`}
        >
          {team.members.length === 6 ? "Active" : "Draft"}
        </span>
        <button
          type="button"
          onClick={() => onRemove(team.id)}
          className="rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600 transition-colors hover:bg-red-100"
          aria-label={`Verwijder ${team.name}`}
        >
          Verwijder
        </button>
        <button
          type="button"
          onClick={() => onToggleManage(team.id)}
          className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
        >
          Beheer
        </button>
        <button
          type="button"
          onClick={() => onStartEdit(team.id)}
          className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
        >
          Wijzig
        </button>
        {isEditing && (
          <button
            type="button"
            onClick={onSaveEdit}
            className="rounded-xl border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 transition-colors hover:bg-green-100"
          >
            Opslaan
          </button>
        )}
      </div>

      {isOpen && (
        <TeamManager
          team={team}
          searchQuery={searchQuery}
          pokemonData={pokemonData}
          onSearchChange={onSearchChange}
          onRemoveMember={onRemoveMember}
          onAddMember={onAddMember}
        />
      )}
    </div>
  );
}
