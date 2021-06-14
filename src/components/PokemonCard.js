import axios from "axios";
import React, { useState, useEffect } from "react";

export default function PokemonCard({ nameOfPokemon }) {
	const [pokemon, setPokemon] = useState(null);
	// console.log(pokemon);
	useEffect(() => {
		async function fetchPokemon() {
			const result = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/${nameOfPokemon}`
			);
			// console.log(result.data);
			setPokemon(result.data);
		}
		fetchPokemon();
	}, [nameOfPokemon]);
	return (
		<>
			<article className="pokemon-container">
				<h1 className="pokemon-name">{pokemon?.name}</h1>
				<div className="pokemon-abilities-container">
					{pokemon?.abilities.map((ability) => {
						return <p className="pokemon-ability">{ability.ability.name}</p>;
					})}
				</div>
				<img
					className="pokemon-sprite"
					src={pokemon?.sprites.front_default}
					alt={pokemon?.sprites.front_default}
				/>
			</article>
		</>
	);
}
