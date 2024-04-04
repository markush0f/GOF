import { Mediator } from "../interfaces/mediator.interface";

export abstract class Colleague {
    constructor(protected mediator: Mediator) {}

    abstract action(action: string): void;
}