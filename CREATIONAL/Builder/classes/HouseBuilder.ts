import { House } from "./House";

export class HouseBuilder {
    // Required
    public numBaths: number = 0;
    public numRooms: number = 0;
    public numKitchens: number = 0;
    public hasGarden: boolean = false;

    // Optional
    public numResidents?: number;

    constructor() { }

    public set NumBaths(numBaths: number) {
        this.numBaths = numBaths;
    }

    public set NumRooms(numRooms: number) {
        this.numRooms = numRooms;

    }

    public set NumKitchens(numKitchens: number) {
        this.numKitchens = numKitchens;

    }

    public set HasGarden(hasGarden: boolean) {
        this.hasGarden = hasGarden;
    }

    public set NumResidents(numResidents: number) {
        this.numResidents = numResidents;

    }

    public build(): House {
        return new House(this);
    }
}