interface IteratorInterface {
    hasNext: () => boolean;
    next: () => string | null;
    increaseIndex: () => void;
    index: number;
}

type Items = string[];

interface IterableInterface {
    readonly items: Items;
    getIterator: () => ConcreteIterator;
}

class ConcreteIterator implements IteratorInterface {
    iter: Items;
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

const iterableObject: IterableInterface = {
    items: ["s", "d", "e", "f",],
    getIterator: () => {
        return new ConcreteIterator(iterableObject);
    },
};

const client = (): void => {
    const iterator = iterableObject.getIterator();

    while (iterator.hasNext()) {
        console.log(iterator.next());
    }
};

client();
