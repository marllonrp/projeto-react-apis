import { Flex, Heading, Skeleton } from "@chakra-ui/react";
import { Card } from "../Components/Cards/Card";
import { Header } from "../Components/Header/Index";
import axios from "axios";
import { baseURL } from "../Components/BaseURL/BaseURL";

import { useContext, useEffect } from "react";
import GlobalContext from "../Context/GlobalContex";
import { AnimatePresence } from "framer-motion";

export const HomePage = () => {
  const { pokemonsNameHome, setPokemonsNameHome, getPokemonStorage, setIsLoading, isLoading } =
    useContext(GlobalContext);

  const getPokemon = async () => {
    try {
        setIsLoading(true)
      const response = await axios.get(
        `${baseURL}/pokemon/?offset=00&limit=$120`,
        {
          headers: {
            Authorization: "Marllon-Rodrigues",
          },
        }
      );

      setPokemonsNameHome(response.data.results);
      setIsLoading(false)
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    
    <Flex
      direction={"column"}
      w={"1440px"}
      m={"0 "}
      bgGradient={"linear(to-b, black, blue.300, gray.100, yellow.400)"}
      h={"auto"}
      minH={"100vw"}
      pb={"30px"}
    >
      <Header />
      <Flex pt={"60px"} pl={"40px"} color={"#FFFFFF"} align={"center"}>
        <Heading>Todos Pokemons</Heading>
      </Flex>
      <AnimatePresence>
      <Flex
        pt={"53px"}
        pl={"40px"}
        wrap={"wrap"}
        rowGap={"53px"}
        columnGap={"20px"}
        transition={"2s"}
        zIndex={"2"}>
        {pokemonsNameHome
          .filter((pokemon) => {
            if (getPokemonStorage !== []) {
              const found = getPokemonStorage.find(
                (item) => pokemon.name === item.title
              );
              if (found) {
                return pokemon.name !== found.title;
              } else {
                return pokemon;
              }
            }
          })
          .map((pokemon) => <Skeleton isLoaded={!isLoading} borderRadius={"12px"}>
            <Card key={pokemon.name} pokemon={pokemon} />
            </Skeleton>
          )}
      </Flex>
      </AnimatePresence>
    </Flex>
  );
};
