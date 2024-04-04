import { IterableInterface } from "../interfaces/Iterable.interface";
import { IteratorInterface } from "../interfaces/Iterator.interface";

export class ConcreteIterator implements IteratorInterface {
    iter: string[];
    index: number;

    constructor(iterList: IterableInterface) {
        this.index = 0;
        this.iter = iterList.items;
    }

    increaseIndex = (): void => {
        if (this.index <= this.iter.length - 1) {
            this.index += 1;
        }
    };

    hasNext = (): boolean => {
        return this.index <= this.iter.length - 1;
    };

    next = (): string | null => {
        if (this.index >= this.iter.length) {
            return null;
        }
        const curr = this.iter[this.index];
        this.increaseIndex();
        return curr;
    };
}