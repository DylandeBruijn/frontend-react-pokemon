import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import PaginationButton from "./components/PaginationButton";

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
		<main className="pokedex-wrapper">
			<section className="next-previous-buttons">
				<PaginationButton buttonText="Previous" />
				<PaginationButton buttonText="Next" />
			</section>
			{pokemonNames ? (
				<div className="pokedex-container">
					{pokemonNames.map((pokemonName) => {
						return <PokemonCard nameOfPokemon={pokemonName.name} />;
					})}
				</div>
			) : (
				<h3>Loading...</h3>
			)}
		</main>
	);
}

export default App;
