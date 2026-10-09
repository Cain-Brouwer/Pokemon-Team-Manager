import usePokemonData from "../../hooks/usePokemonData.js";
import PokemonCard from "../../components/pokemon/PokemonCard.jsx";

export default function PokemonPage() {
    const {data, loading, error} = usePokemonData();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    const pokemonList = data.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon}/>);
    return <div>{pokemonList}</div>
}