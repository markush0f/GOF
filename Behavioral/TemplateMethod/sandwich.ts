abstract class Sandwich {
    // Template method defining the sandwich creation algorithm
    makeSandwich(): void {
        this.cutBread();
        this.addIngredients();
        this.addCondiments();
        this.wrapSandwich();
    }
    // Concrete steps of the sandwich creation algorithm
    cutBread(): void {
        console.log("Cutting the bread");
    }
    wrapSandwich(): void {
        console.log("Wrapping the sandwich");
    }
    // Abstract methods to be implemented by concrete subclasses
    abstract addIngredients(): void;
    abstract addCondiments(): void;
}
class VeggieSandwich extends Sandwich {
    // Concrete implementation of adding ingredients
    addIngredients(): void {
        console.log("Adding lettuce, tomato, and cucumber");
    }
    // Concrete implementation of adding condiments
    addCondiments(): void {
        console.log("Adding mustard and mayo");
    }
}
class TurkeySandwich extends Sandwich {
    // Concrete implementation of adding ingredients
    addIngredients(): void {
        console.log("Adding turkey slices and cheese");
    }
    // Concrete implementation of adding condiments
    addCondiments(): void {
        console.log("Adding cranberry sauce and mustard");
    }
}
// Usage
console.log("Making a Veggie Sandwich:");
const veggieSandwich = new VeggieSandwich();
veggieSandwich.makeSandwich();
console.log("\nMaking a Turkey Sandwich:");
const turkeySandwich = new TurkeySandwich();
turkeySandwich.makeSandwich();
