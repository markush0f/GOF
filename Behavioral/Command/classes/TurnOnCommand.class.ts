import { Command } from "../interfaces/Command.interface";
import { Device } from "../interfaces/Device.interface";
export class TurnOnCommand implements Command {
    private device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    execute(): void {
        this.device.turnOn();
    }
}