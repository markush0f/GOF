import { ConcreteIterator } from "./classes/ConcreteIterator.class";
import { IterableInterface } from "./interfaces/Iterable.interface";


const iterableObject: IterableInterface = {
    items: ["s", "d", "e", "f",],
    getIterator: () => {
        return new ConcreteIterator(iterableObject);
    },
};

const iterator = iterableObject.getIterator();

while (iterator.hasNext()) {
    console.log(iterator.next());
}
