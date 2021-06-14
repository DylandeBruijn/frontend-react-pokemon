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
			<div>
				<h1>{pokemon?.name}</h1>
				<div>
					{pokemon?.abilities.map((ability) => {
						console.log(ability);
						return <p>{ability.ability.name}</p>;
					})}
				</div>
				<img src={pokemon?.sprites.front_default} alt="" />
			</div>
		</>
	);
}
