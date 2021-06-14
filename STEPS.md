# Steps

- [x] Component maken (kaartje)
- [x] State aanmaken voor Pokémon
- [x] Data ophalen voor 1 Pokémon
  - [x] Axios installeren
  - [x] UseEffect instellen (on Mount)
  - [x] URL nodig: https://pokeapi.co/api/v2/pokemon/jigglypuff
  - [x] Async function schrijven
  - [x] Async aanroepen
  - [x] Goed kijken welke data we terugkrijgen (waar zit het plaatje in?)
- [x] Sla data op
- [x] Trigger rerender > setPokémon(response.data);
- [x] Conditional render (pas component renderen als er data beschikbaar is)
- [x] Data weergeven > JSX `<h1>{pokemon.abilities.length}</h1>`
- [] Haal een lijst van 20 pokemon namen op
- [] Map over deze lijst heen en genereer cards voor alle pokemon
