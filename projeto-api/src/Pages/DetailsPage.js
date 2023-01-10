import { Flex, Heading, Image, Modal, Progress, Text } from "@chakra-ui/react";
import { Header } from "../Components/Header/Index";
import pokeball from "../Components/Cards/assets/CardBackground.png";
import axios from "axios";
import { baseURL } from "../Components/BaseURL/BaseURL";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  PokemonMoveBox,
  PokeTypesBox,
} from "../Components/PokeTipes/PokeTypesBox";
import { pokeTypes } from "../Components/PokeTipes/PokeTypes";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export const Details = () => {
  const { details } = useParams();
  const MotionFlex = motion(Flex)
  const [pokemon, setPokemon] = useState();

  const getPokemon = async () => {
    try {
      const response = await axios.get(`${baseURL}/pokemon/${details}`, {
        headers: {
          Authorization: "Marllon-Rodrigues",
        },
      });
      setPokemon(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const [parameterBackground, setParameterBackground] = useState("");
  const parameterBackground2 = pokemon?.types[0]?.type.name;

  useEffect(() => {
    if (parameterBackground2 === undefined) {
      setParameterBackground("");
    }

    if (parameterBackground2 !== undefined && parameterBackground2 !== "") {
      setParameterBackground(pokemon.types[0].type.name);
    }
  }, [parameterBackground2]);

  const backgroundColor = (icon) => {
    if (icon === "") {
      return "";
    } else {
      const found = pokeTypes.find((color) => color.type === icon);
      return found.color;
    }
  };

  const defineColorParameter = (number) => {
    if (number < 40) {
      return "red";
    } else if (number > 40 && number < 80) {
      return "yellow";
    } else {
      return "green";
    }
  };

  return (
    <AnimatePresence>
    <Flex
      direction={"column"}
      w={"1440px"}
      m={"0 auto"}
      bgGradient={"linear(to-b, black, blue.300, gray.100, yellow.400)"}
      h={"1100px"}
      position={"relative"}
    >
      <Image
        src={pokeball}
        position="absolute"
        w={"1440px"}
        h={"840px"}
        mt={"160px"}
      />
      <Header />
      <Flex pt={"60px"} pl={"40px"} color={"#FFFFFF"} align={"center"}>
        <Heading>Detalhes</Heading>
      </Flex>
      <MotionFlex
        w={"1389px"}
        h={"663px"}
        bg={backgroundColor(parameterBackground)}
        borderRadius={"38px"}
        alignSelf={"center"}
        mt={"56px"}
        zIndex={"2"}
        boxShadow={"dark-lg"}
        initial={{opacity:0, scale:0}}
        animate={{opacity:1, scale:1}}
        exit={{opacity:0, scale:0}}
      >
        <Flex w={"694px"} align="center" justifyContent={"center"}>
          <Flex w={"394px"} alignItems={"center"} justifyContent={"center"}>
            <Flex
              direction={"column"}
              h={"613px"}
              align={"center"}
              justifyContent={"space-between"}
            >
              <Flex w={"282px"} h={"282px"} bg={"#FFFFFF"} borderRadius={"8px"}>
                <Image
                  w={"282px"}
                  h={"282px"}
                  src={pokemon?.sprites?.front_default}
                />
              </Flex>
              <Flex w={"282px"} h={"282px"} bg={"#FFFFFF"} borderRadius={"8px"}>
                <Image
                  w={"282px"}
                  h={"282px"}
                  src={pokemon?.sprites?.back_default}
                />
              </Flex>
            </Flex>
          </Flex>
          <Flex
            w={"394px"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Flex
              w={"343px"}
              h="613px"
              bg={"#FFFFFF"}
              borderRadius={"12px"}
              p={"18px"}
              direction={"column"}
            >
              <Heading fontSize={"24px"} mb={"5px"}>
                Base Stats
              </Heading>
              <Flex w={"307px"} h={"257px"} direction={"column"} gap={"5px"}>
                <Flex align={"center"} justifyContent={"space-between"}>
                  <Text>HP</Text>
                  <Flex
                    w={"227px"}
                    align={"center"}
                    justifyContent={"space-between"}
                  >
                    <Text as={"b"}>{pokemon?.stats[0].base_stat}</Text>
                    <Progress
                      colorScheme={defineColorParameter(
                        pokemon?.stats[0].base_stat
                      )}
                      value={pokemon?.stats[0].base_stat}
                      height={"15px"}
                      w={"170px"}
                      borderRadius={"9px"}
                    />
                  </Flex>
                </Flex>
                <hr />
                <Flex align={"center"} justifyContent={"space-between"}>
                  <Text>Attack</Text>
                  <Flex
                    w={"227px"}
                    align={"center"}
                    justifyContent={"space-between"}
                  >
                    <Text as={"b"}>{pokemon?.stats[1].base_stat}</Text>
                    <Progress
                      colorScheme={defineColorParameter(
                        pokemon?.stats[1].base_stat
                      )}
                      value={pokemon?.stats[1].base_stat}
                      height={"15px"}
                      w={"170px"}
                      borderRadius={"9px"}
                    />
                  </Flex>
                </Flex>
                <hr />
                <Flex align={"center"} justifyContent={"space-between"}>
                  <Text>Defense</Text>
                  <Flex
                    w={"227px"}
                    align={"center"}
                    justifyContent={"space-between"}
                  >
                    <Text as={"b"}>{pokemon?.stats[2].base_stat}</Text>
                    <Progress
                      colorScheme={defineColorParameter(
                        pokemon?.stats[2].base_stat
                      )}
                      value={pokemon?.stats[2].base_stat}
                      height={"15px"}
                      w={"170px"}
                      borderRadius={"9px"}
                    />
                  </Flex>
                </Flex>
                <hr />
                <Flex align={"center"} justifyContent={"space-between"}>
                  <Text>Sp. Atk</Text>
                  <Flex
                    w={"227px"}
                    align={"center"}
                    justifyContent={"space-between"}
                  >
                    <Text as={"b"}>{pokemon?.stats[3].base_stat}</Text>
                    <Progress
                      colorScheme={defineColorParameter(
                        pokemon?.stats[3].base_stat
                      )}
                      value={pokemon?.stats[3].base_stat}
                      height={"15px"}
                      w={"170px"}
                      borderRadius={"9px"}
                    />
                  </Flex>
                </Flex>
                <hr />
                <Flex align={"center"} justifyContent={"space-between"}>
                  <Text>Sp. Def</Text>
                  <Flex
                    w={"227px"}
                    align={"center"}
                    justifyContent={"space-between"}
                  >
                    <Text as={"b"}>{pokemon?.stats[4].base_stat}</Text>
                    <Progress
                      colorScheme={defineColorParameter(
                        pokemon?.stats[4].base_stat
                      )}
                      value={pokemon?.stats[4].base_stat}
                      height={"15px"}
                      w={"170px"}
                      borderRadius={"9px"}
                    />
                  </Flex>
                </Flex>
                <hr />
                <Flex align={"center"} justifyContent={"space-between"}>
                  <Text>Speed</Text>
                  <Flex
                    w={"227px"}
                    align={"center"}
                    justifyContent={"space-between"}
                  >
                    <Text as={"b"}>{pokemon?.stats[5].base_stat}</Text>
                    <Progress
                      colorScheme={defineColorParameter(
                        pokemon?.stats[5].base_stat
                      )}
                      value={pokemon?.stats[5].base_stat}
                      height={"15px"}
                      w={"170px"}
                      borderRadius={"9px"}
                    />
                  </Flex>
                </Flex>
                <hr />

                <Flex
                  align={"center"}
                  justifyContent={"flex-start"}
                  gap={"45px"}
                >
                  <Text>Total</Text>
                  <Text as={"b"} fontSize={"18px"}>
                    {pokemon?.stats[0].base_stat +
                      pokemon?.stats[1].base_stat +
                      pokemon?.stats[2].base_stat +
                      pokemon?.stats[3].base_stat +
                      pokemon?.stats[4].base_stat +
                      pokemon?.stats[5].base_stat}
                  </Text>
                </Flex>
                <Modal />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          w={"695px"}
          h={"613px"}
          align="center"
          justifyContent={"space-between"}
          position={"relative"}
          direction={"column"}
          gap={"63px"}
          pl={"58px"}
          mt={"25px"}
        >
          <Image
            src={pokeball}
            w={"750px"}
            h={"750px"}
            mt={"-25px"}
            mr={"50px"}
            position={"absolute"}
          />
          <Flex
            w={"650px"}
            h={"50px"}
            justify={"space-between"}
            pr={"50px"}
            zIndex={"3"}
          >
            <Flex direction={"column"} color={"#FFFFFF"}>
              <Text as={"b"}>#0{pokemon?.id}</Text>
              <Heading
                textTransform={"capitalize"}
                fontSize={"48px"}
                mt={"-10px"}
              >
                {pokemon?.name}
              </Heading>
              <Flex gap={"7px"} zIndex={"2"} pt={"20px"}>
                {pokemon?.types.map((icons) => {
                  return (
                    <PokeTypesBox key={icons.slot} type={icons.type.name} />
                  );
                })}
              </Flex>
            </Flex>
            <Image
              w={"370px"}
              h={"370px"}
              mt={"-100px"}
              ml={"40px"}
              src={pokemon?.sprites?.other.dream_world.front_default}
            />
          </Flex>
          <Flex w={"650px"} align={"end"} justifyContent={"flex-star"}>
            <Flex
              w={"292px"}
              h={"453px"}
              bg={"#FFFFFF"}
              borderRadius={"8px"}
              p={"18px"}
              direction={"column"}
              align={"center"}
              justify={"space-between"}
            >
              <Heading fontSize={"24px"}>Moves</Heading>
              <Flex
                w={"292px"}
                h={"400px"}
                direction={"column"}
                p={"20px"}
                gap={"5px"}
                wrap={"wrap"}
                align={"center"}
              >
                {pokemon?.moves.slice(0, 16).map((moves) => {
                  return (
                    <PokemonMoveBox
                      key={moves.move.name}
                      move={moves.move.name}
                    />
                  );
                })}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </MotionFlex>
    </Flex>
    </AnimatePresence>
  );
};
