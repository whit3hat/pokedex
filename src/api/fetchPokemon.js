import axios from "axios";

// function to query the pokemon api site and pass the quary from the app.js file
// passes the results back the app.js file
export const fetchPokemon = async (query) => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${query}`
  );
  console.log(data);
  return data;
};
