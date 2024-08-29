import dog from "./dog";
import frog from "./frog";

const characters = {
  dog,
  frog,
} as const;

export default characters;

export type CharacterType = keyof typeof characters;
