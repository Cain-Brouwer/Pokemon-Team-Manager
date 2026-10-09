import { useParams, Link } from "react-router-dom";
import usePokemonDetail from "../../hooks/usePokemonDetail.js";

export default function DetailPage() {
    const {name} = useParams();

    return <div>
        {/*<img*/}
        {/*    src={pokemon.sprites.front_default}*/}
        {/*    alt={pokemon.name}*/}
        {/*    className="mx-auto aspect-3/2 w-full object-contain"*/}
        {/*/>*/}
        <h2>{name}</h2>
        <p></p>
        <Link to="/pokemon">Back to Pokemon</Link>
    </div>;
}