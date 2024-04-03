import { PC } from "./pc";
import { Server } from "./server";

export class ComputerFactory {
    static getComputer(type: string, ram: string, hdd: string, cpu: string) {
        if ("pc" === type.toLocaleLowerCase()) return new PC(ram, hdd, cpu);
        else if ("server" === type.toLocaleLowerCase()) return new Server(ram, hdd, cpu)
        return "Don´t exist this tipe"
    }

}