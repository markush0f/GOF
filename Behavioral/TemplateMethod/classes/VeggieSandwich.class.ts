import { Sandwich } from "./sandwich.class";

export class VeggieSandwich extends Sandwich {
    // Concrete implementation of adding ingredients
    addIngredients(): void {
        console.log("Adding lettuce, tomato, and cucumber");
    }
    // Concrete implementation of adding condiments
    addCondiments(): void {
        console.log("Adding mustard and mayo");
    }
}