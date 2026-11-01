import { useState, useEffect } from "react";

export default function usePokemonData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlList = "https://pokeapi.co/api/v2/pokemon?limit=100";
        const responseList = await fetch(urlList);
        const resultsList = await responseList.json();

        const url = `https://pokeapi.co/api/v2/pokemon/${resultsList.results.map((pokemon) => pokemon.name)}`;
        const response = await fetch(url);
        const results = await response.json();
        setData(results);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
}
