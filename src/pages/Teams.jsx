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
    setTeams(teams.filter((team) => team.id !== teamId));
  }

  function updateTeam(teamId, changes) {
    setTeams(teams.map((team) => (team.id === teamId ? { ...team, ...changes } : team)));
  }

  function addFavoriteToTeam(pokemon) {
    const name = pokemon.name.toLowerCase();
    const team = teams.find((team) => team.members.length < 6);
    if (team && !team.members.includes(name)) {
      updateTeam(team.id, { members: [...team.members, name] });
    }
  }

  return (
    <main className="w-full bg-white px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Your Teams</h1>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <TeamList
            teams={teams}
            pokemonData={pokemonData}
            openTeamId={openTeamId}
            setOpenTeamId={setOpenTeamId}
            editingTeamId={editingTeamId}
            setEditingTeamId={setEditingTeamId}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onAddTeam={addTeam}
            onRemoveTeam={removeTeam}
            onUpdateTeam={updateTeam}
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
