import { useState, useEffect } from "react";

export default function usePokemonDetail(name) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!name) {
      setLoading(false);
      return;
    }
    const fetchData = async () => {
      try {
        const [res1, res2] = await Promise.all([
          fetch(`https://pokeapi.co/api/v2/pokemon/${name}`),
          fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`),
        ]);
        const results = await Promise.all([res1.json(), res2.json()]);
        setData(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [name]);

  return { data, loading, error };
}
