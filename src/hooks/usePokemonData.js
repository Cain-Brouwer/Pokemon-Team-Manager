import { useState, useEffect } from "react";

export default function usePokemonData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let pokemonIds = [1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urls = pokemonIds.map((id) => `https://pokeapi.co/api/v2/pokemon/${id}`);
        const responses = await Promise.all(urls.map((url) => fetch(url)));
        const results = await Promise.all(responses.map((response) => response.json()));
        setData(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { data, loading, error };
}
