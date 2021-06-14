import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
	const [pokemonNames, setPokemonNames] = useState(null);

	useEffect(() => {
		async function fetchPokemonNames() {
			const result = await axios.get(
				"https://pokeapi.co/api/v2/pokemon?limit=20"
			);
			setPokemonNames(result.data.results);
		}
		fetchPokemonNames();
	}, []);
	return (
		<div>
			{pokemonNames ? (
				<div>
					<PokemonCard nameOfPokemon="jigglypuff" />
					<PokemonCard nameOfPokemon="diglett" />
				</div>
			) : (
				<h3>Loading...</h3>
			)}
		</div>
	);
}

export default App;
