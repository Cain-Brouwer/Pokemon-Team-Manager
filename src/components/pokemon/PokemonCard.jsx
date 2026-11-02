import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../FavoritesProvider";

export default function PokemonCard({ pokemon }) {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isFavorite = favorites.includes(pokemon.name);
  const favoriteButtonClass = isFavorite ? "text-amber-400" : "text-slate-400";
  const favoriteButtonBackgroundClass = isFavorite ? "bg-amber-100" : "bg-white";
  const favoriteButtonIconClass = isFavorite ? "★" : "☆";
  const favoriteButtonStyling = `absolute right-3 top-3 flex size-7 items-center justify-center rounded-full ${favoriteButtonBackgroundClass} text-sm ${favoriteButtonClass} shadow-sm transition-colors hover:text-amber-400`;

  return (
    <div
      className="rounded-2xl border border-slate-200
     bg-white p-3 transition-colors hover:border-slate-300"
    >
      <div className="relative rounded-xl bg-slate-100 p-6">
        <Link to={`/detail/${pokemon.name}`}>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="mx-auto aspect-3/2 w-full object-contain"
          />
        </Link>
        <button
          type="button"
          aria-label={`Favorite ${pokemon.name}`}
          className={favoriteButtonStyling}
          onClick={() => toggleFavorite(pokemon.name)}
        >
          {favoriteButtonIconClass}
        </button>
      </div>
      <h2 className="mt-3 text-base font-semibold text-slate-900">{pokemon.name}</h2>
      <ul className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500">
        {pokemon.types.map((type, index) => (
          <li key={type.type.name}>
            {type.type.name}
            {index < pokemon.types.length - 1 && (
              <span aria-hidden="true" className="not-last:hidden">
                &nbsp;/&nbsp;
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
