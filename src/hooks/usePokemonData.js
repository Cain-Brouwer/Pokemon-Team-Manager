import { useState, useEffect } from "react";

export default function usePokemonData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlList = "https://pokeapi.co/api/v2/pokemon?limit=151";
        const responseList = await fetch(urlList);
        const resultsList = await responseList.json();

        const response = await Promise.all(
          resultsList.results.map((pokemon) =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`),
          ),
        );
        const results = await Promise.all(response.map((res) => res.json()));
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
