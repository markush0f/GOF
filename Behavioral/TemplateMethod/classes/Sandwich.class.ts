export abstract class Sandwich {
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