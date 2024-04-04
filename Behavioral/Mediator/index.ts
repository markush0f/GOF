import { Colleague } from "./classes/colleague.class";
import { Ingredient } from "./classes/Ingredient.class";
import { Mediator } from "./interfaces/mediator.interface";






class SandwichMediator implements Mediator {
    communicate(sender: Colleague, action: string): void {
        console.log(`Mediator reacts to ${action}`);
    }
}

const mediator = new SandwichMediator();

const bread = new Ingredient(mediator, 'Bread');
const lettuce = new Ingredient(mediator, 'Lettuce');
const cheese = new Ingredient(mediator, 'Cheese');
const turkey = new Ingredient(mediator, 'Turkey');

bread.action('Adding bread');
lettuce.action('Adding lettuce');
cheese.action('Adding cheese');
turkey.action('Adding turkey');
