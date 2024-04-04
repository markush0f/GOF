import { ConcreteIterator } from "../classes/ConcreteIterator.class";

export interface IterableInterface {
    readonly items: string[];
    getIterator: () => ConcreteIterator;
}