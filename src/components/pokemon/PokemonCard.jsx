export default function PokemonCard({pokemon}) {
    return <div>
        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
        <h2>{pokemon.name}</h2>
        <ul>
                {pokemon.types.map(
                    (type) => <li key={type.type.name}>{type.type.name}</li>
                )}
        </ul>
    </div>
}