import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../store/slices/pokemons/thunks.js";
function PokemonsApp() {
  const { pokemons, isLoading, page } = useSelector((state) => state.pokemons);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <div>
      <h1>App de Pokemons API Fetch</h1>
      <hr />

      {isLoading && <h1>Loading...</h1>}
      {pokemons.length > 0 && !isLoading && (
        <ul className="pokemons">
          {pokemons.map((pokemon) => (
            <li className="pokemon" key={pokemon.name}>
              {pokemon.name}
            </li>
          ))}
        </ul>
      )}
      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        NEXT POKEMONS
      </button>
    </div>
  );
}

export default PokemonsApp;
