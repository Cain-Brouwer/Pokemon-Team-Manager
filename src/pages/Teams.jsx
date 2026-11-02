import { useState, useContext, useEffect } from "react";
import usePokemonData from "../hooks/usePokemonData.js";
import { FavoritesContext } from "../components/FavoritesProvider.jsx";
import TeamList from "../components/teams/TeamList.jsx";
import FavoritesPanel from "../components/teams/FavoritesPanel.jsx";

export default function Teams() {
  const [teams, setTeams] = useState(() => {
    const saved = localStorage.getItem("teams");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            name: "Team Alpha",
            members: ["bulbasaur", "charmander", "squirtle", "pikachu", "charmander", "squirtle"],
          },
          { id: 2, name: "Team Beta", members: ["pikachu", "charmander", "bulbasaur", "squirtle"] },
          { id: 3, name: "Team Gamma", members: ["bulbasaur", "charmander"] },
        ];
  });
  const [openTeamId, setOpenTeamId] = useState(null);
  const [editingTeamId, setEditingTeamId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { data, loading, error } = usePokemonData();
  const { favorites } = useContext(FavoritesContext);

  const pokemonData = data || [];

  useEffect(() => {
    localStorage.setItem("teams", JSON.stringify(teams));
  }, [teams]);

  function addTeam() {
    setTeams([
      ...teams,
      { id: teams.length + 1, name: `Team ${String.fromCharCode(65 + teams.length)}`, members: [] },
    ]);
  }

  function removeTeam(teamId) {
    setTeams(teams.filter((t) => t.id !== teamId));
  }

  function toggleManage(teamId) {
    setOpenTeamId(openTeamId === teamId ? null : teamId);
  }

  function startEdit(teamId) {
    setEditingTeamId(teamId);
  }

  function saveEdit() {
    setEditingTeamId(null);
  }

  function renameTeam(teamId, name) {
    setTeams(teams.map((t) => (t.id === teamId ? { ...t, name } : t)));
  }

  function removeMember(teamId, memberIndex) {
    setTeams(
      teams.map((t) =>
        t.id === teamId ? { ...t, members: t.members.filter((_, i) => i !== memberIndex) } : t,
      ),
    );
  }

  function addMember(teamId, name) {
    setTeams(
      teams.map((t) =>
        t.id === teamId ? { ...t, members: [...t.members, name.toLowerCase()] } : t,
      ),
    );
  }

  function addFavoriteToTeam(poke) {
    const nameLower = poke.name.toLowerCase();
    const teamWithSpace = teams.find((t) => t.members.length < 6);
    if (teamWithSpace && !teamWithSpace.members.includes(nameLower)) {
      setTeams(
        teams.map((t) =>
          t.id === teamWithSpace.id ? { ...t, members: [...t.members, nameLower] } : t,
        ),
      );
    }
  }

  return (
    <main className="w-full bg-white px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Your Teams</h1>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <TeamList
            teams={teams}
            editingTeamId={editingTeamId}
            openTeamId={openTeamId}
            searchQuery={searchQuery}
            pokemonData={pokemonData}
            onAddTeam={addTeam}
            onRemoveTeam={removeTeam}
            onToggleManage={toggleManage}
            onStartEdit={startEdit}
            onSaveEdit={saveEdit}
            onRenameTeam={renameTeam}
            onSearchChange={setSearchQuery}
            onRemoveMember={removeMember}
            onAddMember={addMember}
          />

          <FavoritesPanel
            favorites={favorites}
            pokemonData={pokemonData}
            loading={loading}
            error={error}
            onAddToTeam={addFavoriteToTeam}
          />
        </div>
      </div>
    </main>
  );
}
