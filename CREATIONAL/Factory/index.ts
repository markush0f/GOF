import { ComputerFactory } from "./factory/computer.factory";

const pc = ComputerFactory.getComputer("pc", "2 GB", "500 GB", "2.4 GHz");
const server = ComputerFactory.getComputer("server", "10 GB", "2 TB", "2.9 GHz");

console.log("Factory pc:", pc);
console.log("Factory Server:", server);


