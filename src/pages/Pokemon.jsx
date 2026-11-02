import { useState } from "react";
import usePokemonData from "../hooks/usePokemonData.js";
import PokemonCard from "../components/pokemon/PokemonCard.jsx";
import PaginationDiv from "../components/pokemon/PaginationDiv.jsx";

export default function Pokemon() {
  const { data, loading, error } = usePokemonData();
  // const [currentPage, setCurrentPage] = useState(1);
  // const ItemsPerPage = 8;
  // const totalPages = Math.ceil(data.length / ItemsPerPage);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const pokemonList = data.map((pokemon) => <PokemonCard key={pokemon.name} pokemon={pokemon} />);
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 p-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {pokemonList}
      </div>
      <PaginationDiv />
    </div>
  );
}
