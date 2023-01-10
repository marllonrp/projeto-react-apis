import { Flex, Heading, Image, Modal, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { Card } from "../Components/Cards/Card";
import { Header } from "../Components/Header/Index";
import GlobalContext from "../Context/GlobalContex";
import rotom from "./assets/Rotom.png"

export const PokedexPage = () => {
  const context = useContext(GlobalContext);
  const { getPokemonStorage } = context;
  const MotionFlex = motion(Flex)

  return (
    <Flex
      direction={"column"}
      w={"1440px"}
      m={"0 auto"}
      bgGradient={"linear(to-b, black, blue.300, gray.100, yellow.400)"}
      h={"auto"}
      minH={"800px"}
    >
      <Header />
      <Flex pt={"60px"} pl={"40px"} color={"#FFFFFF"} align={"center"}>
        <Heading>Meus Pokémons</Heading>
        </Flex>
        <AnimatePresence>
        <Flex
        pt={"53px"}
        pl={"40px"}
        wrap={"wrap"}
        rowGap={"53px"}
        columnGap={"20px"}
        zIndex={"2"}
      >
        {getPokemonStorage.map((pokemon) => {
          return <Card key={pokemon.id} pokemon={pokemon} />;
        })}
        
        {getPokemonStorage.length === 0?
        <MotionFlex w={"800px"}
        h={"200px"}
        bg={"white"}
        ml={"20%"}
        mt={"50px"}
        borderRadius={"12px"}
        align={"center"}
        justify={"center"}
        boxShadow={"dark-lg"}
      initial={{opacity:0, scale:0}}
      animate={{opacity:1, scale:1}}
      exit={{opacity:0, scale:0}}> 
       <Flex w={"780px"}
        h={"180px"}
        border={"2px"}
        borderRadius={"12px"}
        borderColor="blue"
        align={"center"}
        justify={"center"}
        >
            <Flex w={"760px"}
        h={"160px"}
        bg={"gray.200"}
        border={"2px"}
        borderRadius={"12px"}
        borderColor="yellow"
        direction={"column"}
        align={"center"}
        justify={"center"}
        position={"relative"}
        >
            <Heading>Seu Pokédex está vazio!</Heading>
            <Text>Volte à  Página Inicial para capturar Pokémons.</Text>
            <Image src={rotom} position={"absolute"} transform={"rota"}
            w={"600px"} h={"600px"} ml={"800px"}/>


       </Flex>

       </Flex>
        </MotionFlex>: null}
        {console.log(getPokemonStorage)}

         </Flex>

        </AnimatePresence>
      
        <Modal />
     
    </Flex>
  );
};
