import { Character } from "./character";

// Create a new Character:
const character = new Character("Pepe", 12, 340);
console.log("Character: ", character.toString());

// Clone the character:
const clonedCharacter = character.clone()
console.log("\nCharacter cloned: ", clonedCharacter.toString());

// Customize the character cloned: 
clonedCharacter.customize(
    {
        level: 30,
        points: 12
    }
)
console.log("\nCustom cloned player: ", clonedCharacter.toString());
