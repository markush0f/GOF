/*
The memento design pattern is a behavioral design pattern that provides the ability to save and 
restore an object’s state.
There are several terminologies in the memento design pattern. These are:
Originator: It’s the class that can produce snapshots or restore.
Memento: It’s a placeholder for snapshots of the originator.
Caretaker: It decides when or where to use snapshots.
Client: This refers to the application or function that communicates with the system.
 */


class TextMemento {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    getState(): string {
        return this.state;
    }
}

// Originator 
class TextEditor {
    private content: string;

    constructor() {
        this.content = '';
    }

    getContent(): string {
        return this.content;
    }

    setContent(content: string): void {
        this.content = content;
    }

    createMemento(): TextMemento {
        return new TextMemento(this.content);
    }

    restoreFromMemento(memento: TextMemento): void {
        this.content = memento.getState();
    }
}

// Caretaker
class Past {
    private mementos: TextMemento[] = [];

    addMemento(memento: TextMemento): void {
        this.mementos.push(memento);
    }

    getMemento(index: number): TextMemento {
        return this.mementos[index];
    }
}

// Client
const editor = new TextEditor();
const past = new Past();

past.addMemento(editor.createMemento());

editor.setContent("Hello, ");
past.addMemento(editor.createMemento());

editor.setContent("World!");
past.addMemento(editor.createMemento());


editor.restoreFromMemento(past.getMemento(1));

console.log(editor.getContent());


editor.restoreFromMemento(past.getMemento(2));

console.log(editor.getContent());