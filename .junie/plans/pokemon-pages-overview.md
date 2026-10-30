---
sessionId: session-261030-122151-57op
---

# Overview

### Huidige staat van het project

Je hebt een React + Vite app met React Router en Tailwind CSS. De structuur is:

- **Pages**: `Home.jsx`, `Pokemon.jsx`, `Detail.jsx`, `Teams.jsx`
- **Components**: `PokemonCard.jsx`, `PaginationDiv.jsx`, `Header.jsx`, `Footer.jsx`, `Hero.jsx`
- **Hooks**: `usePokemonData.js`, `usePokemonDetail.js`
- **Router**: `App.jsx` met routes `/`, `/teams`, `/pokemon`, `/detail/:name`

### Wat je als volgende kunt bouwen (in volgorde)

1. **Pagination** — `PaginationDiv` bestaat al maar is niet verbonden. Voeg `currentPage` state toe, bereken `pokemonIds` per pagina, en bind de props.
2. **Detail-pagina uitbreiden** — toon typen, stats, species-info (gewicht, hoogte, beschrijving), en evolutie-keten.
3. **Zoekfunctie** — de search-bar in `Header.jsx` bestaat al. Filter de Pokémon-lijst op naam.
4. **Type-filter** — filter Pokémon op type (Fire, Water, etc.) met klikbare badges.
5. **Favourites** — de ster-knop op `PokemonCard` bestaat al. Voeg localStorage-persistentie toe en een `/favorites` route.

### Architectuur-patroon

Data stroomt van onder naar boven: Hooks (data-ophaal) → Pages (state & compositie) → Components (UI). Houd dit patroon aan bij elke nieuwe feature.

# Delivery Steps

### Step 1: Conceptuele uitleg delivered

De user heeft een overzicht gekregen van de huidige projectstructuur en de volgende stappen om de Pokémon-pages uit te breiden, in leermodus zonder code.
