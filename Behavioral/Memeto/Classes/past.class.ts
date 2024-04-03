import { TextMemento } from "./text.memto";

// Caretaker
export class Past {
    private mementos: TextMemento[] = [];

    addMemento(memento: TextMemento): void {
        this.mementos.push(memento);
    }

    getMemento(index: number): TextMemento {
        return this.mementos[index];
    }
}