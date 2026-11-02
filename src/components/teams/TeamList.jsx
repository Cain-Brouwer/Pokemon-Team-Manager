import TeamCard from "./TeamCard.jsx";

export default function TeamList({
  teams,
  editingTeamId,
  openTeamId,
  searchQuery,
  pokemonData,
  onAddTeam,
  onRemoveTeam,
  onToggleManage,
  onStartEdit,
  onSaveEdit,
  onRenameTeam,
  onSearchChange,
  onRemoveMember,
  onAddMember,
}) {
  return (
    <section className="lg:col-span-7 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Team Beheerder</h2>
        </div>
        <button
          type="button"
          onClick={onAddTeam}
          className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
        >
          + Add Team
        </button>
      </div>

      <div className="mt-6 divide-y divide-slate-100">
        {teams.map((team, index) => (
          <TeamCard
            key={team.id}
            team={team}
            index={index}
            isEditing={editingTeamId === team.id}
            isOpen={openTeamId === team.id}
            searchQuery={searchQuery}
            pokemonData={pokemonData}
            onRemove={onRemoveTeam}
            onToggleManage={onToggleManage}
            onStartEdit={onStartEdit}
            onSaveEdit={onSaveEdit}
            onRename={onRenameTeam}
            onSearchChange={onSearchChange}
            onRemoveMember={onRemoveMember}
            onAddMember={onAddMember}
          />
        ))}
      </div>
    </section>
  );
}
