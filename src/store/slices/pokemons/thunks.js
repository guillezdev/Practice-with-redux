import { startLoadingPokemons, setPokemons } from "./pokemonsSlice";

const API_POKEMONS = "https://pokeapi.co/api/v2/pokemon?limit=10&offset";

export function getPokemons(page = 0) {
  return (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    //TODO: Realizar peticion http
    fetch(`${API_POKEMONS}=${page * 10}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(setPokemons({ pokemons: json.results, page: page + 1 }));
      });
  };
}
