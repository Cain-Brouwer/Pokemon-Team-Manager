import usePokemonData from "../hooks/usePokemonData.js";
import PokemonCard from "../components/pokemon/PokemonCard.jsx";
import PaginationDiv from "../components/pokemon/PaginationDiv.jsx";
import { useState } from "react";

export default function Pokemon() {
  const { data, loading, error } = usePokemonData();
  const PageSize = 20;
  const [currentPage, setCurrentPage] = useState(1);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const totalPages = Math.ceil(data.length / PageSize);
  const currentPokemon = data.slice((currentPage - 1) * PageSize, currentPage * PageSize);
  const pokemonList = currentPokemon.map((pokemon) => (
    <PokemonCard key={pokemon.name} pokemon={pokemon} />
  ));
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 p-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {pokemonList}
      </div>
      <PaginationDiv
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
