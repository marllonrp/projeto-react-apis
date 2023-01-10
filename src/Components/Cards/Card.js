import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Image,
  Button,
  Skeleton,
} from "@chakra-ui/react";
import { memo, useContext, useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../BaseURL/BaseURL";
import BackgrounCard from "./assets/CardBackground.png";
import { PokeTypesBox } from "../PokeTipes/PokeTypesBox";
import { pokeTypes } from "../PokeTipes/PokeTypes";
import GlobalContext from "../../Context/GlobalContex";
import { useLocation, useNavigate } from "react-router-dom";
import { toDetails } from "../../Routes/Coordinator"
import { motion } from "framer-motion";

export const Card = memo(
  (props) => {
  const { name } = props.pokemon;
  const [typePokemon,setTypePokemon]=useState([])
  const location = useLocation();
  const navigation = useNavigate();
  const MotionFlex = motion(Flex)
  const {setIsOpen, pokedexStorage, removePokemonPokedex, setIsLoading, isLoading  } = useContext(GlobalContext);


  const getTypePokemon = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(
        `${baseURL}/pokemon/${
          location.pathname === "/" ? name : props.pokemon.title
        }`,
        {
          headers: {
            Authorization: "Marllon-Rodrigues",
          },
        }
      );

      setTypePokemon(response.data);
      setIsLoading(false)
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getTypePokemon();
  }, []);


  const [parameterBackground, setParameterBackground] = useState("");
  const parameterBackground2 =
    typePokemon?.types && typePokemon?.types[0]?.type.name;

  useEffect(() => {
    if (parameterBackground2 === undefined) {
      setParameterBackground("");
    }

    if (parameterBackground2 !== undefined && parameterBackground2 !== "") {
      setParameterBackground(typePokemon.types[0].type.name);
    }
  }, [parameterBackground2]);

  const backgroundColor = (icon) => {
    if (icon === ""||icon===undefined) {
      return "";
    } else {
      const found = pokeTypes.find((color) => color.type === icon);
      return found.backgroundColor;
    }
  };

  const [imageObject, setImageObject] = useState("");
  const imageObject2 =
    typePokemon?.sprites &&
    typePokemon?.sprites.other["official-artwork"]?.front_default;

  useEffect(() => {
    if (imageObject2 === undefined) {
      setImageObject("");
    }

    if (imageObject2 !== undefined && imageObject2 !== "") {
      setImageObject(
        typePokemon.sprites.other["official-artwork"].front_default
      );
    }
  }, [imageObject2]);

  const renderPokemons = {
    title: typePokemon?.name,
    id: typePokemon?.id,
    types: typePokemon?.types,
    image: imageObject,
    backgroundColor: parameterBackground,
  };


  return location.pathname === "/" ? (
    <Skeleton borderRadius={"12px"} isLoaded={!isLoading}>
    <MotionFlex
      w={"440px"}
      h={"210px"}
      borderRadius={"12px"}
      bg={backgroundColor(parameterBackground)}
      boxShadow={"dark-lg"}
      initial={{opacity:0, scale:0}}
      animate={{opacity:1, scale:1}}
      exit={{opacity:0, scale:0}}
    >
      <Flex
        w={"220px"}
        direction={"column"}
        color={"#FFFFFF"}
        pl={"23px"}
        pt={"25px"}
        pb={"20px"}
        justifyContent={"space-between"}
      >
        <Flex direction={"column"}>
          <Text as={"b"}>#0{typePokemon.id}</Text>
          <Heading textTransform={"capitalize"} fontSize={"32px"} mt={"-10px"}>
            {name}
          </Heading>
        </Flex>
        <Flex gap={"7px"} zIndex={"2"}>
          {typePokemon.types?.map((icons) => {
            return <PokeTypesBox key={icons.slot} type={icons.type.name} />;
          })}
        </Flex>
        <Box zIndex={"2"}>
          <Text as={"b"}>
            <Link onClick={() => toDetails(navigation, name)}>Detalhes</Link>
          </Text>
        </Box>
      </Flex>
      <Flex
        direction={"column"}
        align={"center"}
        pb={"10px"}
        w={"200px"}
        gap={"22px"}
      >
        <Image
          w={"193px"}
          h={"193px"}
          mt={"-53px"}
          src={imageObject}
          zIndex={"2"}
        />

        <Image
          w={"330px"}
          h={"220px"}
          pr={"50px"}
          src={BackgrounCard}
          position={"absolute"}
          zIndex={"1"}
        />
        <Button
          w={"146px"}
          h={"38px"}
          bg={"#FFFFFF"}
          zIndex={"2"}
          onClick={() => {
            pokedexStorage(renderPokemons, typePokemon);
            setIsOpen(true);
          }}
        >
          Capturar!
        </Button>
      </Flex>
    </MotionFlex>
    </Skeleton>
  ) : (
    <MotionFlex
      w={"440px"}
      h={"210px"}
      borderRadius={"12px"}
      bg={backgroundColor(props.pokemon.backgroundColor)}
      boxShadow={"dark-lg"}
      initial={{opacity:0, scale:0}}
      animate={{opacity:1, scale:1}}
      exit={{opacity:0, scale:0}}
    >
      <Flex
        w={"220px"}
        direction={"column"}
        color={"#FFFFFF"}
        pl={"23px"}
        pt={"25px"}
        pb={"20px"}
        justifyContent={"space-between"}
      >
        <Flex direction={"column"}>
          <Text as={"b"}>#0{props.pokemon.id}</Text>
          <Heading textTransform={"capitalize"} fontSize={"32px"} mt={"-10px"}>
            {props.pokemon.title}
          </Heading>
        </Flex>
        <Flex gap={"7px"} zIndex={"2"}>
          {props.pokemon.types.map((icons) => {
            return <PokeTypesBox key={icons.slot} type={icons.type.name} />;
          })}
        </Flex>
        <Box zIndex={"2"}>
          <Text as={"b"}>
            <Link onClick={() => toDetails(navigation, props.pokemon.title)}>
              Detalhes
            </Link>
          </Text>
        </Box>
      </Flex>
      <Flex
        direction={"column"}
        align={"center"}
        pb={"10px"}
        w={"200px"}
        gap={"22px"}
      >
        <Image
          w={"193px"}
          h={"193px"}
          mt={"-53px"}
          src={props.pokemon.image}
          zIndex={"2"}
        />

        <Image
          w={"330px"}
          h={"220px"}
          pr={"50px"}
          src={BackgrounCard}
          position={"absolute"}
          zIndex={"1"}
        />
        <Button
          w={"146px"}
          h={"38px"}
          bg={"red"}
          zIndex={"2"}
          color={"#FFFFFF"}
          onClick={() => {
            setIsOpen(true);
            removePokemonPokedex(props.pokemon.title);
          }}
        >
          Excluir!
        </Button>
      </Flex>
    </MotionFlex>
  );
}, (next, prev)=> next.pokemon === prev.pokemon)
