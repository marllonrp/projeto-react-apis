import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Heading,
  Flex,
  Text,
  Box,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import GlobalContext from "../../Context/GlobalContex";


export const ModalBox = () => {
  const { isOpen, setIsOpen,  changeButtonDetails } = useContext(GlobalContext);
  const location = useLocation();
  const  {details} = useParams()

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent w={"451px"} h={"222px"}>
          <ModalBody>

            <Flex
              w={"400px"}
              h={"200px"}
              align={"center"}
              justify={"center"}
            >

<Flex w={"390px"}
        h={"190px"}
        border={"2px"}
        borderRadius={"12px"}
        borderColor="blue"
        align={"center"}
        justify={"center"}
        >
            <Flex w={"380px"}
        h={"180px"}
        bg={"gray.200"}
        border={"2px"}
        borderRadius={"12px"}
        borderColor="yellow"
        direction={"column"}
        align={"center"}
        justify={"center"}
       
        >

{location.pathname === "/" ? (
                <Box align={"center"} justify={"center"}>
                  <Heading>Gotcha!</Heading>
                  <Text>O Pokémon foi adicionado a sua Pokédex</Text>
                </Box>
              ) : (
                <Box align={"center"} justify={"center"}>
                  {changeButtonDetails(details)?<Heading>Gotcha!</Heading>:<Heading>Oh,no!</Heading>}
                  {changeButtonDetails(details)?<Text>O Pokémon foi acicionado à sua Pokédex</Text>:<Text>O Pokémon foi removido da sua Pokédex</Text>}
                  
                </Box>
              )}
            


       </Flex>

       </Flex>
              
             
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
