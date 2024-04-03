/* 
The Prototype design pattern is a creative design pattern used to create new objects
based on an existing object prototype, cloning it and modifying the details as needed.
It would be easy to understand prototype design pattern with an example. 
Suppose we have an Object that loads data from database. 
Now we need to modify this data in our program multiple times, 
so it’s not a good idea to create the Object using new keyword 
and load all the data again from database.The better approach would be to clone the 
existing object into a new object and then do the data manipulation.
*/

import { CharacterPrototype } from "./CharacterPrototype";

export class Character implements CharacterPrototype {

    // The ideal is to do get methods for each attribute and put private.
    public name: string;
    public level: number;
    public points: number;

    constructor(name: string, level: number, points: number) {
        this.name = name;
        this.level = level;
        this.points = points;
    }
    // gets...
    public toString(): string {
        return `Name: ${this.name}, Level: ${this.level}, Points: ${this.points}`;
    }
    clone(): Character {
        return new Character(this.name, this.level, this.points);

    }
    public customize(attributes: Partial<Character>): void {
        if (attributes.name !== undefined) {
            this.name = attributes.name;
        }
        if (attributes.level !== undefined) {
            this.level = attributes.level;
        }
        if (attributes.points !== undefined) {
            this.points = attributes.points;
        }
    }
}

