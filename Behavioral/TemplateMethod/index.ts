import { TurkeySandwich } from "./classes/TurkeySandwich.class";
import { VeggieSandwich } from "./classes/VeggieSandwich.class";

// Usage
console.log("Making a Veggie Sandwich:");
const veggieSandwich = new VeggieSandwich();
veggieSandwich.makeSandwich();
console.log("\nMaking a Turkey Sandwich:");
const turkeySandwich = new TurkeySandwich();
turkeySandwich.makeSandwich();
