import { useEffect, useState } from "react";

export const Data = () => {
  const [getPokemonStorage, setGetPokemonStorage] = useState([]);
  const [newPokedexStorage, setNewPokedexStorage] = useState([]);
  const [pokemonsNameHome, setPokemonsNameHome] = useState([]);
  const [getPokemonByDetails, setGetPokemonByDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [parameterBackground, setParameterBackground] = useState("");
  const parameterBackground2 =
    getPokemonByDetails.types && getPokemonByDetails.types[0].type.name;

  useEffect(() => {
    if (parameterBackground2 === undefined) {
      setParameterBackground("");
    }
    if (parameterBackground2 !== undefined && parameterBackground2 !== "") {
      setParameterBackground(getPokemonByDetails.types[0].type.name);
    }
  }, [parameterBackground2]);

  const pokedexStorageByDetails = () => {
    const pokemon = {
      title: getPokemonByDetails?.name,
      id: getPokemonByDetails?.id,
      types: getPokemonByDetails?.types,
      image:
        getPokemonByDetails?.sprites &&
        getPokemonByDetails?.sprites?.other["official-artwork"]?.front_default,
      backgroundColor: parameterBackground,
    };
    const newArray = [...getPokemonStorage];
    let foundInPokedex = newArray.find((item) => item.title === pokemon.title);
    if (!foundInPokedex) {
      newArray.push(pokemon);
    }
    const pokedexStorageStringify = JSON.stringify(newArray);
    window.localStorage.setItem("pokedexPokemon", pokedexStorageStringify);
    setNewPokedexStorage(newArray);
  };


  const pokedexStorage = (pokemon, typeName) => {
    const newArray = [...getPokemonStorage];
    let foundInPokedex = newArray.find((item) => item.title === typeName.name);

    if (!foundInPokedex) {
      newArray.push(pokemon);
    }
    const pokedexStorageStringify = JSON.stringify(newArray);
    window.localStorage.setItem("pokedexPokemon", pokedexStorageStringify);
    setNewPokedexStorage(newArray);
  };

  const removePokemonPokedex = (name) => {
    const newPokedex = [...getPokemonStorage];
    const removePokemon = newPokedex.filter(
      (pokemon) => pokemon.title !== name
    );
    const pokedexStorageStringify = JSON.stringify(removePokemon);
    window.localStorage.setItem("pokedexPokemon", pokedexStorageStringify);
    setNewPokedexStorage(removePokemon);
  };

  useEffect(() => {
    const getSavedPokemon = JSON.parse(
      window.localStorage.getItem("pokedexPokemon")
    );

    if (getSavedPokemon === null) {
      const pokemonStorageStringify = JSON.stringify(newPokedexStorage);
      window.localStorage.setItem("pokedexPokemon", pokemonStorageStringify);
    } else if (getSavedPokemon.length >= 0) {
      window.localStorage.setItem(
        "pokedexPokemon",
        JSON.stringify(getSavedPokemon)
      );
      setGetPokemonStorage(getSavedPokemon);
    }
  }, [newPokedexStorage]);

  const changeButtonDetails = (pokemonName)=>{
    const arrayToCompare = [...getPokemonStorage]
    const pokemon = arrayToCompare.filter(item => item.title === pokemonName)
      if (pokemon.length > 0){
       return true
      }else {return false}
    }

  return {
    isLoading,
    setIsLoading,
    isOpen,
    setIsOpen,
    pokemonsNameHome,
    setPokemonsNameHome,
    getPokemonStorage,
    pokedexStorage,
    removePokemonPokedex,
    getPokemonByDetails,
    setGetPokemonByDetails,
    pokedexStorageByDetails,
    changeButtonDetails,
  };
};
