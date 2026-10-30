import { useState, useEffect } from "react";

export default function usePokemonData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/`;
        const response = await fetch(url);
        const results = await response.json();
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
