interface Mediator {
    communicate(sender: Colleague, action: string): void;
}

abstract class Colleague {
    constructor(protected mediator: Mediator) {}

    abstract action(action: string): void;
}

class Ingredient extends Colleague {
    constructor(mediator: Mediator, private name: string) {
        super(mediator);
    }

    action(action: string): void {
        console.log(`${this.name} reacts to ${action}`);
        this.mediator.communicate(this, action);
    }
}

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
