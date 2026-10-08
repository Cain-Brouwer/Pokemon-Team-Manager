import PokemonApi from "../../api/PokemonApi.jsx";
import PokemonCard from "../../components/pokemon/PokemonCard.jsx";

export default function PokemonPage() {
    return <div><PokemonCard /> <PokemonApi /></div>;
}