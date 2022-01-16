import React, { useState } from "react";
import { fetchPokemon } from "./api/fetchPokemon";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [pokemon, setPokemon] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      // pass the query of the pokemon name to the api call to search
      const data = await fetchPokemon(query);

      // passing the data of the response to the pokemon state
      // to display the information below
      setPokemon(data);

      setQuery("");
    }
  };

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {pokemon.name && (
        <div className="pokemon">
          <h2 className="pokemonName"> </h2>
          <h3 className="title">Information</h3>
          <span>Name: {pokemon.name}</span> <br />
          <span>ID: {pokemon.id}</span> <br />
          <span>Height: {pokemon.height}</span>
          <br />
          <span>Base HP: {pokemon.stats[0].base_stat}</span>
          <br />
          <span>type: {pokemon.types[0].type.name}</span>
          <h3 className="title">Abilities:</h3>
          <img
            className="pokemonImg"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            alt={pokemon.name}
          />
        </div>
      )}
    </div>
  );
};

export default App;
