import { Flex, Image,Text } from "@chakra-ui/react";
import { pokeTypes } from "./PokeTypes";


export const PokeTypesBox = (props) => {
    const backgroundColor = (icon) => {
      const found = pokeTypes.find(color => color.type === icon)
      return found.color;
    };

    const putIcon = (icons) => {
        const found = pokeTypes.find(icon => icon.type === icons)
        return found.icon;
      };

      const nameType = (icon) => {
        const found = pokeTypes.find(name => name.type === icon)
        return found.type;
      };
  
    return (
      <Flex
        w={"99px"}
        h={"31px"}
        align={"center"}
        justify={"space-between"}
        pl={"8px"}
        pr={"8px"}
        border ={"1px"}
        borderRadius={"8px"}
        borderColor={"#FFFFFF"}
        borderStyle={"dashed"}
        bg={backgroundColor(props.type)}
      >
        <Image src={putIcon(props.type)} w={"20px"} h={"20px"} />
        <Text fontSize={"14px"} textTransform ={"Capitalize"}>{nameType(props.type)}</Text>
      </Flex>
    );
  };

  export const PokemonMoveBox = (props)=> {
    return (

      <Flex
        w={"102px"}
        h={"37px"}
        align={"center"}
        justify={"center"}
        border ={"1px"}
        borderRadius={"12px"}
        borderColor={"gray"}
        borderStyle={"dashed"}
        bg={"#ECECEC"}
      >
        <Text fontSize={"14px"} textTransform ={"Capitalize"}>{props.move}</Text>
      </Flex>

    )

  }