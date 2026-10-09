import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

export default function usePokemonDetail() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const {name} = useParams();

    useEffect(() => {
        if (!name) {
            setLoading(false);
        }
        const fetchData = async () => {
            try {
                const [res1, res2] = await Promise.all([
                    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`),
                    fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
                ]);
                const results = await Promise.all([res1.json(), res2.json()]);
                setData(results);
            } catch {
                setError(error);
            } finally {
                setLoading(false);
            }

        };
        fetchData();
    }, []);

    return {data, loading, error};
}