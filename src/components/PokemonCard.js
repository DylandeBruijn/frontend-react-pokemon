import axios from "axios";
import React, { useState, useEffect } from "react";

export default function PokemonCard() {
	const [pokemon, setPokemon] = useState(null);
	console.log(pokemon);
	useEffect(() => {
		async function fetchPokemon() {
			const result = await axios.get(
				"https://pokeapi.co/api/v2/pokemon/jigglypuff"
			);
			console.log(result.data);
			setPokemon(result.data);
		}
		fetchPokemon();
	}, []);
	return <div>Pokémon</div>;
}
