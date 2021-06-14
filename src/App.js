import React from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
	return (
		<div>
			<PokemonCard nameOfPokemon="jigglypuff" />
			<PokemonCard nameOfPokemon="diglett" />
		</div>
	);
}

export default App;
