import { useState, useEffect } from 'react';

export default function PokemonPage() {
    function App() {
        const [data, setData] = useState(null);
        const [error, setError] = useState(null);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
                .then(res => {
                    if (!res.ok) throw new Error('Network error');
                    return res.json();
                })
                .then(setData)
                .catch(setError)
                .finally(() => setLoading(false));
        }, []);

        if (loading) return <p>Laden...</p>;
        if (error) return <p>Fout: {error.message}</p>;

        return <pre>{JSON.stringify(data, null, 2)}</pre>;
    }
    return <div>Pokemon overzicht < App></App></div>;
}
