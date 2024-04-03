/*
The Builder design pattern is a creative pattern that is used to build a complex object 
step by step. It allows the creation of a composite object from the construction 
of its individual parts, so that the construction process can vary while the resulting 
object remains the same.
*/

import { HouseBuilder } from "./HouseBuilder";


export class House {

    // Required
    private numBaths: number = 0;
    private numRooms: number = 0;
    private numKitchens: number = 0;
    private hasGarden: boolean = false;

    // Optional
    private numResidents?: number;

    constructor(builder: HouseBuilder) {
        this.numBaths = builder.numBaths;
        this.numRooms = builder.numRooms;
        this.numKitchens = builder.numKitchens;
        this.hasGarden = builder.hasGarden;
        this.numResidents = builder.numResidents;
    }

    public get NumBaths(): number {
        return this.numBaths
    }

    public get NumRooms(): number {
        return this.numRooms;
    }

    public get NumKitchens(): number {
        return this.numKitchens;
    }

    public get HasGarden(): boolean {
        return this.hasGarden;
    }

    public get NumResidents(): number | undefined {
        return this.numResidents;
    }

    public toString(): string {

        return `\n -Baths: ${this.NumBaths}
        \n -Rooms: ${this.NumRooms}
        \n -¿Garden?: ${this.HasGarden ? "Has a garden" : "No garden"}
        \n -Residents: ${this.NumResidents ? this.NumResidents : "No residents"}`;
    }
}
