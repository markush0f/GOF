import { Character } from "../classes/character.class";
export interface CharacterPrototype {
    clone(): Character;
    customize(attributes: Partial<Character>): void;
}