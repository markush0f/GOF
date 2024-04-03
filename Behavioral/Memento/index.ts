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