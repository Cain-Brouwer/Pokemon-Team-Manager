---
sessionId: session-261030-125247-qzdd
---

# Stapsgewijze aanpak

### Stap 1: Meer Pokémon data ophalen

Op dit moment laadt `usePokemonData.js` maar 8 Pokémon (IDs 1–8). Voor pagination met meerdere pagina's heb je meer data nodig.

**Wat je moet doen:**

- Breid de `pokemonIds` array uit in `usePokemonData.js` met meer IDs (bijvoorbeeld 1–24 of 1–50).
- Zo krijg je genoeg Pokémon voor 3+ pagina's.

### Stap 2: Alleen de Pokémon van de huidige pagina tonen

In `Pokemon.jsx` toon je nu _alle_ Pokémon (`data.map(...)`). Je moet een slice maken zodat alleen de Pokémon van de huidige pagina getoond worden.

**Wat je moet doen:**

- Bereken het start- en eindindex op basis van `currentPage` en `ItemsPerPage`.
- Gebruik `.slice()` op `data` om alleen de juiste Pokémon te selecteren.
- Gebruik die gesliceerde array in `.map()` om `pokemonList` te maken.

### Stap 3: Props doorgeven aan PaginationDiv

`<PaginationDiv />` krijgt nu geen props, dus de knoppen werken niet.

**Wat je moet doen:**

- Geef `currentPage`, `totalPages` en `setCurrentPage` door aan `<PaginationDiv />`.
- De prop `onPageChange` moet `setCurrentPage` krijgen, zodat de knoppen de pagina kunnen wijzigen.

### Stap 4 (optioneel): Terug naar pagina 1 bij data verandering

Als je later filters of sortering toevoegt, wil je misschien terug naar pagina 1.

**Wat je nu kunt doen:**

- Denk na over of je `currentPage` wilt resetten als de data verandert.

# Delivery Steps

### Step 1: Stap 1: Meer data ophalen in usePokemonData.js

Breid de pokemonIds array uit zodat er genoeg Pokémon zijn voor meerdere pagina's.

### Step 2: Stap 2: Slice de data in Pokemon.jsx

Bereken welke Pokémon bij de huidige pagina horen en toon alleen die slice in de grid.

### Step 3: Stap 3: Verbind PaginationDiv met props

Geef currentPage, totalPages en setCurrentPage door aan PaginationDiv zodat de knoppen werken.
