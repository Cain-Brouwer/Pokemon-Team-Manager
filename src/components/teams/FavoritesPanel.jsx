export default function FavoritesPanel({ favorites, pokemonData, loading, error, onAddToTeam }) {
  return (
    <aside className="lg:col-span-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900">Your Favorite Pokemon</h2>
        <span className="text-sm font-medium text-slate-500">{favorites.length} Pokemon</span>
      </div>

      <div className="mt-6 divide-y divide-slate-100">
        {loading ? (
          <p className="py-4 text-sm text-slate-500">Loading favorites...</p>
        ) : error ? (
          <p className="py-4 text-sm text-red-500">Error loading favorites</p>
        ) : (
          favorites.map((name) => {
            const poke = pokemonData.find((p) => p.name.toLowerCase() === name.toLowerCase());
            if (!poke) return null;
            return (
              <div key={name} className="flex items-center justify-between py-4">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-xl bg-slate-100 flex items-center justify-center text-xs font-semibold text-slate-300">
                    <img
                      src={
                        poke.sprites?.front_default ||
                        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`
                      }
                      alt={poke.name}
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 capitalize">
                      {poke.name}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {poke.types?.map((t) => t.type?.name).join(" / ") || ""}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onAddToTeam(poke)}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50"
                >
                  Add to team
                </button>
              </div>
            );
          })
        )}
      </div>
    </aside>
  );
}
