import { createContext, useEffect } from "react";
import { useState } from "react";

export const FavoritesContext = createContext();

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  function toggleFavorite(name) {
    if (favorites.includes(name)) {
      setFavorites((prev) => prev.filter((favorite) => favorite !== name));
    } else {
      setFavorites((prev) => [...prev, name]);
    }
  }
  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
