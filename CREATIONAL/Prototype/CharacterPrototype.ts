import { Character } from "./character";
export interface CharacterPrototype {
    clone(): Character;
    customize(attributes: Partial<Character>): void;
}