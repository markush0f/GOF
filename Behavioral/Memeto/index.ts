/*
The memento design pattern is a behavioral design pattern that provides the ability to save and 
restore an object’s state.
There are several terminologies in the memento design pattern. These are:
Originator: It’s the class that can produce snapshots or restore.
Memento: It’s a placeholder for snapshots of the originator.
Caretaker: It decides when or where to use snapshots.
Client: This refers to the application or function that communicates with the system.
 */

import { Past } from "./Classes/past.class";
import { TextMemento } from "./Classes/text.memto";
import { TextEditor } from "./Classes/texteditor.class";




// Originator 



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