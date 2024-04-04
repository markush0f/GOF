import { Sandwich } from "./sandwich.class";

export class TurkeySandwich extends Sandwich {
    // Concrete implementation of adding ingredients
    addIngredients(): void {
        console.log("Adding turkey slices and cheese");
    }
    // Concrete implementation of adding condiments
    addCondiments(): void {
        console.log("Adding cranberry sauce and mustard");
    }
}