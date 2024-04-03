import { Computer } from "./computer.class";

export class Server extends Computer {

    private ram: string;
    private hdd: string;
    private cpu: string;

    constructor(ram: string, hdd: string, cpu: string) {
        super();
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
    }

    getRAM(): string {
        return this.ram;
    }
    getHDD(): string {
        return this.hdd;
    }
    getCPU(): string {
        return this.cpu;
    }

}