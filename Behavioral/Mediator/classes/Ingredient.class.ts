import { Mediator } from "../interfaces/mediator.interface";
import { Colleague } from "./colleague.class";

export class Ingredient extends Colleague {
    constructor(mediator: Mediator, private name: string) {
        super(mediator);
    }

    action(action: string): void {
        console.log(`${this.name} reacts to ${action}`);
        this.mediator.communicate(this, action);
    }
}