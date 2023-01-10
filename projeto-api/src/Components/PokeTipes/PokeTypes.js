import poisonIcon from "./assets/PoisonIcon.png";
import grassIcon from "./assets/GrassIcon.png";
import fireIcon from "./assets/FireIcon.png";
import flyingIcon from "./assets/FlyingIcon.png";
import waterIcon from "./assets/WaterIcon.png";
import bugIcon from "./assets/BugIcon.png";
import normalIcon from "./assets/NormalIcon.png";
import darkIcon from "./assets/DarkIcon.png";
import dragonIcon from "./assets/DragonIcon.png";
import electricIcon from "./assets/ElectricIcon.png";
import fairyIcon from "./assets/FairyIcon.png";
import fightingIcon from "./assets/FightingIcon.png";
import ghostIcon from "./assets/GhostIcon.png";
import groundIcon from "./assets/GroundIcon.png";
import iceIcon from "./assets/IceIcon.png";
import psychicIcon from "./assets/PsychicIcon.png";
import rockIcon from "./assets/RockIcon.png";
import steelIcon from "./assets/SteelIcon.png";

const changeColor = (hex, luminosity) => {
  hex = hex.replace(/[^0-9a-f]/gi, "");

  const twoDigitesGroup = hex.match(/([0-9a-f]){2}/gi);
  let newHex = "#";
  for (let twoDigit of twoDigitesGroup) {
    const numberFormHex = parseInt(twoDigit, 16);
    const calculateLuminosity = numberFormHex + luminosity * 255;

    const blackOrLuminosity = Math.max(0, calculateLuminosity);
    const partialColor = Math.min(255, blackOrLuminosity);

    const newColor = Math.round(partialColor);

    const numberToHex = newColor.toString(16);
    const finalNumber = `0${numberToHex}`.slice(-2);
    newHex = newHex + finalNumber;
  }
  return newHex;
};

export const pokeTypes = [
  {
    type: "poison",
    icon: poisonIcon,
    color: "#AD61AE",
    backgroundColor: changeColor("#AD61AE", -0.2),
  },
  {
    type: "grass",
    icon: grassIcon,
    color: "#70B873",
    backgroundColor: changeColor("#70B873", -0.2),
  },
  {
    type: "fire",
    icon: fireIcon,
    color: "#F44900",
    backgroundColor: changeColor("#F44900", -0.2),
  },
  {
    type: "flying",
    icon: flyingIcon,
    color: "#6892B0",
    backgroundColor: changeColor("#6892B0", -0.2),
  },
  {
    type: "water",
    icon: waterIcon,
    color: "#33A4F5",
    backgroundColor: changeColor("#33A4F5", -0.2),
  },
  {
    type: "bug",
    icon: bugIcon,
    color: "#316520",
    backgroundColor: changeColor("#316520", -0.2),
  },
  {
    type: "normal",
    icon: normalIcon,
    color: "#8A8A8A",
    backgroundColor: changeColor("#8A8A8A", -0.2),
  },
  {
    type: "dark",
    icon: darkIcon,
    color: "#5C5365",
    backgroundColor: changeColor("#5C5365", -0.2),
  },
  {
    type: "dragon",
    icon: dragonIcon,
    color: "#0A6CBF",
    backgroundColor: changeColor("#0A6CBF", -0.2),
  },
  {
    type: "electric",
    icon: electricIcon,
    color: "#F4D23B",
    backgroundColor: changeColor("#F4D23B", -0.2),
  },
  {
    type: "fairy",
    icon: fairyIcon,
    color: "#EC8FE6",
    backgroundColor: changeColor("#EC8FE6", -0.2),
  },
  {
    type: "fighting",
    icon: fightingIcon,
    color: "#CE4069",
    backgroundColor: changeColor("#CE4069", -0.2),
  },
  {
    type: "ghost",
    icon: ghostIcon,
    color: "#5269AC",
    backgroundColor: changeColor("#5269AC", -0.2),
  },
  {
    type: "ground",
    icon: groundIcon,
    color: "#D97745",
    backgroundColor: changeColor("#D9&&45", -0.2),
  },
  {
    type: "ice",
    icon: iceIcon,
    color: "#74CEC0",
    backgroundColor: changeColor("#74CEC0", -0.2),
  },
  {
    type: "psychic",
    icon: psychicIcon,
    color: "#F67176",
    backgroundColor: changeColor("#F67176", -0.2),
  },
  {
    type: "rock",
    icon: rockIcon,
    color: "#C7B78B",
    backgroundColor: changeColor("#C7B78B", -0.2),
  },
  {
    type: "steel",
    icon: steelIcon,
    color: "#BBBBBB",
    backgroundColor: changeColor("#BBBBBB", -0.2),
  },
];
