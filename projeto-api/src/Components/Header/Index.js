import { Flex, Image, Button } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import GlobalContext from "../../Context/GlobalContex";
import { ModalBox } from "../Modal/Modal";
import pokemonImage from "./assets/Pokemon.png";
import axios from "axios";
import { baseURL } from "../BaseURL/BaseURL";
import { goToHomePage, goToPokedex } from "../../Routes/Coordinator";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const  {details} = useParams();
  const {setIsOpen, removePokemonPokedex,changeButtonDetails, setGetPokemonByDetails, pokedexStorageByDetails} = useContext(GlobalContext)
  
  const getPokemonForDetails = async () => {
    if(details!==undefined){
        try {
            const response = await axios.get(
              `${baseURL}/pokemon/${
                details
              }`,
              {
                headers: {
                  Authorization: "Marllon-Rodrigues",
                },
              }
            );
      
            setGetPokemonByDetails(response.data);
          } catch (error) {
            console.log(error.response);
          }
        };
    }
    

  useEffect(() => {
    getPokemonForDetails();
  }, [details]);


  return (
    <>
      <Flex
        w={"100%"}
        h={"160px"}
        alignItems={"center"}
        position={"relative"}
        justify={"center"}
        zIndex={"1"}
        bg={"#FFFFFF"}
      >
        {location.pathname !== ("/")? (
          <Button
          w={location.pathname === `/details/${details}`?"226px":"287px"}
          h={location.pathname === `/details/${details}`?"57px":"74px"}
            fontSize={location.pathname === `/details/${details}`?"16px":"24px"}
            mr={location.pathname=== "/pokedex"?"75%":"60%"}
            onClick={()=>goToHomePage(navigate)}
            colorScheme={"green"}
            color={"white"}
          >
            Todos Pokémons
          </Button>
        ):null}

        <Image
          src={pokemonImage}
          alignSelf={"center"}
          pos={"absolute"}
          p={"40%"}
          zIndex={"-1"}
        ></Image>

        {location.pathname === `/details/${details}`?(
        <Button
            onClick={()=>
                {setIsOpen(true)
                changeButtonDetails(details)?removePokemonPokedex(details):pokedexStorageByDetails()
                }}
            colorScheme={changeButtonDetails(details)?"red": "blue"}
            w={"226px"}
            h={"57px"}
            fontSize={"16px"}
            mr={"40px"}
          >
            
            {changeButtonDetails(details)?"Excluir da Pokédex": "Adicionar à Pokedéx"}
            
          </Button>
        ):null}

        {location.pathname === "/" && "/home" && (
          <Button
            onClick={()=>goToPokedex(navigate)}
            colorScheme="blue"
            w={"287px"}
            h={"74px"}
            fontSize={"24px"}
            ml={"75%"}
          >
            Pokédex
          </Button>
        )}
        
      </Flex>
      <ModalBox/>
    </>
  );
};
