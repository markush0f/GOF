import {HouseBuilder } from "./House";

const houseBuilder = new HouseBuilder();

// Now, we create the house step by step
houseBuilder.NumBaths = 3;
houseBuilder.NumKitchens = 1;
houseBuilder.NumRooms = 2;
houseBuilder.NumResidents = 2;
houseBuilder.HasGarden = true;

// Build the house
const house = houseBuilder.build()

console.log(house.toString());

