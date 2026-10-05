import axios from "axios";

export default async function PokemonPage() {
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/", {
            headers: {Authorization: "Bearer JOUW_API_KEY"}
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
    return <div>Pokemon overzicht</div>;
}
